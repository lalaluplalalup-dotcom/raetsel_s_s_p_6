input.onGesture(Gesture.Shake, function () {
    zufall = randint(1, 3)
    if (zufall == eins) {
        basic.showIcon(IconNames.Scissors)
    }
    if (zufall == zwei) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (zufall == drei) {
        basic.showIcon(IconNames.Square)
    }
    basic.clearScreen()
})
let zufall = 0
let zwei = 0
let drei = 0
let eins = 0
eins = 1
drei = 5
zwei = 6
