/**
 * Stop = 0
 * 
 * Forward = 17000
 * 
 * Backward = 13000
 */
input.onButtonPressed(Button.A, function () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    control.waitMicros(20000)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    control.waitMicros(20000)
})
input.onButtonPressed(Button.B, function () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    control.waitMicros(20000)
})
basic.forever(function () {
	
})
