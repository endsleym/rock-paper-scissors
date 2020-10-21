let Hand = 0
input.onGesture(Gesture.Shake, function () {
    let hand__1 = 0
    Hand = randint(1, 3)
    if (hand__1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
basic.forever(function () {
	
})
