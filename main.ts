function Checkscore () {
    if (P1score == P2score) {
        basic.showString("Draw")
    } else {
        basic.showString("" + P1score + ":" + P2score)
    }
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("Left")
    P1.change(LedSpriteProperty.X, -1)
})
function _2P_shoot () {
    P2shoot = game.createSprite(P2.get(LedSpriteProperty.X), P2.get(LedSpriteProperty.Y))
    P2shoot.set(LedSpriteProperty.Brightness, 120)
    P2shoot.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        P2shoot.move(1)
        basic.pause(75)
    }
    if (P2shoot.isTouching(P1)) {
        P2shoot.delete()
        P2score += 1
        Checkscore()
    }
    P2shoot.delete()
}
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Shoot")
    P1shoot = game.createSprite(P1.get(LedSpriteProperty.X), P1.get(LedSpriteProperty.Y))
    P1shoot.set(LedSpriteProperty.Brightness, 120)
    P1shoot.turn(Direction.Left, 90)
    for (let index = 0; index < 4; index++) {
        P1shoot.move(1)
        basic.pause(75)
    }
    if (P1shoot.isTouching(P2)) {
        P1shoot.delete()
        P1score += 1
        Checkscore()
    }
    P1shoot.delete()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Shoot") {
        _2P_shoot()
    } else if (receivedString == "Left") {
        P2.change(LedSpriteProperty.X, 1)
    } else if (receivedString == "Right") {
        P2.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Right")
    P1.change(LedSpriteProperty.X, 1)
})
let P1shoot: game.LedSprite = null
let P2shoot: game.LedSprite = null
let P1score = 0
let P2score = 0
let P2: game.LedSprite = null
let P1: game.LedSprite = null
radio.setGroup(32)
P1 = game.createSprite(2, 4)
P2 = game.createSprite(2, 0)
P2score = 0
P1score = 0
