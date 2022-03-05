/**
 * collum, row
 */
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Currnet_Tile = tiles.locationOfSprite(The_Player)
    if (tiles.tileIs(Currnet_Tile, assets.tile`Farming Land`)) {
        tiles.setTileAt(Currnet_Tile, assets.tile`Tilled Soil0`)
    }
})
function Close_inventory () {
    Open_Invetory = false
    controller.moveSprite(The_Player)
}
function Open_inventory () {
    Open_Invetory = true
    controller.moveSprite(The_Player, 0, 0)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Open_Invetory) {
        Close_inventory()
    } else {
        Open_inventory()
    }
})
spriteutils.createRenderable(100, function (screen2) {
    if (Open_Invetory) {
        screen2.fillRect(10, 10, 140, 100, 13)
        screen2.drawRect(10, 10, 140, 100, 14)
        images.print(screen2, "Inventory", 14, 14, 15)
        screen2.fillRect(14, 24, 132, 1, 15)
        for (let index = 0; index <= Tools.length; index++) {
            let list: Image[] = []
            spriteutils.drawTransparentImage(list[index], screen2, 0, 0)
        }
    }
})
let Open_Invetory = false
let Currnet_Tile: tiles.Location = null
let Tools: Image[] = []
let The_Player: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
The_Player = sprites.create(img`
    ....................
    ....................
    ..5..5555...........
    ...5455555..........
    ...f544444..........
    ..fff555555.........
    .fffffffff..........
    ....ffffff..........
    ....fffffbfffffffff.
    .....fffbffffffbff..
    .....fffbfffffbff...
    ......fffbbbbbff....
    ......fffffffff.....
    ........fffff.......
    ........44.44.......
    ........44.44.......
    ........44.44.......
    ........44..........
    ....................
    ....................
    `, SpriteKind.Player)
controller.moveSprite(The_Player)
character.loopFrames(
The_Player,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    5 . . 5 5 5 5 . . . . . . . . . 
    . 5 4 5 5 5 5 5 . . . . . . . . 
    . f 5 4 4 4 4 4 . . . . . . . . 
    f f f 5 5 5 5 5 5 . . . . . . . 
    f f f f f f f f . . . . . . . . 
    . . f f f f f f . . . . . . . . 
    . . f f f f f b f f f f f f f f 
    . . . f f f b f f f f f f b f f 
    . . . f f f b f f f f f b f f . 
    . . . . f f f b b b b b f f . . 
    . . . . f f f f f f f f f . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . 4 4 . 4 4 . . . . . 
    . . . . . . . . . 4 4 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    5 . . 5 5 5 5 . . . . . . . . . 
    . 5 4 5 5 5 5 5 . . . . . . . . 
    . f 5 4 4 4 4 4 . . . . . . . . 
    f f f 5 5 5 5 5 5 . . . . . . . 
    f f f f f f f f . . . . . . . . 
    . . f f f f f f . . . . . . . . 
    . . f f f f f b f f f f f f f f 
    . . . f f f b f f f f f f b f f 
    . . . f f f b f f f f f b f f . 
    . . . . f f f b b b b b f f . . 
    . . . . f f f f f f f f f . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . 4 4 . 4 4 . . . . . 
    . . . . . . 4 4 . . . . . . . . 
    `],
200,
character.rule(Predicate.MovingLeft)
)
character.loopFrames(
The_Player,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 5 5 5 5 . . 5 
    . . . . . . . . 5 5 5 5 5 4 5 . 
    . . . . . . . . 4 4 4 4 4 5 f . 
    . . . . . . . 5 5 5 5 5 5 f f f 
    . . . . . . . . f f f f f f f f 
    . . . . . . . . f f f f f f . . 
    f f f f f f f f b f f f f f . . 
    f f b f f f f f f b f f f . . . 
    . f f b f f f f f b f f f . . . 
    . . f f b b b b b f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . 4 4 . 4 4 . . . . . . 
    . . . . . . . . 4 4 . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 5 5 5 5 . . 5 
    . . . . . . . . 5 5 5 5 5 4 5 . 
    . . . . . . . . 4 4 4 4 4 5 f . 
    . . . . . . . 5 5 5 5 5 5 f f f 
    . . . . . . . . f f f f f f f f 
    . . . . . . . . f f f f f f . . 
    f f f f f f f f b f f f f f . . 
    f f b f f f f f f b f f f . . . 
    . f f b f f f f f b f f f . . . 
    . . f f b b b b b f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . 4 4 . 4 4 . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    `],
200,
character.rule(Predicate.MovingRight)
)
character.loopFrames(
The_Player,
[img`
    .....ffffff.........
    .......ff...........
    ......ffff..........
    .....ffffff.........
    ....ffffffff........
    ....ffffffff........
    ...ffffffffff.......
    ...ffffffffff.......
    ...ff555555ff.......
    ...f55555555f.......
    .55455555555455.....
    ..555544445555......
    .....555555.........
    ......ffff..........
    .......ff...........
    ........f...........
    ....................
    ....................
    ....................
    ....................
    `],
500,
character.rule(Predicate.MovingDown)
)
character.loopFrames(
The_Player,
[img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 4 4 4 4 5 5 5 5 . . 
    . 5 5 4 5 5 5 5 5 5 5 5 4 5 5 . 
    . . . f 5 5 5 5 5 5 5 5 f . . . 
    . . . f f 5 5 5 5 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . f f f f f f . . . . . 
    `],
500,
character.rule(Predicate.MovingUp)
)
scene.cameraFollowSprite(The_Player)
tiles.placeOnRandomTile(The_Player, assets.tile`Tilled Soil`)
tiles.coverAllTiles(assets.tile`Tilled Soil`, assets.tile`Grass`)
Tools = [assets.image`Watering Can`, assets.image`Shovel`, assets.image`Hoe`]
let text_list = ["Watering Can", "Shovel", "Hoe"]
