input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Cow)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Giraffe)
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Angry)
    basic.showNumber(35.66 * 345.66)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (true) {
        music.playMelody("F D G C5 C A E B ", 427)
    }
})
basic.showIcon(IconNames.Pitchfork)
