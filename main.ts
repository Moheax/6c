let graden = 0
basic.forever(function () {
    graden = input.compassHeading()
    if (graden < 45) {
        basic.showString("N")
    } else if (graden > 315) {
        basic.showString("N")
    } else if (graden >= 225) {
        basic.showString("W")
    } else if (graden >= 135) {
        basic.showString("Z")
    } else {
        basic.showString("O")
    }
})
