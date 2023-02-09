input.setAccelerometerRange(AcceleratorRange.TwoG)

basic.forever(function() {
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)
    let z = input.acceleration(Dimension.Z)
    let s = input.acceleration(Dimension.Strength)
    console.logValue("x", x)
    console.logValue("y", y)
    console.logValue("z", z)
    basic.pause(100)
})
input.onButtonPressed(Button.A, function() {
    
})