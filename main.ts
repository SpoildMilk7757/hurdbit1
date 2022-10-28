/**
 * 1700 on the top and 1300 on the bottom
 */
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
input.onButtonPressed(Button.A, function () {
    Left()
})
function backward () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    control.waitMicros(20000)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.AB, function () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    control.waitMicros(20000)
    pins.servoSetPulse(AnalogPin.P13, 0)
    control.waitMicros(20000)
})
input.onButtonPressed(Button.B, function () {
    Right()
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
    basic.showNumber(distance2)
    basic.pause(100)
})
