enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const NPCJhonny = SpriteKind.create()
    export const Icon = SpriteKind.create()
    export const Particle = SpriteKind.create()
    export const Save = SpriteKind.create()
    export const LevelPicker = SpriteKind.create()
    export const LevelTile = SpriteKind.create()
    export const trash = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Nothering = SpriteKind.create()
    export const BossWild = SpriteKind.create()
    export const push = SpriteKind.create()
    export const pushall = SpriteKind.create()
    export const PlayerShot = SpriteKind.create()
    export const Monster = SpriteKind.create()
}
namespace StatusBarKind {
    export const Load = StatusBarKind.create()
}
function SpawnPlasticZombie (Amount: number, Health: number) {
    for (let index2 = 0; index2 <= Amount; index2++) {
        PlasticZombie = sprites.create(assets.image`PlasticZombie`, SpriteKind.Monster)
        Monsters_Health = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        Monsters_Health.value = Health
        Monsters_Health.attachToSprite(PlasticZombie)
        PlasticZombie.follow(PlayerWarrior, 50)
        tiles.placeOnRandomTile(PlasticZombie, sprites.dungeon.darkGroundCenter)
    }
    PlasticZombie.follow(PlayerWarrior, 50)
}
function DrawMenu () {
    if (!(MenuOpen)) {
        MenuOpen = true
        myMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("", img`
            .............eee......................
            ..eeeeeee..222222.....................
            e2222222222245554e....................
            24555555552245554ec.eeee...eee...eee..
            24555555555245554e2222222222222222222e
            2455542455544555424555555445554245552e
            2455542455544555424555555545554255542a
            2455542455544555422222455544555455542c
            245555555552455542455555554455555552ec
            245555555522455542555555554255555542a.
            245554222222455544555445554245555542c.
            24555422222245555555555555422555552ac.
            2455542aaaae24555445554555422455542a..
            e222222c....e222222222222222245554ec..
            .e222eac.....e2222e222222222255552ac..
            ..ccccc........cccccccccccc2455542c...
            ...........................e22222ac...
            ............................ceeaac....
            `),
        miniMenu.createMenuItem("", img`
            ....................................eee.................................
            ....eeeee..........................222222...............................
            ..22222222e............2222...2222e255552c..............................
            .24555555522...eeee..22455222245522255552eee..ee.....eeee......eeeee....
            245555555552e222222222555522255552222222222222222e.e2222222..22222222e..
            2455542455522455555524555555455555545555455545554222555555422455555542e.
            2455555554224555555554555555455555545555455555555425555555544555455554e.
            2455555555425555445554555522255552225555455542555545554455554555444422ec
            e245555555545555555554555522255552225555455542555545554455554555555542ec
            22222224555455555555545555222555522255554555425555455544555524555555542c
            24555424555455554222225555222555522255554555425555455544555524442455542c
            24555555555245555555524555554455555455554555425555255555555545554455542c
            e245555555222455555542245555424555545555455542555522555455552455555542ac
            .e222222222ae22222222ee2222222222222222222222222222222245555222222222ac.
            ..e222222eac.e222222aace2222eae22222222222222e222222555555542e222222ac..
            ....ccccccc....cccccc....cccc...cccccccccccccccccce245555542acccccccc...
            ...................................................e2222222ac...........
            ....................................................ceeeeaac............
            `),
        miniMenu.createMenuItem("", img`
            ...eeeeeee......................................eeeeeee.....ee..............................
            .e455555542....................................e45555554ee4454e.............................
            e45555555542222222e.2222222222222..e22222e....e45555555544555422e222222.e222222222222e2222e.
            2455542555524555554245554555445552245555542...255542255545555554455555524555455545554245552e
            24555422222455555554455555555555544555555542..255555555225555554555555544555555554555255542c
            24555455555222225555455544555455554555245552ce245555555524555424555245554555445554555455542a
            24555455555255555555455544555455554555555552c.22455555554455542455524555455544555455555552ec
            24555424555455555555455544555455554555555552c.22222245554455542455524555455542222245555542ac
            24555424555455525555455544555455554555222222ae25555245554455542455524555455542222225555542c.
            24555555555455555555455544555455554555555542ce24555555554455555455555554455542aace2455552ac.
            .2455555555255555555455544555455552455555542c.e2455555542245555445555552455542c...2255542a..
            .e22222222222222222222222222222222222222222ac..222222222ac22222222222222222222c...2455542c..
            ..c22222222ee2222222222222222e2222ae222222ac....e222222ac.ce222ea22222eae2222ac...245552ac..
            ....ccccccccccccccccccccccccccccccc..cccccc......ccccccc....ccccc.cccccc..cccc...e255542a...
            ..................................................................................22222ac...
            ...................................................................................caaac....
            `)
        )
        myMenu.setFrame(img`
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            `)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 8)
    }
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        myMenu.close()
        if (selectedIndex == 0) {
            MenuOpen = false
            DrawToolbar()
            SpawnCharecter()
            make_toolbar()
            all_items = [
            assets.image`myImage0`,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 4 a . . 
                . . . . . . . . . . . 4 2 2 . . 
                . . . . . . . . . . 4 8 2 . . . 
                . . . . . . . . . 4 2 2 . . . . 
                . . . . . . . . 4 c 2 . . . . . 
                . . . . . . e 4 2 2 . . . . 2 . 
                . e e . 4 4 4 e 2 . . . . . . . 
                . . e 4 . 4 2 2 e . . 2 . . . . 
                . . 2 e 4 4 2 2 . . . . . . . . 
                . . . 2 c 4 . 2 . . . . . . . . 
                . . . 4 2 e 4 . . . . . . . . . 
                . . 4 . . 2 e e . . . . 2 . . . 
                . . . . . . . e . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 d d 6 . . . . . . 
                . . . e . . . e e . . . e . . . 
                . . . 2 e e e e e e e e 2 . . . 
                . e . 4 . e c e e 8 e . 4 . e . 
                . 2 e . e e e e e e e e . e 2 . 
                . . 2 e 2 . 2 e e 2 . 2 e 2 . . 
                . . . 2 . . . d d . . . 2 . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . d d . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . c c e . c . . 
                . . . . . . . b c c . e e . . . 
                . . . . . . . . . c e 2 e e . . 
                . . . . . c . . c e e e . c . . 
                . . . . . . c c . 2 e c c 8 . . 
                . . . . . 8 . e e . c . 8 . . . 
                . . . . . . . e e c . . a . . . 
                . . . . . e e . . 8 . . . . . . 
                . . . . e 2 e . 8 . 8 . . . . . 
                . . e . e e . . . . . . . . . . 
                . . . e . . . . . . . . . . . . 
                . e e . e . . . . . . . . . . . 
                . . e . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `
            ]
            all_labels = [
            "Bow Of The Universe",
            "Sword Of Life",
            "Soul-Forged Hammer",
            "Celeste, Staff of Chaos"
            ]
            add_item([Inventory.create_item(all_labels[0], all_items[0])])
PlasticBottleIcon = sprites.create(img`
                d 1 1 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 1 1 d 
                d 1 1 1 1 1 c e 1 d 
                d 1 1 1 c c 8 a 1 d 
                d 1 1 c c 8 a 1 1 d 
                d 1 c c 8 a b 1 1 d 
                d 1 c 8 a b 1 1 1 d 
                d 1 8 a b 1 1 1 1 d 
                d 1 1 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 1 1 d 
                d d d d d d d d d d 
                `, SpriteKind.Icon)
            PlasticBottleIcon.setPosition(146, 6)
            PlasticBottleIcon.setFlag(SpriteFlag.RelativeToCamera, true)
            info.setScore(0)
            info.setLife(5)
            LevelHomeTown()
            HasGameStarted = true
        } else if (selectedIndex == 1) {
            MenuOpen = false
            SettingsView()
        } else if (selectedIndex == 2) {
            MenuOpen = false
            DrawSaga()
        }
    })
}
function moveSpriteInTime (sprite: Sprite, x: number, y: number, t: number) {
    globalX = x
    globalY = y
    dx = x - sprite.x
    dy = y - sprite.y
    sprite.setVelocity(dx / t, dy / t)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    LevelTheDeathGateHub()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    CheckQualification(4)
    if (IsQualified == true) {
        IsQualified = false
        Level__4__Future_Planet()
    } else {
        music.zapped.play()
        IsQualified = false
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.PlayerShot, function (sprite, otherSprite) {
    if (started) {
        info.changeScoreBy(20)
        bossLife += -1
        music.playTone(208, music.beat(BeatFraction.Eighth))
        lifeBarPic.fillRect(bossLife * 2, 0, 96 - bossLife * 2, 5, 15)
        lifeBar.setImage(lifeBarPic)
        if (bossLife <= 0) {
            game.over(true)
        } else if (bossLife % 12 == 0) {
            preSetBossPosition(80, 30)
        }
    }
    otherSprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (HasGameStarted == true) {
        handle_b_key_in_toolbar()
        if (IsOverlapingShopTiles == true) {
            triggerShop = true
            pause(1000)
            triggerShop = false
        }
        if (IsOverlapingNPCJhonny == true) {
            triggerNPC = true
            pause(2000)
            triggerNPC = false
        }
    }
})
function DrawToolbar () {
    toolbar = Inventory.create_toolbar([], 4)
    toolbar.left = 4
    toolbar.bottom = scene.screenHeight() - 4
    toolbar.z = 100
    toolbar.setFlag(SpriteFlag.RelativeToCamera, true)
}
function spell1 () {
    enemyShootAimingPlayer(boss, 90, 5)
}
function moveSpriteRandom (sprite: Sprite, yLowerBound: number, outerBound: number, v: number) {
    moveSprite(sprite, randint(outerBound, scene.screenWidth() - outerBound), randint(outerBound, yLowerBound), v)
}
controller.combos.attachCombo("lA", function () {
    projectileSprite = sprites.createProjectileFromSprite(assets.image`projectileSprite`, PlayerWarrior, -50, 0)
    projectileSprite.setKind(SpriteKind.PlayerShot)
})
function DrawSaga () {
    color.startFade(color.originalPalette, color.Black)
    color.pauseUntilFadeDone()
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    color.startFade(color.Black, color.originalPalette)
    color.pauseUntilFadeDone()
    ShowSaga = true
    effects.starField.startScreenEffect(SagaTimeSpan)
    storyLines = [
    "Tale of Province Town",
    " ",
    "Once upon a time,",
    "like really long ago,",
    "a peaceful race lived",
    "happily in Province Town",
    "",
    "They used the rare mineral",
    "Plastic to create",
    "new and powerful items.",
    "",
    "One day, Khan the warlord",
    "came to Province Town and",
    "took control of the city.",
    "nice! Ugh! Err!",
    "",
    "Your mission is to help",
    "kill Khan and take control",
    "of the city back again.",
    "Good luck!"
    ]
    scroll = true
    sagaImage = image.create(scene.screenWidth(), 10 * storyLines.length)
    for (let i = 0; i <= storyLines.length - 1; i++) {
        sagaImage.printCenter(storyLines[i], i * 10, i > 0 ? 7 : 4)
    }
    sagaSprite = sprites.create(sagaImage, 0)
    sagaSprite.top = scene.screenHeight() - 1
    sagaSprite.setFlag(SpriteFlag.AutoDestroy, true)
    sagaSprite.vy = -10
    timer.debounce("Saga", SagaTimeSpan, function () {
        ShowSaga = false
        DrawMenu()
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    CheckQualification(5)
    if (IsQualified == true) {
        IsQualified = false
        Level__5__Lost_City()
    } else {
        music.zapped.play()
        IsQualified = false
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
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
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile73`, function (sprite, location) {
    if (triggerShop == true) {
        WeaponShopUI()
        pause(1000)
    }
})
sprites.onOverlap(SpriteKind.Monster, SpriteKind.PlayerShot, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 500)
    Monsters_Health.value += -1
    sprite.destroy()
})
function nonSpell1 () {
    for (let index22 = 0; index22 <= MAX - 1; index22++) {
        shootBulletFromSprite(boss, 60, 360 / MAX * index22 + offset)
    }
    offset += 13
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    CheckQualification(7)
    if (IsQualified == true) {
        IsQualified = false
        Level__7__Haunted_Mansion()
    } else {
        music.zapped.play()
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        IsQualified = false
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
})
function BlockMap () {
    tiles.setCurrentTilemap(tilemap`BlockMap`)
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
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
})
function Start_Game () {
    DungeonLevel = 1
    IsQualified = false
    DrawMenu()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPCJhonny, function (sprite, otherSprite) {
    if (triggerNPC == true) {
        enable_movement(false)
        story.printCharacterText("Hi!", "Jhonny")
        story.printCharacterText("Khan, the evil warlord has taken over Province Town!", "Jhonny")
        story.printCharacterText("You must help us to destroy him!", "Jhonny")
        story.printCharacterText("Go to the cave in the north of spawn to go into different", "Jhonny")
        story.printCharacterText("dungeons and defeat monsters to get plastic, a rare mineral!", "Jhonny")
        story.printCharacterText("Use it to craft weapons at the east of the village.", "Jhonny")
        story.printCharacterText("Use the weapons to defeat Khan!", "Jhonny")
        story.printCharacterText("Good luck! You will need it :)", "Jhonny")
        enable_movement(true)
        triggerNPC = false
        pause(36000)
    }
    if (IsOverlapingNPCJhonny == false) {
        IsOverlapingNPCJhonny = true
        pause(2000)
        IsOverlapingNPCJhonny = false
    }
})
function Level__8__Shadow_Realm__Boss () {
    tiles.setCurrentTilemap(tilemap`level43`)
}
function LevelHomeTown () {
    SoundPhase = 2
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(PlayerWarrior, assets.tile`HomeSpawn`)
    SpawnNPCJhonny(5, 5)
}
controller.combos.attachCombo("dA", function () {
    projectileSprite = sprites.createProjectileFromSprite(assets.image`projectileSprite`, PlayerWarrior, 0, 50)
    projectileSprite.setKind(SpriteKind.PlayerShot)
})
function spell2 () {
    for (let index = 0; index <= 4; index++) {
        shootBulletFromSprite(boss, 60, offset + index * 30)
    }
    offset += 23
}
function handle_b_key_in_toolbar () {
    toolbar.change_number(ToolbarNumberAttribute.SelectedIndex, 1)
    if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) == toolbar.get_number(ToolbarNumberAttribute.MaxItems)) {
        toolbar.set_number(ToolbarNumberAttribute.SelectedIndex, 0)
    }
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    PlasticZombie.destroy(effects.ashes, 500)
})
function WeaponShopUI () {
	
}
function move_left_in_toolbar () {
    if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) > 0) {
        toolbar.change_number(ToolbarNumberAttribute.SelectedIndex, -1)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monster, function (sprite, otherSprite) {
    Players_Health.value += -5
    pause(1500)
})
function Level__4__Future_Planet () {
    tiles.setCurrentTilemap(tilemap`Level4 - Futuristic City`)
}
function Level__5__Lost_City () {
    SpawnNPCJhonny(20, 30)
    tiles.setCurrentTilemap(tilemap`level45`)
}
function DestroySprites () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPCJhonny)
    sprites.destroyAllSpritesOfKind(SpriteKind.Monster)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Messages)
    info.changeLifeBy(-1)
    Players_Health.value = 100
    game.splash("You died!", "Press A to respawn!" + "")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    LevelTheDeathGateHub()
})
function move_down_in_inventory_toolbar () {
    toolbar.set_number(ToolbarNumberAttribute.SelectedIndex, toolbar.get_number(ToolbarNumberAttribute.MaxItems) - 1)
}
function enable_movement (en: boolean) {
    if (en) {
        controller.moveSprite(PlayerWarrior)
    } else {
        controller.moveSprite(PlayerWarrior, 0, 0)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(3, 200)
    music.playTone(139, music.beat(BeatFraction.Eighth))
    otherSprite.destroy()
})
function Level__2__Underwater_Palace () {
    tiles.setCurrentTilemap(tilemap`Tilemap_Level 2 - Underwater Palace`)
}
function SpawnWarlord () {
    game.showLongText("You have made it to the end. Now you shall have the honour of getting killed by me. ", DialogLayout.Bottom)
    boss = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    boss.setPosition(-16, -16)
    lifeBarPic = image.create(96, 5)
    lifeBar = statusbars.create(80, 5, StatusBarKind.Health)
    lifeBar.setFlag(SpriteFlag.Ghost, true)
    offset = 0
    MAX = 10
    bossCanMove = true
    preSetBossPosition(80, 30)
    music.playMelody(music.convertRTTTLToMelody("mkombat:d=4,o=5,b=70:16a#,16a#,16c#6,16a#,16d#6,16a#,16f6,16d#6,16c#6,16c#6,16f6,16c#6,16g#6,16c#6,16f6,16c#6,16g#,16g#,16c6,16g#,16c#6,16g#,16d#6,16c#6,16f#,16f#,16a#,16f#,16c#6,16f#,16c#6,16c6"), 120)
}
function CheckQualification (LevelNumber: number) {
    if (DungeonLevel >= LevelNumber) {
        IsQualified = true
    } else {
        IsQualified = false
    }
}
controller.combos.attachCombo("uA", function () {
    projectileSprite = sprites.createProjectileFromSprite(assets.image`projectileSprite`, PlayerWarrior, 0, -50)
    projectileSprite.setKind(SpriteKind.PlayerShot)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    CheckQualification(6)
    if (IsQualified == true) {
        IsQualified = false
        Level__6__Mossy_Dungeon()
    } else {
        music.zapped.play()
        IsQualified = false
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
})
function DrawLoadingScreen () {
    scene.setBackgroundImage(img`
        ffffffffffffff4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccffffffffffffffffffffffcccfffccccffffffffe4eeeeeeeccfffcce44444444ecffffffffffeffffffffffffff
        ffffffffffffff4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccffffffffffffffffffffffffccccfffcecffffffffe4eeeeeeeecfffccc444ee444ecffffffffff4ffffffffffffff
        ffffffffffffff4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccfffffffffffffffffffffffffccccffceecfffffff44eeeeeeeecfffcce44ece455ecffffffffff4ffffffffffffff
        ffffffffffffff4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccecfffffffffffffffffffffffffcccccffeeefffffff45eeeeeeeecfffcce44ecee44ecfffffffffc4ffffffffffffff
        ffffffffffffff4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffcccecffeeecffffff454eeeeeeeecfffce44ecee45ecfffffffffe4ffffffffffffff
        ffffffffffffff4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffccceccfeeeeffffff4554eeeeeeecfffce44ecee45ecfffffffffeeffffffffffffff
        ffffffffffffff4444ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffeceeefeeeeffffff45554feeeeeefffce44ecee45ecffffffffe4effffffffffffff
        ffffffffffffff4444cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcceeeefffffffffffffffffffffffffceeeeefeeeefffff45555eeeeeeefffcc44ecee45ecfffffffc4efffffffffffffff
        ffffffffffffff444ecccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcceeeeeffffffffffffffffffffffffceeeeeeeeeefffff455554eeeeeecffcc44ecee45ecfffffff4effffffffffffffff
        ffffffffffffff444ecccccccccfceeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccce4eefffffffffffffffffffccfffeeeeeeeeeeefffff45455eeeeeeeeffcc444ce444ecffffff44fffffffffffffffff
        ffffffffffffff444eeeccccfffffeecfeeeeeeeeeeeeeeeeeeeeeeeeeeecccedeefffffffffffffffffffccfff4eeeeeeeeeeeffff45455eeeeeeeeffcc454ee445ecfffffe4ffffffffffffffffff
        ffffffffffffff444eeccffffffffefffeeeeeeeeeeeeeeeeeeeeeeeeeeeccee54eefffffffffffffffffcccffc4eeeeeeeeeeeffff45455eeeeeeeefffc44444444ecffffebfffffffffffffffffff
        ffffffffffffff444eeccffffceefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeecee54eefffffffffffffffffcccffe44eeeeeeeeeeefff45454eeeeeeeefffc44444444effffcfffffffffffffffffffff
        ffffffffffffff444eeccfffeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeecee54eeecffffffffffffcfccccfce44eeeeeeeeeeeeff45454eeeeeeeecffc44444444ecfffffcfffffffffffffffffff
        ffffffffffffff444eeccffeeeeffffffeeeeeeeeeeeeeeeeeeeeeceeeeeecfe544eeecfffffffffffccccccfee444eeeeeeeeeeecf45454eeeeeeeeeffc44444444eccffffffffffffffffffffffff
        ffffffffffffff444eeccfeeecffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfe544eeeeeffffffeeeffccccfcee444eeeeeeeeeeeee45454eeeeeeeeeffc44444444eccffffffffffffccffffffffff
        ffffffffffffff444eeeefeeefffffffeeeeeeeeeeeeeeeeeeeeecefeeeeccfe544eeeeecfffffeeeeffcccfcee444eeeeeeeeeeeee45555eeeeeeeeeffc44444444ecffccccccccccccfccffffffff
        ffffffffffffff444eeeeeeefffffffceeeeeeeeeeeeeeeeeeeeececfeecccce544eeeeeeeffffceeeeefccfcee4444eeeeeeeeeeee454554eeeeeeeecff44eeeeeeecfcfcccccccffffcffffffffff
        ffffffffcfffff444eeeeeeffffffffeeeeeeeeeeeeeeeeeeeeeeceffcefccce544eeeeeeeeffffeeeeeeecfcee4444eeeeeeeeeeee4545554eeeeeeecfc4fffffffffffffceeeeeeeecccfffffffce
        fffffccfcfffff444eeeeecffffffffeeeeeeeeeeeeeeeeeeeeeececcfceeece544eeeeeeefecffeeeeeeecfcee44444eeeeeeeeeee4545555eeeeeeecce4cffffffffffffffffccceee444eeeee444
        fffffccfffffff444eeeeeffffffffceefeeeeeeeeeeeeeeeeeeececcffeeece544eeeeeeefeeefeeeeeeeefcee44444eeeeeeeeeee45445554eeeeeecee4ffffffffffffffffffffcffffeee44444e
        fffffcccfffeef444eeeefffffffffeeeeeeeeeeeeeeeeeeeeeeeceecffeeece544eeeeeeeeeeeeeeeeeeeeffee44444eeeeeeeeeee45545444eeeeeeceeeffcffffffffffffffffffffffffff44ecf
        ffffcecffffeee444eeecfffffffcf4eeeeeeeeeeeeeeeeeeeeeeeccccffeeee444eeee424eeeeeeeeeeeeeefce44444eeeeeeeeeee44444444eeeeeeeeeeffcffffffffffffffffffffcffcfe4efff
        ffffceccfffeee444eeefffffffffe4eeeeeeeeeeeeeeeeeeeeeeeecccfffeee444eeee44444eeee4eeeeeeecfe44444ee4eeeeeeee444e4444eeeeeeeeeffcfffffffffffffffffffffffcfcecffff
        ffccfeecffceee444eecfffffffffe4eeeeeeeeeeeeeeeeeeeeeeeeccccffeee444eeee444444eee4eeeeeeeefc44444ee44eeeeeee45eee444eeeefeeeeffcfffffffffccfffffffffffcff4ffffff
        ffceceecffeeee444ecfffffffcff44eeeeeeeeeeeee22eeeeeeeecccccffcee444eeee444eeeeee44eeeeeeeff44444ee44eeeeeee44eee444eeeeeeeeecffcffffffffccccccfffccffffeeffffff
        ffeeeeecffeeee444ccfffffffcfc44eeeeeeeeee22e22eeee4eeeecccccffee444eeee444feeeee44eeeeeeeef44444ee444fceeee45eee444eeeeeeeeecfffffffffffffccccccccffff4ffffffff
        fceeeeefffeeee44effffffffffcee4eeeeeee2e222e22eeee4eeeecccccfffe444eeee44ecccfce44eeeeeeeee44444ee444eeeeee444e4444eeeeeeeeeefffffffffffffffcccccffffeeffffffff
        feeeeecfffeeee4ecffffffffffce44eeeeeee2eee2e2eeeee4eeeeeccccfffe444eeee44ecfffce44eeeeeeeee44444ee444eeeeee44444444eeeeeeeee4fffffffffffffffffffffffe4fffffffff
        ceeeeeccffee2eeffffffffffffeee4eeeeeee2eeeeeeeeeee4eeeeeeeeccffc444eeee44effffce44eeeeeeeee44444ee444eeeeee44444444eeeeeeeee4fffffffffffffffffffffffc4effffffff
        eeeeefceccee2ecccfffffffffceee4eeeeeee2eeeeeeeeeee4eeee4eeeceffc44eeeee44efffffce4eeeeeeeee44444ee444eeeeee44444444eeeeeeeee4efffffffffffffffffffffff4effffffff
        eeeeefeeeeeeeffffffffffcccceee4eeeee2e22222eeeeee44eeee4eeeeecff44eeeee44efffffcc4eeeeeeeee44444ee444eeeeee44444444eeeeeeeee44fffffffffffffffffffffff42cfffffff
        eeeeefeeeeeeefffffffffccccceee4eeeee2e2eeeeeeeeee44eeee4eeeeeccc44eeeee44effcffcf4eeeeeeeee44444ee444eeeeee44444444eeeeeeeee44cfffffffffffffffffcffffe2efffffff
        eeeeefeeeeeefffffffffccccceee44eecee2e22eeeeeeffe4eeeee44eeeeccc44eeeee44efffffcfeeeeeeeeee44444ee444eeeeee44444444eeeeeeeee44effffffffffffffffffffffe2efffffff
        eeeeefeeeeeefffffffffccccceeee4eecee2e22eeeeeeffe4eeeee44eeeeecc44eeeeee4efffffffeeeeeeeee444444ee444eeeeee44444444eeeeeeeee444fcccffffffffffffffffffc4ecffffff
        eeeeefeeeeeffffffffffcccceeeee4eecee222eeeeeeeeec4eeeee44eeeeeec44eeeeee4effffcfffeeeeeee4444444ee444eeeeee44444444eeeeeeeee444efcffffffffffffffffffff4efffffff
        eeeeefeeeeffffffffffcccceeeeee4eccee22eeeeeeeeeeceeeeee444eeeeee44eeeeee4effffcfcfeeeeeee4444444ee444eeeeee44444444eeeeeeeee444efcffffffffffffffffffff44ccfcfff
        eeeeefeeefffffffffffcfcceeeeee4eeeeeeeeeeeeeeeeeefeeeee444eeeeee44eeeee44efffffcccceeeeeeee44444ee444eeeeee44444444eeeeeeeee444efcfffffffffffffffffccf4ecccffcc
        eeeeefeeffffffffffffcccceeeeee4eee2eeeeeeeeeeeeeeceeeee444eeeeee44eeeee44efffffcccceeeeeeee44444ee444eeeeee44444444eeeeeeeee444eefffffffffffffffffcccfeccccfccc
        eeeeefecffffffffccffccceeeeeeeefeeeeeeeeeeeeeeeeeceeeee444eeeeee44eeeee44effffccccceeeeeeee44444ee444eeeeee44444454eeeeeeeee444eecfcffffffffffffccccccccccccccc
        eeeeefccffffcccccfccfeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeee444eeeeee444efce44ecfffccccceeeeeeee44444ee444eeeeee444ee444eeeeeeeee444eefccffffffffffffffccccccccccccc
        eeeeeffcfffccccceecfceeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeee444eeeeee444ecce44ecfffcccccceeeeeee4ee44ee444eeeeee44eeee44eeeeeeeee444eeffcfffffffffffffcccccccccccccc
        eeeeecfcffccccfceefcceeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeee444eeeeee424eeee44eefffccccccceeeee4eee44ee444eeeeee44eeee44eeeeeeeee444eeefffffffffffffffccfccccccccccc
        eeeeffffffcccffcccccceeeeeeeeeee2eeeeeeee22222eeeeeeeee444eeeeee444eeee44eefffccccccceeeeeeefe44ee444eeeeee444eee44eeeeeeeee444ee4fccfffffffffffcccffcccccccccc
        eeecffffffffcccffccceee2e4e4eeee22eeeee2eeeeeecce44eeee444eeeeee424eeef44eeccccccccfcceeeee4e444ee444ee44ee444eee44eeeeeeeee444444cccfffffffffffcecffffffcccccc
        ceeffffffccfcccffcceeee2eeeeeee222eeeeeeeeeeeecce444eee444eeeeee424eeee44eeccccccccfcceeeee44444ee444ee44ee44eeee44eeeeeeeee444444efcffffffffffccecffffffffffff
        cefffffffcccccccceeeeeeeeeeeee222eeeeeeeeeeeeccce4444ee444eeeeee424eeee44eeecccccccfccceeee44444ee444e444ee44eeee44eeeeeeeee4444444fcffffffffffcccfffffffffffff
        ccffffffcccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444eeeeee424eeee44eeecccccccfcceeeee4eee4ee4444444ee44eeee44eeeeeeeee4444444ccffffffffffcccffccccccffffc
        fcffffffccccccceeeeeeecccccccceeeeeeeeee222eeeee4444444444eee2ee424eeee44eeeccccccccfceeeeeeeee4ee44444444e44eee444eeeeeeeee4444444ecfffffffffccccffccccccccccc
        fcfffffcceeeccceeeeeeccceeeeeeeeeeeeeeeee2444e4444eeee44444ee4ee444eeee4efeeccccccccfeeeeeeeee44ee4444444ee444ee444eeeeeeeee4444444ecffffffffcceecffccccccccccc
        ccccffceeeeecceeeeeeeeeeeeeefee2422222444444444444eeeee4444444e4444eeee4eceeeccccccccceeeeeeee44ee4444444ee444e4444eeeeeeeee4444444eccfcfffcccccccfcccccccccccc
        ccccffceeeeeceeeeeeefeccceeee42222eeeeeeeeeeeeee4244444444444444444eeee4eefeeeccccccceeeeeeeee44e4444444e4e44444444eeeeeeeee4444444eccfcccccccccccfcccccccccccc
        ffffccceeeeeeeeeeeeeceeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444eeee4eeeeeeeeeeeeceeeeeeeee44e444444e44444444444eeeeeeeee444444eccccccccccccefffcccccccccccc
        ffffceeeeeeeeeeeeeefceeeeeeeeeeeeeeeeefeeeeeeee44e44444eeeeee444444eeee4eeeeceeeeeeeeeeeeee4ee44e444444444444444444eeeeeeeee444ecccccccccccfcccecffcccccccccccf
        ffffceeeeeeeeeeeeeeceeeeeeeeeeeeeeeeefeeeeeeeeefee444eeeeeeeeeee444eeee44eeeceeeeeeeeeeeeee4444424444e4444444444444eeeeeeeeeeecccccccccccccccccecffcfcccccccccf
        ffffceceeeeeeeeeeecfee4eeeeeeeeeeeeeee4eeeeeeeeee4444eeceeeeeeeee4eecee44eeefeeeeeeeeeeeeeeee44444444e4444444444444eeeeeeeeccccccccccccccccccceccffcccccccccccc
        ffffceeeeeeeeeeeeecfee24442242444444444444444444444eee444444444444eececeeeeefeeeeeeeeeeeeeeee44444444e4444444444444eeeeeeeccccccccccccccccccccecfffccffffffcccc
        ffffceeeeeeeeeeeeefcee422244222444444444444444eeeeeeee44eeeeeeeeee4eecccceeeeeeeeeeeeeeeeeeee4444444444444444444444eeeeeecccccccccccccccccccfcecfffccfffffffccc
        cccceeeeeeeeeeeeeeceeeee222224444444444444444eeeeeee444eeeeeeeeeee4eeeecceeeeeeeeeeeeeeeeee444444444444444444444444eeeeeecccccccccccccccccccfcccfffccfffffffffc
        ccceeeeeeeeeeeeeefceeeee442eeeeee4eeeeeeeee444444444eeeeeeeeeeeeee4eeeeeceeeeeeeeeeeeeeeeee444444444444444444444444eeeeeccccccccccccccccccccfeccfffccccccffffff
        fffceeeeeeeeeeeeecceeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee244eeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eeeeecccccccccccccccccccefecffffcccccccffccc
        ffffeeeeeeeeeeeeeceeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeee2444eeeeeeeeeeeeee222eeeeee44444444444444444444444444eeeeeecfccccccccccccccceeeecfcffcccccccccccc
        fffffeeeeeeeeeeeceeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeee22444eeeeeeeeeeeeeee2ee222eee44444444444444444444444444eeeeeecfccccccccccccfcceeeccccffcccccccccccc
        ffffffeeeeeeeeeeceeeeeeeeeeeeeeeee44eeeeeeeeeeeeeeeeeeeee22e24444eeeeeeeeeeeeeeeee2eeeee444444444444444444444444444eeeeeccccccccccccffccfeeeefcccffcccccccccccc
        ffffceeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeee2ee22222eeeeeee2224444442eeeeeeeeeee444444444444444444ecccccee44444444444ecccccccccccccccccfffceeeeceecffcccccccccccc
        fffffceeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeee22222222222222e22444444444eeeeeeee4442ee4eeeeeeeeee444eccccccccee44444eeccccccccccccccccccccccceeefceecfffccccccccccc
        ccccffeeeeeeeeeeeeeeeeeeeeeeeeeee44444eee222222eeeee222224444444444444444444422eeeeeeeeeeeeeeeeecccecccceecee44ecfcccccccccccccccccccccceeeefeeecffffcccccccccc
        ccccffcceeceeeeeeeeeeeeeeeeeeeee44444444eeeeee22eeeee44444444222224444442eeeeeeeeeeecccceeeeeeeecccceecccccce4ecccccccccccccccccccccccfceeeeeeecfffffcceccccccc
        cceeffffeeeeeeeeeeeeeeeeeeeeee444244444444444444444444444444222222224444eeeeeeeeecccccccccceeccccccccccccee4e4ecccccccccccccccccccccccfceeeeeeecfffffcceeeeeeec
        eeeeffffeeeeeeeeeeeeeeeeee44444eee22444444444444444422222222e2222222224eeeeeeeeecccccccccccccecccccccceee444444eecccccccccccccccccccccceeeeeeeecfffffceeeeeeeee
        fffeffffeeeeeeeeeeeeeeee22e22222ee2244444eeeeeeeee2222222222222222222eeecccccceeccccccccccccceeeccccee4eeeccceee44eeeeccccccecccccccccceeeeeeeecfffffceeeeeeeee
        fffefffffeeeeeeeeeeeeeeeeeeeee2ee2222442eeccccccceeee2222222222222242eccccccccccccecccccccccccfcfeeeeeccccccecccee4444eeecceeecffffcccceeeeeeeecfffffeeeeeeeeee
        fffeeffffeeeeeeeeeeeeeeeeeeee22222eeeeeeeeccccccccceeeeeeeeeeeeeeeeeeeccccccccccccccceccccccceeeeeecccccccccccccccceee4444eeeeeccccccceeeeeeeeecfffffeeeeeeeeee
        fffeefffffeeeeeeeeeeeeeeeeeee222eeeeeecccccccceeeeeeeceeeeeeeeeeeeecccccccccccceccccceccccceeeeccccccccccccccccccccccccee4444eccccccceeeeeeeeeeffffffeeeeeeeeee
        ffffecffffeeeeeeeeeeeeeeeeee222eeeeecccccccccccee4eecccceeeeeeeeeccccccccccccceeeeceeccfeeeeeccccccccccccccccccccccccccce444ecccccccceeeeeeeeecffffffeeeeeeeeee
        ffefeeffffcceeeeeeeeeeeeeeeeeeeeceeecccccceeee444eeccccecccccccccccccceeeececccceeeeeec4444eececcccccccccccccccccccccceee44ecccccccceeeeeeeeeccffffffeeeeeeeeee
        feefeeffcccceeeeeeeeeeeeeeeeeeeecccccccceeeeeeeee44eecceeeeeeeeeeeeeeeeeeeeeeee44444444eeee44eeeceeeeeeeeeeeecccceeeeeeeeecccccccccceeeeeeeeecfffffffeeeeeeeeee
        eeeeeeccceecceeeeeeeeeeeeeeeeeeecccccccccccccccccee444eeeeeeeeeeeeeeeeeeeeeebeeeecceeeeccccceee44444eeeeeeee4e444eeeeeccccccccccccceee4eeeeeeffffffffeeeeeeee44
        eeeeeeecceecceee44eeeeeeeeeeeeccccccccccccceeccceee4444eeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccceeeeeeeeeeeeeeeecccccccccccccccceeeeeeeeeeffffffffeeeeee4424
        eeeeeeeeeeeceeeee4eeeeeeeeccccccccccccecceeeee44444e44eeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccceeeeeccccceeecccccccccccccceeeeeeeeecfffcffffeee4422222
        eeeeeeeeeeeeeeeee4eecccccccccccccccceeeeeee444eeeccceeccccccccccccccccccccecccccccccccccccccccceccccccceeeeeeeeeeecceecccccccccecceeeeeeeeeecfffcffffe442222eee
        eeeeeeeeeeeeeeeeeeeccccccccccccceeeee444eeeeecccecceeccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeccccceeccccccccccccceeeeeeeeeecfffffffc42244eeeff
        eeee4eeeeeeeeeeeeccccccccccccccee444eeeecccccccccceeccccccccccccccccccccceccecccccccccccceeeeeeecceecceeeeeeeeecccceeccccccccccccceeeeee4eeecfffffffc444eefffcf
        ee44eeeeeeeeeeeeefcccccccccee4eeeecccccccccceccceeecccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeceeeeeeeeccccccccccccecccceeeeeee44eecfffffcffceeefffcccc
        442eeeeeeeeeeeeeefcccccccce4eecccccccccccccccccccbccccccccccccccccccccccccccccccccccccccce44444444445544eeeeeeccccccccccccccee44eeeeee4eeeecffffffffcffcccfcccc
        4eeeeeeeeeeeeeeeeffccccceeeeccccccccccccccccceeceecccccccccccccccccccccccccccccccccccccecc4eccccccceeee444444eeeeceeeeeeeeee4eecceee44eeeecfffffffffffcffffcccc
        eeeeeeeeeeeeeeeeefffccfe4eecccccccccccccccccece44ccccccccccccccccccccccccccccccccccccccccceecccceeeccccee44444444ccccccccccceeeecee44eeeeecfffffffffffffeffcccc
        eeeeeeeeeeeeeeeeeccfcce4ecccccccccccccccccccee44eccccccccccccccccccccccccccccccccccccccccce4cecccccccccccceeeee44ccccccccccccceeeee44eeeeecfccffffffffcccffcccc
        eeeeeeeeeeeeee44eccccce4eccccccccccccccccccce4eecccccccccccccccccccccccccccccccccccccccccccbeccccccccccccccccce44ecccccccccccccceee4eee4eecfeccfffffffffccccccc
        eeeeeeeeeeee44eeefcccce4cccccccccccccccecce4eecccccccccccccccccccccccccccccccccccccccccccce4ececcccccccccccccce444eeccccccccccccee44eee4eecfeeffffffffffffccccc
        eeeeeeeeeeee444eeecccce4cccccccccccccccfce4eccccccccccccccccccccccccccccceeeeccccccccccce44eececccccccccccccceeee44444eeccccee44ee4eeeeeeeffeefffffffffffffffff
        eeeeeeeeeee4eeeeffcccce4ffffccffcceeeeeb44444ee44eccccccccccccccccccccccceeeeccccccccccc4ececccccccccccccccccccccee4444444544444e44eeeeeeecfeeeccffffffffffffff
        eeeeeeeeeeeeccfccccccce4ffffceeeeeeeeeeeeece4444444cccccccccccccccccccceeeeeeeecccfceeeebeccccceccccccccccccccceeeceeee44444444444eeeeeecccfeeeeccfffffffffffff
        eeeeeeeeecfccccffccccce4ccffeeccccccccccccee4eeee44cccccccccccccccccccceeeeeeeecfed4eeececcceccecccccccccccccceeccecccf4444444eefcceefffccffeeeefecffffffffffff
        eeeeeeeefffffffffccccce4ccfcceccccceeeeeeee4efcccc44eeeeecccceecccccccceeeeeeeee4554eeeeeeeccccccccccceeeecceeeeeecee44444444eeeeeeeeccccccfeeeeeefffffffffffff
        eeeeeeccfffffffffccccce4ccfcfecfeeeeeeeecee444eec444eeeeeccceecccffffffe44444445554555544444eeeeeeccffccccfcceeee4444444444eeeeeeeeeeccccccffffffeecfffffffffff
        eeeccccccccccccccfcccceecccffeceeeccccccccceee44444444eeeeeeeee44444444444444444444444444455555555444444444444444444444eeeeeecceeeeeeccccccffffffeeecffffffffff
        cccccccccccccccccccccccecccffeccccccccccccccccee444444444444444444444eeeeeeeeccccccccceeeeeeeeee4444444444eeeccccccceecccceeeeceeeeeeccccccfffffff4444effffffff
        cccccccccccccccccccccccccccfcecccccccccccccccccce4444444eeeeeeeeeeecccccccccccceeeeceecccccccccccccce444444eccccccccccccceeeeeeeeeeeeccccccffffffcfe44444eeffff
        cccccccccfccfcccfcccccccccccfefccccccccccccccccce44444eccccccccccccccccccccccccccccccccccccccccccccccee44444eecccccccccceeeeeeeeeeeecccccccffffffffffceee4eeeee
        cccccccccccfccccccccccccccccfefccccccccccccccccce444444eeeececccccccccccccccccccccccccccccccccccccccccce444444eeecccccceeeeeeeeeeeecccccccfffffffffffcfffeeeeee
        ccccccccccccccfecccccccccccccefcccccccccccccccccce44444ecccccccccccccccccccccccccccccccccccccccccccccccce444444eeeeccceeeeeeeeeeeeeccccccffffffffffffffffffffee
        ccccccccccccee44ccccccccccccfeffccccccccccccccccce444444cceeeccccccccccccccccccccccccccccccccccccccccecce4444444eeeccceeeeeeeeeeeeccccccfffffffffffffffffffffff
        cccccccccce44eecfccccccccccce4cfcccccccccccccccccc444444eeccceeccccccccccccccccccccccccccccccccccccccccee44444444ecccceeeeeeeeeeecccccccfffffffffffffffffffffff
        cccccccceeccfcfffccccccccce44ecccffccccccccccccccf4444ee444ecccccccccccccccccccccccccccccccccccfcccffce4444444444ecccceeeeeeeeeeecccccccfffffffffffffffffffffff
        cccccccccccccccccccccccee4eeccccfcccccccccccccccee44eeccee444eecccceccccccccceecccccccccccffcceeee44444444444444eccccccceeeeecceeeccccfffffffffffffffffffffffff
        cccccccccccccccccfffccceeeccccccccccccccccffccee444ccccccccee444eccccccceeeecccccccffffcce4444444444444eee44444ececccccffeeeeeceeccccffffffffffffffffffffffffff
        cccccccccccccccccffffceeeccccccccccccffccccccc444eeccccccccccee444eecccccccccccceeeee44444444444eeeeccccccee444eeeeeeecfffeeeeecccfffffffffffffffffffffffffffff
        ccccfcccccccccccccccfceecccccccccccccffccfffce44eccceecccccccccee4444efcceee4444444444444eeeeeccccccccceecccee444eececeffffcceeccffffffffffffffffffffffffffffff
        ffffccccccccccccccccccceecccccccccccccccccccee44eccccccccccccccccee4444444444444444eeeeeecccccccccccccccccccccee44eeeeeefffffceffffffffffffffffffffffffffffffff
        cfffcccccccccccccfccccceecccccccccccccccccfcee4eccccccccccccccccccceee4444eeeeeeeeceeeeccccccccccccccccccccccccee4444444fffffffeccfffffffffffffffffffffffffffff
        fccfccccccccccccccccccceccccccccccccccccffcfe42ecccccccccccccccccccccee44eeeeeccccceeeeeeeecccccccccccccccccccccee444444fffffffccccccffffffffffffffffffffffffff
        ccccfccccccccccccccccccccccccccccccccccccccce44cccccccccccccccccccccccc4eeccccccccccccccccccccccccccccccccccccccce444444ffffffffffccecfffffffffffffffffffffffff
        eeeecffffffccccccccccccffccccccccceeceeccccee44fccccccccccccccccccccccc4eecccccccccccccccccccccccccccccccccccccccce44444fffffffffffffcccccfffffffffffffffffffff
        eee4effffffffffcccccccfffffccccccceeeeeee44444efccccfccccccccccccccccce42ecccccccccccccccccccccccccccccccccccccccce44444cfffffffffffffffccfffffffffffffffffffff
        ee44eccfffffffffffffffffffffccccceeeeee4eeeeeeffffccccccccccccccccccffe44ecccccccccccccccccccccccccccccccccccccccce44444efffffffffffffffffccfffffffffffffffffff
        224eeccfffffffffffffffffffffccee4444442eecccccccffccccccccccccccccccfe444eeeeecccccccccccccccccccccccccccccccccccce22424efffffffffffffffffffccfffffffffffffffff
        422eecccfffffffffffffffffffccceeeeeeeeeeeeeeeccccccccccccccccccccccce422444eccccccccccccccccccccccccccccccccccccfce24224efcffffffffffffffffffffccffffffffffffff
        22eeeeccccccccccccccccffffccccccccccccccccceeeeccccfcccccccffffcceee442244444eeefcccccccccccccccccccccccccccccffee444224eccffffffffffffffffffffffffffffffffffff
        22eeeecccccccccccccccccffccccccccccccccccccccccccccfcccccccccfccce442442422444444ecfffcffcccccccccccccccccccccce24224222ecccfffffffffffffffffffffffffffffffffff
        `)
    LoadingSprite = statusbars.create(20, 4, StatusBarKind.Load)
    LoadingSprite.max = 5000
    LoadingSprite.value = 0
    LoadingSprite.setColor(2, 8)
    LoadingSprite.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    LoadingSprite.positionDirection(CollisionDirection.Bottom)
    LoadingTextSprite = textsprite.create("Loading")
    LoadingTextSprite.setPosition(79, 83)
    LoadingAnimation = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d . . . . d d . . . . 
        . . . . d d . . . . d d . . . . 
        . . . . d d . . . . d d . . . . 
        . . . . d d . . . . d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    LoadingAnimation,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d b b . . . . 
        . . . . d d d d d d b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d b b b b b b . . . . 
        . . . . d d b b b b b b . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d b b b b . . . . 
        . . . . d d d d b b b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d d d b b b b . . . . 
        . . . . d d d d b b b b . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d b b b b b b . . . . 
        . . . . d d b b b b b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d d d d d b b . . . . 
        . . . . d d d d d d b b . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b . . . . b b . . . . 
        . . . . b b . . . . b b . . . . 
        . . . . d d . . . . d d . . . . 
        . . . . d d . . . . d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b b b d d . . . . 
        . . . . b b b b b b d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b d d d d d d . . . . 
        . . . . b b d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b d d d d . . . . 
        . . . . b b b b d d d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b b b d d d d . . . . 
        . . . . b b b b d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b d d d d d d . . . . 
        . . . . b b d d d d d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b b b b b d d . . . . 
        . . . . b b b b b b d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . d d . . . . 
        . . . . b b . . . . b b . . . . 
        . . . . b b . . . . b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d . . . . d d . . . . 
        . . . . d d . . . . d d . . . . 
        . . . . b b . . . . b b . . . . 
        . . . . b b . . . . b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d b b . . . . 
        . . . . d d d d d d b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d . . . . b b . . . . 
        . . . . d d b b b b b b . . . . 
        . . . . d d b b b b b b . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    IsLoadingScreenVisible = true
}
function Level__3__Jungle () {
    tiles.setCurrentTilemap(tilemap`Tilemap_Level-3 - The Jungle`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`triggerShopTilesGrass`, function (sprite, location) {
    if (triggerShop == true) {
        WeaponShopUI()
        pause(1000)
    }
})
function SettingsView () {
    if (!(SettingsOpen)) {
        SettingsOpen = true
        SettingsMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("", img`
            .............eee.....................eee.......ee...............................................................ee..............
            ..eeeeeee..e22222e.................e22222e...222222.................eeeee.....................................222222............
            e22222222222455542.................2455542...245554e..............22222222e...................................255554e...........
            245555555542455542ceeeee.....eeee..2455542ee.245554eceeeee.......2455555552e..eeeee....ee...eee.eee..ee.....ee255554eeeeeee.....
            24555555555422222222222222.222222222455542222245554e22222222....245555555552e2222222e2222222222222222222e.e22225555422222222e...
            2455542455544555425555555224555555424555455542455542255555542...2555522455522455555522555544555455554555222555555554255555552e..
            24555424555445554555445554245555555445555555544555425555555542ce25555555542245555555525555445554555555554255555555545554455542c.
            24555424555445554555444422222224555445554455544555445554255552ce24555555554455552455545555445554555525555455552555545554444222cc
            24555424555445554555555552245555555445554455544555445555555552ac22455555555455552455545555445554555525555455552555545555555422ac
            24555424555445554255555555255555555445554455544555445555555552ac22222224555455552455545555445554555525555455552555544555555542ac
            24555424555445554444425555455544555445554455544555445554222222ae25555424555455552455545555445554555525555455552555544442455552ac
            24555555555445554555545554455555555445555555524555545555555542ac24555555555245555555524555555554555525555255555555545555455542ac
            24555555554245554455555542245554555445555555222455542555555522ace245555555222455555522245554555455552555522555555554455555542eac
            e22222222222222222222222222222222222222222222ae22222222222222aac.e222222222a222222222ae2222222222222222222222222222222222222eaac
            .e22222222aae222ea222222eaae2222222222222222aaae2222ae22222eaaac..e222222eaaae22222eaaae222222222222e2222aae2222222aa222222aaacc
            ..ccaaaaaaaaccaaaaaaaaaaaaccccaaaaaaaaaaaaaaaaccccaaaacaaaaaaac....ccaaaaaacccccaaaaacccccaaaaaaaaaaaaaaaaaccaaaaaaaaaaaaaaaacc.
            ...cccccccccc.ccccccccccccc..ccccccccccccccccc...ccccccccccccc......cccccccc...ccccccc...cccccccccccccccccccccccccccccccccccc...
            `),
        miniMenu.createMenuItem("", img`
            ..............................e22222e........
            e222222222e...................2222222........
            22222222222e..................2255522ec......
            22555455552222222222...2222222225552222222...
            225554555552222222222e22222222225552222222e..
            2255522255542455555422245455522255524555222c.
            225552225554255555554245545555225552555422acc
            225554555552222224555255542555425554554222acc
            22555455555224444455525554222222555455222aac.
            22555222555445555455525554222222555454522aac.
            225552225554555424555255542455425554455422cc.
            225554555552455554555245545555225554455522ec.
            2255545555222555445552245455522255522555422c.
            2222222222222222222222222222222222222222222cc
            22222222222c222222222222222222222222222222aac
            .......................cc......ccaaaaaaaaaacc
            ................................cccccccccccc.
            `)
        )
        SettingsMenu.setFrame(img`
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d 3 3 3 3 3 3 3 3 3 3 3 d d 
            d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d 
            `)
        myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selectedIndex == 0) {
            	
            } else if (selectedIndex == 1) {
                SettingsMenu.close()
                SettingsOpen = false
                DrawMenu()
            }
        })
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    LevelTheDeathGateHub()
})
function move_right_in_toolbar () {
    if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) < toolbar.get_number(ToolbarNumberAttribute.MaxItems) - 1) {
        toolbar.change_number(ToolbarNumberAttribute.SelectedIndex, 1)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    CheckQualification(3)
    if (IsQualified == true) {
        IsQualified = false
        Level__3__Jungle()
    } else {
        music.zapped.play()
        IsQualified = false
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
})
function preSetBossPosition (x: number, y: number) {
    started = false
    ready = false
    offset = 0
    moveSpriteInTime(boss, x, y, 1)
}
function Level__6__Mossy_Dungeon () {
    tiles.setCurrentTilemap(tilemap`level47`)
}
function moveSpriteRandomFixedTime (sprite: Sprite, yLowerBound: number, outerBound: number, t: number) {
    moveSpriteInTime(sprite, randint(outerBound, scene.screenWidth() - outerBound), randint(outerBound, yLowerBound), t)
}
function nonSpell2 () {
    for (let index3 = 0; index3 <= MAX - 1; index3++) {
        shootBulletFromSprite(boss, 60, 360 / MAX * index3 + offset)
        shootBulletFromSprite(boss, 100, 360 / MAX * (index3 + 0.5) + offset)
    }
}
function make_toolbar () {
    last_toolbar_select = 0
    DrawToolbar()
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
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
})
controller.combos.attachCombo("rA", function () {
    projectileSprite = sprites.createProjectileFromSprite(assets.image`projectileSprite`, PlayerWarrior, 50, 0)
    projectileSprite.setKind(SpriteKind.PlayerShot)
})
function SpawnCharecter () {
    PlayerWarrior = sprites.create(img`
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
    Players_Health = statusbars.create(100, 4, StatusBarKind.Health)
    Players_Health.value = 100
    Players_Health.setColor(3, 15)
    Players_Health.setStatusBarFlag(StatusBarFlag.SmoothTransition, false)
    Players_Health.setLabel("HP", 15)
    Players_Health.positionDirection(CollisionDirection.Top)
    controller.moveSprite(PlayerWarrior, 100, 100)
    scene.cameraFollowSprite(PlayerWarrior)
    controller.moveSprite(PlayerWarrior)
    spriteutils.setLifeImage(img`
        . . . . . . . 
        . . e 4 e . . 
        . . e 2 e . . 
        e . e e e . e 
        e e e 4 e e e 
        . e 4 2 4 e . 
        . . e 4 e . . 
        . . . e . . . 
        `)
}
function shootBulletFromSprite (sourceSprite: Sprite, speed: number, angle: number) {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sourceSprite, speed * Math.cos(angle / 57.3), speed * Math.sin(angle / 57.3))
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
    if (sourceSprite.kind() == SpriteKind.Player) {
        projectile.setKind(SpriteKind.PlayerShot)
        projectile.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 4 4 5 . . . . . . 
            . . . . . 5 4 2 2 4 5 . . . . . 
            . . . . . 5 4 2 2 4 5 . . . . . 
            . . . . . . 5 4 4 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        projectile.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . 9 6 6 9 . . . . . . 
            . . . . . 9 6 8 8 6 9 . . . . . 
            . . . . . 9 6 8 8 6 9 . . . . . 
            . . . . . . 9 6 6 9 . . . . . . 
            . . . . . . . 9 9 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
}
function moveSprite (sprite: Sprite, x: number, y: number, v: number) {
    globalX = x
    globalY = y
    dx = x - sprite.x
    dy = y - sprite.y
    speed = Math.sqrt(dx * dx + dy * dy)
    if (speed != 0) {
        sprite.setVelocity(dx / speed * v, dy / speed * v)
    }
}
function Level__7__Haunted_Mansion () {
    tiles.setCurrentTilemap(tilemap`level48`)
}
function enemyShootAimingPlayer (sprite: Sprite, speed: number, spread: number) {
    shootBulletFromSprite(sprite, speed, Math.atan2(PlayerWarrior.y - sprite.y, PlayerWarrior.x - sprite.x) * 57.3 + randint(0 - spread, spread))
}
function SpawnNPCJhonny (cordsX: number, cordsY: number) {
    NPCJhonnyCitizen = sprites.create(assets.image`NPCJhonny`, SpriteKind.NPCJhonny)
    tiles.placeOnTile(NPCJhonnyCitizen, tiles.getTileLocation(cordsX, cordsX))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile53`, function (sprite, location) {
    DungeonLevel += 1
    DestroySprites()
    LevelHomeTown()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`RuinsTile - 2 - Horizontal - Breakable0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile15`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`RuinsTile - 2 - Horizontal - Breakable`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile16`)
})
function Level__1__Ruins () {
    tiles.setCurrentTilemap(tilemap`level10`)
    tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.stairEast)
    SpawnPlasticZombie(5, 1)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    DungeonLevel += 1
    DestroySprites()
    LevelHomeTown()
})
function LevelTheDeathGateHub () {
    DestroySprites()
    tiles.setCurrentTilemap(tilemap`DeathGateHub`)
    tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
}
let NPCJhonnyCitizen: Sprite = null
let speed = 0
let projectile: Sprite = null
let last_toolbar_select = 0
let ready = false
let SettingsMenu: miniMenu.MenuSprite = null
let LoadingAnimation: Sprite = null
let LoadingTextSprite: TextSprite = null
let LoadingSprite: StatusBarSprite = null
let bossCanMove = false
let Players_Health: StatusBarSprite = null
let DungeonLevel = 0
let offset = 0
let MAX = 0
let sagaSprite: Sprite = null
let scroll = false
let projectileSprite: Sprite = null
let boss: Sprite = null
let triggerShop = false
let lifeBar: StatusBarSprite = null
let lifeBarPic: Image = null
let started = false
let IsQualified = false
let dy = 0
let dx = 0
let globalY = 0
let globalX = 0
let HasGameStarted = false
let PlasticBottleIcon: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let MenuOpen = false
let PlayerWarrior: Sprite = null
let Monsters_Health: StatusBarSprite = null
let PlasticZombie: Sprite = null
let SoundPhase = 0
let ShowSaga = false
let SagaTimeSpan = 0
let triggerNPC = false
let bossLife = 0
let IsOverlapingNPCJhonny = false
let IsLoadingScreenVisible = false
let SettingsOpen = false
let IsOverlapingShopTiles = false
IsOverlapingShopTiles = false
let NecronWarlord = null
let toolbar: Inventory.Toolbar = null
let storyLines: string[] = []
let star = null
let lineAdjust = 0
let sagaImage: Image = null
let item2 = null
let all_items: Image[] = []
let all_labels: string[] = []
let lifeBarProgress = 0
let bossProgress = 0
SettingsOpen = false
function add_item(item_in_list: any[]) {
    for (let item of toolbar.get_items()) {
        if (item.get_image().equals(item_in_list[0].get_image())) {
            if (item.get_text(ItemTextAttribute.Tooltip) == "") {
                item.set_text(ItemTextAttribute.Tooltip, "2")
            } else {
                item.set_text(ItemTextAttribute.Tooltip, convertToText(parseFloat(item.get_text(ItemTextAttribute.Tooltip)) + 1))
            }
            toolbar.update()
            return true
        }
    }
    if (toolbar.get_items().length < toolbar.get_number(ToolbarNumberAttribute.MaxItems)) {
        toolbar.get_items().push(item_in_list[0])
        item_in_list[0].set_text(ItemTextAttribute.Tooltip, "")
        toolbar.update()
        return true
    }
    return false
}
IsLoadingScreenVisible = false
IsOverlapingNPCJhonny = false
namespace SpriteKind {
    export const Star = SpriteKind.create()
    export const Logo = SpriteKind.create()
    export const Messages = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const AOE = SpriteKind.create()
    export const Sphere_Of_Influence = SpriteKind.create()
    export const Load2 = StatusBarKind.create()
}
let DeathMessages = [
"*Rage Incoming*",
"You died! Oh wait, you already know that!",
"c",
"d",
"e"
]
bossLife = 48
triggerNPC = false
SagaTimeSpan = 34000
ShowSaga = false
DrawLoadingScreen()
timer.debounce("Loading", 5000, function () {
    Start_Game()
    SoundPhase = 1
})
game.onUpdate(function () {
    if (ShowSaga == true) {
        if (sagaSprite.bottom < 0) {
            sagaSprite.destroy()
        }
    }
})
forever(function () {
    if (IsLoadingScreenVisible == true) {
        pause(200)
        LoadingTextSprite.setText("Loading.")
        pause(200)
        LoadingTextSprite.setText("Loading..")
        pause(200)
        LoadingTextSprite.setText("Loading...")
        pause(200)
        LoadingTextSprite.setText("Loading")
    }
})
forever(function () {
    characterAnimations.runFrames(
    PlayerWarrior,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.runFrames(
    PlayerWarrior,
    [img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.runFrames(
    PlayerWarrior,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.runFrames(
    PlayerWarrior,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
forever(function () {
    if (SoundPhase == 1) {
        Music.CatQuestVo1(songs.Ocean)
    } else if (SoundPhase == 2) {
        Music.CatQuestVo1(songs.Seaside_town)
    } else if (SoundPhase == 3) {
        Music.CatQuestVo1(songs.Tavern)
    }
})
forever(function () {
    if (IsLoadingScreenVisible == true) {
        while (LoadingSprite.value != 5000) {
            pause(randint(50, 100))
            LoadingSprite.value += 100
            LoadingSprite.attachToSprite(LoadingAnimation)
        }
        LoadingAnimation.destroy(effects.ashes, 500)
        LoadingTextSprite.destroy(effects.disintegrate, 500)
        IsLoadingScreenVisible = false
    }
})
