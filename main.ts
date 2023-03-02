// input.setAccelerometerRange(AcceleratorRange.TwoG)

// basic.forever(function() {
//     let x = input.acceleration(Dimension.X)
//     let y = input.acceleration(Dimension.Y)
//     let z = input.acceleration(Dimension.Z)
//     let s = input.acceleration(Dimension.Strength)
//     console.logValue("x", x)
//     console.logValue("y", y)
//     console.logValue("z", z)
//     basic.pause(100)
// })


input.onButtonPressed(Button.A, function () {
    ExpSense.restart()
    basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
}) 

ExpSense.onExplosiveState(function(xaxis: number, yaxis: number, shakingvalue: number) {
    console.logValue("x", xaxis)
    console.logValue("y", yaxis)
    if (xaxis ===)
})

ExpSense.onExplode(function() {
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
})