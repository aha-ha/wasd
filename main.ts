let sprite = game.createSprite(2, 2)
basic.forever(function () {
    if (sprite.isTouchingEdge()) {
        sprite.ifOnEdgeBounce()
    }
    if (serial.readLine() == "w") {
        sprite.change(LedSpriteProperty.Y, 1)
    } else if (serial.readLine() == "a") {
        sprite.change(LedSpriteProperty.X, -1)
    } else if (serial.readLine() == "s") {
        sprite.change(LedSpriteProperty.Y, -1)
    } else if (serial.readLine() == "d") {
        sprite.change(LedSpriteProperty.X, 1)
    } else {
    	
    }
})
