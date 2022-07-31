enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Logo = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    CheckQualification(4)
    if (IsQualified == true) {
        IsQualified = false
        Level__4__Future_Planet()
    } else {
        music.zapped.play()
        IsQualified = false
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(Warrior, sprites.dungeon.floorLight0)
    }
})
events.tileEvent(SpriteKind.Player, assets.tile`myTile1`, events.TileEvent.StartOverlapping, function (sprite) {
    LevelTheDeathGateHub()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    CheckQualification(5)
    if (IsQualified == true) {
        IsQualified = false
        Level__5__Lost_City()
    } else {
        music.zapped.play()
        IsQualified = false
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(Warrior, sprites.dungeon.floorLight0)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    CheckQualification(1)
    if (IsQualified == true) {
        IsQualified = false
        Level__1__Ruins()
    } else {
        music.zapped.play()
        IsQualified = false
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(Warrior, sprites.dungeon.floorLight0)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    CheckQualification(7)
    if (IsQualified == true) {
        IsQualified = false
        Level__7__Haunted_Mansion()
    } else {
        music.zapped.play()
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        IsQualified = false
        tiles.placeOnRandomTile(Warrior, sprites.dungeon.floorLight0)
    }
})
function BlockMap () {
    tiles.setCurrentTilemap(tilemap`level8`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    CheckQualification(2)
    if (IsQualified == true) {
        IsQualified = false
        Level__2__Underwater_Palace()
    } else {
        music.zapped.play()
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        IsQualified = false
        tiles.placeOnRandomTile(Warrior, sprites.dungeon.floorLight0)
    }
})
function Level__8__Shadow_Realm__Boss () {
	
}
function LevelHomeTown () {
    tiles.setCurrentTilemap(tilemap`level1`)
}
function Level__4__Future_Planet () {
	
}
function Level__5__Lost_City () {
	
}
function DestroySprites () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Logo)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
}
function Level__2__Underwater_Palace () {
	
}
function CheckQualification (LevelNumber: number) {
    if (DungeonLevel >= LevelNumber) {
        IsQualified = true
    } else {
        IsQualified = false
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    CheckQualification(6)
    if (IsQualified == true) {
        IsQualified = false
        Level__6__Mossy_Dungeon()
    } else {
        music.zapped.play()
        IsQualified = false
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(Warrior, sprites.dungeon.floorLight0)
    }
})
function Level__3__Jungle () {
	
}
events.tileEvent(SpriteKind.Player, assets.tile`myTile2`, events.TileEvent.StartOverlapping, function (sprite) {
    LevelTheDeathGateHub()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    CheckQualification(3)
    if (IsQualified == true) {
        IsQualified = false
        Level__3__Jungle()
    } else {
        music.zapped.play()
        IsQualified = false
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(Warrior, sprites.dungeon.floorLight0)
    }
})
function Level__6__Mossy_Dungeon () {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    CheckQualification(8)
    if (IsQualified == true) {
        IsQualified = false
        Level__8__Shadow_Realm__Boss()
    } else {
        music.zapped.play()
        IsQualified = false
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(Warrior, sprites.dungeon.floorLight0)
    }
})
function SpawnCharecter () {
    Warrior = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Warrior, 100, 100)
    scene.cameraFollowSprite(Warrior)
    info.setLife(10)
    controller.moveSprite(Warrior)
}
function Level__7__Haunted_Mansion () {
	
}
function Level__1__Ruins () {
    tiles.setCurrentTilemap(tilemap`level10`)
}
function LevelTheDeathGateHub () {
    tiles.setCurrentTilemap(tilemap`DeathGateHub`)
    tiles.placeOnRandomTile(Warrior, sprites.dungeon.floorLight0)
}
let Warrior: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let MenuOpen = false
let IsQualified = false
let DungeonLevel = 0
scene.setBackgroundImage(img`
    eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbddbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeebbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbddbbdbbbbbbdbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeebeeebbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbddbbbbbddddbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeebeeeebbbbbbbbeeeebebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbddbbbbbbddbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeebebebbbbeeeeebebeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbbebbddbdddbbdbddbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eebeeeebbbbbbbebeeeeebbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebebbbbbbbbdbdddddddddddddddbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bebbbeeebebbbbbbebbeeeebeebbebbebbbbbbbbbbbbbbbbbbbbbbbbbbeebbbeebebbbbbddddddddddddbddbdddddddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    beebbeeeeeebbbbbbbbeeebbbebbeebeebbbbbbbbbbbbbbbbbbbbbbbbbeebbbeeeeebbbbbbbddddddddddddddddddddbddbddbbbbbbe44444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    beebbbeeeeeeebbbbeeeeeeebbbbbeeeebbbbbbebbebbbbbbbbbbbbbbbbeebbbbeebbeeebebbbbbbbbbddddddddddbddddddbbbbbbeee4e4444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbebebeeeeeeebbbbeeeeeebbbbbbebeebebbbbbbbebeebbbbbbbbbbbbbbbbbbeeebbbeeebbbbbbdbddddddddddddbddddddbddbb4eeee444444bbb444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbeeeebebbbbbeeeeeeeebebbeeeeeeebebbeebebbebbbbbbbbbbbbbbbbbbbeebbebbbbbbbbbbbdbdddddddddbbbdbbddddddb4eeeee44e44be444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbeebbbeebbbebbbeeeeeeeebbeeeebbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbebbbbbbbebbbbbbbbdbbbdddddbbeeeeebddddddeeeeeeeeeeeeeee4444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbeebebeeeeeeeebbbeeeeeebeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbeeeeeeeeeedddddeeeeeeeeeeeeeee4444ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbebebeeeeeebbbebbbbeeeeeebbeeebbbbbebeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbeeeeeeeeeeeeddd4eeeeeeeeeeeeeee4e4444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbebbeeeeeeeebbbbbbbbebebbebbeeebbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbeeeeeeeeeeeeedd4eeeeeeeeeeeee4e4e4444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbebbbeebbbbbbbbbbbbebbbbbbebbeebbbbebeebebbbbbbbbbbbbbbbbbbbbbbecbbbbbbdbbbeeeeeeeeeeeeedd4eeeeeeeeeeee4e4e44444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbebbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebeeeebebbbbbbbbbbbbbbbbbbbbfebbbbbbbeeeeeeeeeeeeeeeeb4444eeeeeeee44e44444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbebbbbbbbbbbbbbbbbbbcfbbbbbbbeeeeeeeeeeeeeeeee44444454eeeeeee44444445bddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebeebebbbbbbbbbbbbb444bbbbbbbbeeeeeeeeeeeeeeeeeee4444445eeeeee444444445dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbcdbbbebbbeeeebbebebbbb444eeebbbbbbeeeeeeeeeeeeeeeeeeeee444454eeeee4444444455dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbebbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbffcbbbbbbbeebbeeeeeeeee4444fe4454bbeeeeeeeeeeeeeeeeeeeee444454eeee44444444445ddddddbddbbbdbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbebbbbbbbebfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbecfcebbbebbbeeeeeeeeeeeeeceee4fc44554beeeeeeeeeeeeeeeeee44e44444444ee4e444444444dddddddddbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbb
    bbbbebeebbbbbbbbbebbbbbbbbbbbbbbbeeeeeeeebbbbbbcfeeeeeeeeebeeeeeeeeeefeefeee44444454beeeeeeeeeeeeeeeee444e444445554eee4444444444dddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbddbbdbbd
    ebbbbeeeeeebebbecbebbbbbbbbbbbbeeeeeeeee4eeccceeffeeeeeeeeeeeeeeeefeefeeceeeeee44444beeeeeeeeeeeeeeeeee444444444544ee44444444554d444bbdddbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd5bdd
    ebbbbeeebeebeeeefeebbebbbbbbbbeeeeeee4eeeeeebbbffeeeeeeeeeeeeeeffcceeefeceeeeee444444bbeeeeeeeeeeee44ee4444444445444e4444444554444444bddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbdd
    beeeebbeeeeeeebccbeeeebbbbbbbeeeeeeeeeeeee44ebbefeefeeeeeeffecceeecceffffcfeeff4444454beeeeeeeeeeeee444ee44444445554444444455544444e4bddddddddddbbbbbbbbbbbbbbdbbbbbbddbd4dd5bbbbbbbbbbbbbbbdbbbbbbbbbb
    eeeeeeeeeeeeeccfeebeeeebbbbebeeeeeeeeeeeeeee4bbeeceeeeffee444eecffcfffffffceeffe4444444eeeeeeeeeeeee444ee4444444545544444554444ee4eee44ddddddddbbdbbbbbbbbbbbdbbbdddbbbbbbbbbbdddbbbbbbbbbbdddddddbbbbb
    eeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeffffffeeeeeeeeee44effffffffffffffffcfeee444444eeeeeeeeeeeeee44ee444444454554ee4445444eeeeee44445dddddbddbbbbbbbdddddddbbddbbbbbbbbbbbd55d4bbd5dbbbbbddbbbddddd
    eeeeeeeeeeefeefeeeeeceeeeeeeeeeeeeeeee444fffffffffeeeeeeefffffffffffffffcfffffeeeee444eeeeeeeeeeeeeee4444444444455444eeee44444eeeeee4444454dddbdddbdbbbbbddbbddbbbdbddbddbdddd4bbbdbbbbbdbbbbd5bbbbbb54
    eeeeeeeeeeefefeeeefeeeeeeeeeeeeeeeeee4e4effcffffffffffffffffffffffffcceeecffffcfeef44eeeeeeeeeeeeeeee44eee4444444454eeeee44444e44eeee444444ddddddbbddbbdbdbbbbbbdbddbbbbbbbbbbbbbbbbbbbbbbbbdbbddbddbbd
    eeeeeeeeeeefffccfeeefeeeeeeeeeeeeeee44e4ffffffffffffffffffffffffffccccccccccfffceffeeeeeeeeeeeeeeeeeeeeee444e4444444eeeee44444444eeee4e444444ddbbbbddbbdbbbbbbbdddbddbddbbbbbbbbbbbddbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffcfffffffffffffffffffcccecefffecffffffcefffefefeeeeeeeeeeeeeee44ee444444eeeeee444444e444ee4eee44444ddbbbbdbbbdbbbbbdddddddddbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeee444fffecfffffffffffffccccccceeeefffeefe4effffccfcfcffeeeeeeeeeeeeee4eee444444eeeeee44eeeeee44e444444444bbbbbbbbbbbdbbbbbdddddddddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeffeeee44444444eeeeeeeeeeeeee44fffeffffffffffffffcccceffe4effffecf4f4ecfcfffefffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeee4eee4444ee4444bbbbbbbbbbbdbbbbbddddddddddbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeffeee444444554eeeeeeeeeeeeee4ceffeffffffffffffceeeeeeff4eecccfe44444eeccfffffeeceeeeeeeeeeeeeeeeeeeeeeeeeee4ee44ee44ee4444d4eee444bbbbbbbbbbbbbbbbbdddddbbdddbbbbbbbbbb4455444bbbbbbbbbbbbbb
    eeeeeeeeeeeffcee444444455eeeeeeeeeeeee4e4fffcffffffffffffffeccccff4f4efff44f4fceeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeee44ee4e444444444d44e44444bbbbbbbbbbbbbbbbddddbddbdddddbbbbbb444455444bbbbbbbbb44bb
    eeeeeeeeeeefceeeee444444eeeeeeeeeeeeee4ceffffffffffffffffceeeecfffeefeece4cf4eee44ffffffffffffcceeeeeeeeeeeeeeeee4444444444444444444dd4ee44444bbbbbbbdddbbbbbbddddddddddddddbbb444444444554bbbbbbeeeee4
    eeeeeeeeeeefceee4444444eeeeeeeeeeeee4ee44fffcfffffffffffffeccccfffeeefeeefff4eeee4ecffeffefeefeeeeeeeeeeeeeee4444444444444444ddbbb44db4444b444bbbbbddddddddbbbbddddbbddbbddddbd4444444444444bb4eeeee4ee
    eeeeeeeeeeefceeee444444eeeeeeeeeeeeeeee4efffffffffffffffffeecccfffeeccffcecfecceeefffffeeefeefeeeeeeeeeeeeee44e44444444444444ddddddddb4444444bbbbbddddddddddbbbbbddbbbbbbdddbdd44444444444444eeeeeeee4e
    eeeeeeeeeeefeee44444444eeeeeeeeeeeeeefeeefffffffffffffffeeeecfffffeccffffcefeecceffeefceeefeeceeee4e4eeee44444444444444445455dddddddddb444b4bbbbbbdddddddbbddbbbbbbbbbbbbbbbbdd444444444444444eeeeeeeee
    eeeeeeeeeeefeeeee444444eeeeeeeeeeeeeceecfffffffffffffccffccccfbeeebeeeebbeeeeeeecfffcfeeeceeeceee4e444eee444444444444444445554ddddddddbbbbbbbbbbbbbddddddddddbbbdbbdddbbbbbbbbd444eee4e4444444eeeeeeeee
    eee4eeeeeeefeeee44e4444eeeeeeeeeeeefeeffffffffffffcfffccccfccfbccecccecccecbecbbbeffcfeeefee444ee44444444444444444444444555545dddddddddbbbbddbbbbbbdddddddddddbbbbd44bbbbbbbbeeeeeee4e44444444eeeeeeeee
    eee444eeeeefeeeeeeee4444eeeeeeeeeeceeefeefffffffffffeecfefecefececcecceeccccccecbcfffeccceeeeeee4e4444ee444444444444444454554dddddddddddddbddddbbbddddddddddddddb4e444554bbbbeeeeeeeeeee4444444eeeeeeee
    ee4444eeeeefeeee4e4e44444eeeeeeeefeeeefeefffffffffffeccfececcffcecceccecceeeecccbefcfffcffeeeeeeeee444ee4444444444444444455544ddddddddddddbddddbbbbddddbdddbbdddde44455454bbeeeeeeeeeeeeee44444eeeeeeee
    eeee444eeeefeee4e4e4e4444eeeeeeeeeeeeefeefffffffffffeeeeeeeeeceeeeeeeeeececeeeeceefeefffffceeeeee4ee4eeee444444444445455555444ddddddddddddddddddddddddddbdbbb44eee444455445eeeeeeeeeeeeeee44e444eeeeeee
    eee4e4eeeeefeeee4eee4444444eeefeffffffffffffffffffffeeeeeeeeefffffeebebeeeeeeeeeecffeeffffffeeffee44444eee4444444444444544545ddddddddddddddddddddddddbdddbbb44eee4444444444eeeeeeeeeeeeee44e44444eeeeee
    eeeeeeeeeeefeeeeeee44eeeeeeeeeeeffffffffffffffffffffffceeeeeeeeeecccccccfffffffccefcccffffffffffeeeee4eeee44e4444444444455444dddddddddddddddddddddddddbddd444ee44e444444444eeeeeeeeeeeeeee4eee4eeeeeeee
    eeeeeeeeeeefeeeeeee4eefeeeefeeefffffffffffffffffffefefceeeeeeeeeeeeecffcccccfccfffffceffcffceeeeeeeee44eeeee4444444444454444d44ddddddddddddddddbdddddddeeeeeeee4444444444444eeeeeeeeeeeee4ee444eeeeeeee
    eeeeeeeeeeefeeeeecfeefccfffeeeefffffffffffffffffeffffffffffffffffffffecceeeeeeeeebdbebbbbceeeeeeeeee4eee4444444444444444444444d44ddddbddb44b4bbddbbdd4eee4444eeeeeeee44444444eeeeeeeeeeeeeeeeeeeeeee4ee
    fffffffffcffcebeffceeffccccfcffcffffffffffffffffcffbfeceeeeeeeeffffff4eeeeecee444eceeeebbfeeeeeeeeeeeeee4444e4444444444444444dbddddbddbbb44e44bdbbbbbeeeee444eeeeee4444444444eeeeeeeeeeeeeeeeeeeeee4eee
    ffffffffffffcefffffffffcffffffffcccccccccccccfffffcccefffeeeccffffe4eccfffffefffe4efceecceeeeeeeeeeeeeeee44eee44444444444444eee444bb4db44eeee44bdb44beeee4444eeeeeeee44444444eeeeeeeeeeeeeeeeeeeeeeeeee
    ffffffffffffcfffffffffffffffffffffffcfffffffffffffcccefffffeeffffeeefeccffffceeffeeee4ebbeeeeeeeeeeeeeeeeee4eee444444444444eee44444bbb44eee4e4e444eeeeeeee444eeeeee44444444444eeeeeeeeeeeeeeeeeeeeeeeee
    ececcfffceefcfeeeefffffffeeeefffffffffffffffffffffceeefffffedffceeffceccefceeeeffffe4ffffeeeeef4eeeeeeeeeeeeee4eeeee444444eeeee4ee4e444eeeee4e4eeeeeeeeeee4e444eeeee4444ee4e444eeeeeeeeeeeeeeeeeeeeeeee
    eeecefffeeeffeeeeeeeeeeffeeeeffffffffffffffffffffffeffcccffebffeefcfffecefcfcfee4ffeccffceeeeefeeeeeeeeeeeeeee4e4ee4444444eeeeeeee444eeee4eeeeeeeeeeeeeeeeeee4e4eeeeeee4eeeeeeeee44eeeeeeeeeeeeeeeeeeee
    eeeceffceeeffeeeeeeeeeeffeeeeffffffffffffffffffffffeeffffffebfcffcccffeffffeefffeeefeeeeefeeeeeeeeeeeeeeeeeeeee44eee4ee44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeee
    eeeeeffeeefcfeeeeeeeeffffffffffffffffffffffffffcffeeeffffffeefeefffffffeffffeccffefffeefcceeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeceffeeffffeeeeeeecfffffffffffffffffffffffffccfffecffffffeeeefffcfffffefffefffefefffeefceeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ceeecffeefffeeeeeeeefffffffffffffffffffffffffffffffcccfffffeeeeeffffffffeffceffeeffffffecccceeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeecffefffcceececcffffffffffffffffffffffffffffcfffeeffffeeebeffcceffffffefceffefffffff4efceceeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeecceeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    cfcceffffffcffffcccceeeeeeeffffffffffffffffffffffffebefffcfecccfceeceffffffffffffffffff4eecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ccfcfffffffffcceeeeceeebeecffffffffffffffffffffffffeeffffffefccffffceecffffffecffefffffcefcccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeceeeeceeeccceeceeeeeeeeeeeeeeeeeeecceecceeeeeeeeeeeeeeeeeeee
    fffccfffffcffccffcffffe4eccffffffffffffffffffffffffeeffffffefceffffffccfffffecfffcefcccfcccccceeceeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeccccceceeeccceceeeccceeeeecccceeeeeeeeeeeceeceeeceeeeeeeeeeeeeeeeeeeee
    ffffffcffffffffccfccfce4eecffffffffffffffffffffffffecffffffecfefffffffffffffcfffcfceffffcccccceeececeecceeeeeeeeeeeeeeecccecceeeeeecccccecccccccccccccccccceeee44eeeececceccccee4e4eeeeeeeeeeeeeeeeeeee
    fffffffffffffffffffffffeffefcfffeee4ccfffffffffffffeefffffffcfeffffffffffffcffffc4e4ffffeeccccececcccccceeeeeeeeeeeeececccccceeceeeccccccccccccccccceeeeecceeeeee44cccceeccceee4eeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffffffffffffeffcfffffeeeee4fffffffffcffeeeffffffcffcffffcccfffffefcfffcceffffe4ffccccccccccccccceceeeeeeeeeeeeeeceeecccccccceeeecceeeceeeeeecceeeeeeee4eecccceeeeeeeeeeeee4eeeeeeee4e4444eee
    fffffffffffffffffffffffcffcfffffeceee4fffffffffffffeeffffffcfefffeeccfffffffcfcfffceffffeefffcccccccccccceccecceeeeeeeceeeeeceeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeccccceeeeeeeeeee444eeeeee4444eeeecc
    fffffffffffffffffffffffcffcfffffeceee4fffcfffffffffeeffffffcfceecfffffffffffcfffffffffffeecffffccccccccecccccccccccceccccccceeeeeeeeeceeeeeeeeeeeccecceeeeeeeeeeeeeeeccccccceeeee44eeee44444444eeeeeecc
    fffffffffffffffffffffffeffcfffffecb4eeffffffffffffcccffffffccffffffffffffffffccffccfffffeeccfffcceccccceeeccccccceccccccccccccceeeeeeccceeeeccccccccecceeeeeeeeceeeeeccccceeeeeeeeeeee44444eeeeeeecccce
    fffffffffffffffcccfcffffffeffffeee4eee4ffffccfffffeeecfffffeecffffffffcfffccfffccffeeffccfcfefffccceeeeeeeeeeeeeeeeececccccccccccccccccccccffcccccccccceecceccccceceecccceeeeeeeeeeeeeeeeeeeeeeccceeeec
    fffffffffffffffffffcceefffcffffece4deeeffffccfffffefcffffffefcfffffffcffffffcccccffffeeccfecffffceeeeeeecccccecccccccccccccceeeeeeccccccccffecccccccccccccccccccceeeeccccceeeeeeeeeeeeeeeeeeeeeeeeecccc
    ffffffcffffffffffffffebffffcfffecee4eeefffffffffffccffffcfcccffffffffffffcfeececefffffffceeffecffeeeeeeeeeeecccececccccceeeccceeeeeeeeeeeffef4eccccccceeeccccccccccccccccccceeceeeeeeeeeecccccccececccc
    ffffffffffffffcffffffe4ecffcfffeeeee4eefffffffffffcffcffffccfffffffffffffffeeeecefffffcccffffecffefeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeecfcccfffeeeeeeeeeceeccceeeeeeeeeeeeeeeceeeeeeeeeeeeeeccccccccccccc
    fffffffffffffffcffffe4eeeffffffeeeeeeeffffcfffffffffffffffecfcfffffffffffffeeccccffffccfeffeccfffeefeceeeeeefeeeeeefeeeeeeeeeeeeecceeefffbffffeeccccccccceeeeeeeeefeecccccceeeeeecefccccccccccccfcccfcc
    fffffcffffffffffcffeceeeeffffffeeeeeeefffffffceeee4eccffffceccfccffffffffffeceeeecfffceecfffffffffffefefeeecfeeeccffcccfccceeccccccffeccecffceeceeeeccccccccccfccefccececceefcccccffffccccffcccffcccfff
    fffcccffffffcccefffcceeeeeffcffeeeeccefffffcffbceeff4ffffcceecfffffffffffffbeecccffccefcefffffffffffffeffccfffcccccffccffcfccccceeeffebcefffcee4fcccccccfcccccfffffcccccfffffcccfffffffffffffcfffffffff
    fffcfcfffffffffffcccfceeeeccfffffffcfcffffffffeffcefffcfffeebffffffffffffffeecceccffcffeecfffffffcecffffcffffffccccffccffffccccccfcffeecffcfcfeeecffffffffffffffffffffffffffffffe4efffcfcffffffffffffff
    ffffccccccccccecfcffcfccc44efffffcfffcffffcfeeefffeeeeefffceeffffffffffffffcceeccefcfffeeffffffffeeecffffffffffffcfffcfffffcfcfcfffefffffcffcefccceffffffffffffffffffffcfffffffffffffffffffffffffffffff
    ffffcfcffffffffffecffffceeeeccfccfffffffffccceeeecfceeefffceefffffffcffffffccccceefffffccffffffffceecffffffffffffffffffffffffffffffefcfffffffffffceeeffffffffffffffcfcfffffffcfffffffffffffffffffffffff
    fffffcffffffffffcfffcfffcfffccfeecffffffffffffceeccefffffffeefffffffffffcffeeceecccfffffcfeffffffcccffffffffffffcffcfffffffffffffffefcffffffffffcefffcfffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffcfffcfffcffffeeffeffffffffcccffffceffffcfcfeeffffffffffffffceccccccfffceeefccfffcccefffffffffffffffffffffffffffffffcfffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffff
    ffffcfcffffcffffcffcccffcffffcefcefffffffffffcffffcfffcffcfeefcccffffffffffeeeeeeceffffcceffffffcffcffffffffffffffeffffffcffffffffffcccffffffffffffccefffffffffffffffffffffffffffffffffffffffffffffffff
    fffffcccfffffffcfffceffefffeffcfcccecffffffffcfccfccffcffcfceceffffffffffebccccccccfffefcefcefcccee4eeeccccceeeeeeeeeeeeceeeceeccffffffffffffffffcfffcfffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffccfcfffc4ffffffffeecccffffffffffffffffffffffffffccffffffcfeefffffffffffcceeee4eeeeeebeecebffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fcffffffffcccfffceebecceffeefeffcefeeefffffffcccceeee444eeffefcecffffffffeeffffffcfccfccfffccccffeffccffffffffffeeefffffcecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffcffcccceeeccfceefceefcfffefceeecffeeeeeeeecfccceeeefffebcfffffffccfffffffffcfcccffffcfffcfccfecfcffffffffffffffffffffffffcffffffffffffffffcfffffffffffffffffffffffffffffffffcfffffffffffffffff
    fffffcffffcffffffffceeceeeeeeeeeefcffceeceeeecccceffcceeccceeccfcfcfffffffffeefffffffffffffffcccecffcceeeeefffffffffffffffffffffffffffffffffffffeffffcfffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffcfecccfcceceeceeeeeececceeeecffffceceecfcecceeeeeffffffffffccffffffffcfffffccceeeeeeeeceeecfffe44eecfcce4eccfcfffffffffffffffffffffffcceeeeeeeeeeeeeeeeeeeee4e444e44eeeeeeeeee4e444444
    fffffffffcffffcffffceccf4fffffeeeeeeeeeeceeeefeffccffffffffffeeb4eefcffffffffcffffffffffffffffcffcceecccfceecffffeccfccfccccffffffffffffffffffffecfffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffccffffcccceeeffffffcffcecceeeeeeeeeecccccffffffffffccceeeecffcfffcfffcffffffffffffceecceceecceecccccffcccceccceccccccfffffffffffffffcecffffccccccceeeeeececceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ffffffffffffffffffffcfffffffceeefeeeccceceeee4eeeeeeeccccccffffffffeebfffcffecceeefffffffffffffcffffffccfffcfffffffcccccccccccccffffffffffffffffffcfcfccccccccccccecceeeeeeeeeeeeeeeeeeeeeeeecccceeeeee
    fffffffffcfffffffffccfffcceefffccfceeeeefecceeee44eeeeeeccceeefffffcceccccceeeeeecfffffffffffffffffffffffffffffffceccccccccccccccffffffffffffccccccccccccccccceeeeecccccccccccccccccccccceeeeeeeeeeeeee
    ffffffffffffffffffffccfceeccefffcfcccffcceeeeeeeeeeefeeeeeeeeceebfffffeeeeeececceeeeeeeeeefffffffffffffffffffcfffcffffffffccfffffcfffffffffffffffffffcccccccccccccccccccccccccccceeeeeeeeeceeeeeeeeeeee
    fffffffffffffffffffffcffccccffffccceeeeeeeeee44eeceeeceeeeeceeeeeecffcceeccfffccccececeeeeeefffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccffccccccccccccccccc
    fffffffffffffffffffffffffffffceeeeeeeceeeeeeeffccecccecccffefffceeffcfffffffffcfcccffffcecceeecffcffffcfffffffffffccfcffcfffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccffcccccccfffffff
    ffffffffffffffffffffffffccccceeeeeeeeeecccffffffcfcccccccffecfeceeceeccccfffffffffffffffcffccccccfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccceecccc
    fffffffffffffffffffffffcecceeeeeeeeeeccfffffffffffffcffffcccfccccccffffcfffffffffffffffcffffffffccccefcfffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffcccccccccccccccccffffcccccceeeecc
    ffffffffffffffffffcffcccccccccffcfcffffffffffffffffffffffccfffffceeeececcfffffffffffffffffffffffffccccccccfffffffffffffffffffcffffffffffffffffffffffeffffffffffffffffffffffffccccccccccfcfffffccccccccc
    ffffffffffffffffffccffffceeeeffffffffffffffffffffffffffffffffffffffeeeeeccffffffffcffffffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffeffffffffffffffffffffcffffcfcffcffffffffcffffffffcff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffccfeceeccccccffffffffffffffffffffffffffffffffcccccccfffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffcfffffcccffcfffffffffffffffffffffffffffcccffcffcfcfeeeecffffffffffffffffffffffffffffffffffcffffffffcccccccffffffffefcfffcfffffefbffffffffffffffffffffffffffcfffffffffffffffffffffff
    ffffffffffffffffffffccccccfccefffffffffffffffffffffffffffffcccffcfffcffcfcccccccffffffffffffffffffffffffffffccccfefccccffffffccfffffcfeeccfffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffccfffffcfffffffffffcffffffffffffffffffccffccffffffcffccfccfffffffffffffffffffffffcfcccecfcfecccecccfcfeeeeccceeeecce44e4ecccecfcfffffffffffffffeffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffccfffccccccccfccccffffffffffffccffffffcccccfcececcfffffffcfcccccffcceceeeeeeeeeeecccffcffffffffffecfffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffcfffffffffffffffffffffffffffffcfffcccfffffffcfffffffffcccccffccfffffffffcfffccfcffffffcccfffccfffffffcfccfceeeeee4ececeecceffffeccfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffccfffffccfffffffffffffcccccfffffceeceeececcceefcfffccccfffcceeeccfffffcffeffffffffffcffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffcfffffffccfcffffffffffffcfffccfffffffffcfccffcfffffffcffffccccfccffffffffffcffccffccfcfcccfcecfcecccccccfcfffcccfffeeeeeeececeeccffffffffefcffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffcfcfffffffffffffffffffffffffffffffffffffffffcfffffffffffccfffccfcffcccfcfcfcccfcccccccccfcffffcccceeeeeceeeeecfffffccccccccfcfffffffffcfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffffcfffffccfffcfffffffffffffffffffcfffffffffffcffcffcfffcfcffffffecffcceccffffffcfcccffffcfecfffcccceeecceeccccccffffcccfcccffcffffcccccffcff
    fffffffffffffffffffffffcecfffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffcccffffcfcfcfffcffcffffffcfffffcfffffcffcfcccccceccccfcffccfcfffcccfffefcccefcffccfcf
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcffffffffffffffffffffffffffffffffffffffffffffffffffcceefcceffccfeffcfffffffffffffffffffffcccfccfccfcfcffffffcffffffcfffccfcccffccffcffc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccfffffcfffffffffffffffffffffffffcefffffcff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffff
    `)
DungeonLevel = 0
IsQualified = false
info.setScore(0)
if (!(MenuOpen)) {
    MenuOpen = true
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem(" ", img`
        ..33333.33....................
        .42222222223..................
        422222222222..................
        4245555444222222222442223.....
        42454245452222222222222223....
        42454245552244542442224224....
        4245424545245445445224522eab3.
        4245555445244224545425422aaaa.
        4245442245244224544545222aaaab
        424542224524522454255422aaaaab
        424522224552555554245422aaaaa.
        42222222222222222224422aaaaab.
        .22222a2222222222245422aaaaa..
        ..34baaaa22ae222222422eaaaab..
        ....baaaaabaaaaaa22222aaaaa3..
        .....baaab.baaaaaa222aaaaab...
        ......3b.....bbbbbbbaaaaaab...
        ....................3aaaab....
        .....................3bab.....
        `)
    )
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        myMenu.close()
        LevelHomeTown()
        SpawnCharecter()
    })
}
