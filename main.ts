input.onButtonPressed(Button.B, function () {
    maqueen.servoRun(maqueen.Servos.S1, 10)
    basic.pause(500)
    maqueen.servoRun(maqueen.Servos.S1, 200)
    basic.pause(500)
})
basic.forever(function () {
	
})
