let mano = 0
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    mano = randint(1, 3)
    if (mano == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
    } else if (mano == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (mano == 3) {
        basic.showLeds(`
            # . . . .
            . # . # #
            . . # . .
            . # . # #
            # . . . .
            `)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
