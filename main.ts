function Left () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    control.waitMicros(20000)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
    basic.pause(1850)
    pins.servoSetPulse(AnalogPin.P8, 0)
    control.waitMicros(20000)
    pins.servoSetPulse(AnalogPin.P13, 0)
    control.waitMicros(20000)
}
function stop () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    control.waitMicros(20000)
    pins.servoSetPulse(AnalogPin.P13, 0)
    control.waitMicros(20000)
}
function backward () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    control.waitMicros(20000)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
/**
 * 1700 on the top and 1300 on the bottom
 */
radio.onReceivedString(function (receivedString) {
    if ("left" == receivedString) {
        Left()
    } else if ("right" == receivedString) {
        Right()
    } else if ("forward" == receivedString) {
        forward()
    } else if ("back" == receivedString) {
        backward()
    } else if ("stop" == receivedString) {
        stop()
    }
})
/**
 * Stop = 0
 * 
 * Forward = 17000
 * 
 * Backward = 13000
 */
function forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    control.waitMicros(20000)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function Right () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    control.waitMicros(20000)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
    basic.pause(1850)
    pins.servoSetPulse(AnalogPin.P8, 0)
    control.waitMicros(20000)
    pins.servoSetPulse(AnalogPin.P13, 0)
    control.waitMicros(20000)
}
let distance2 = 0
let distance = 0
basic.showIcon(IconNames.Skull)
radio.setGroup(123)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P0, 0)
    distance = Math.idiv(pins.pulseIn(DigitalPin.P1, PulseValue.High), 58)
    if (distance < 700) {
        distance2 = distance
    }
    if (distance2 < 11) {
        backward()
        basic.pause(500)
        stop()
        basic.pause(500)
        Left()
    }
})
