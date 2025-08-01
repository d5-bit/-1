input.onGesture(Gesture.TiltRight, function () {
    그림도구.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    그림도구.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.A, function () {
    그림 = game.createSprite(그림도구.get(LedSpriteProperty.X), 그림도구.get(LedSpriteProperty.Y))
})
input.onGesture(Gesture.LogoDown, function () {
    그림도구.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.AB, function () {
    그림도구.delete()
    그림도구 = game.createSprite(2, 2)
})
input.onGesture(Gesture.LogoUp, function () {
    그림도구.change(LedSpriteProperty.Y, 1)
})
let 그림: game.LedSprite = null
let 그림도구: game.LedSprite = null
그림도구 = game.createSprite(2, 2)
