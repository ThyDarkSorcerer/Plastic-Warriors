enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Star = SpriteKind.create()
    export const Logo = SpriteKind.create()
}
function SpawnPlasticZombie (Amount: number, Health: number) {
    for (let index = 0; index <= Amount; index++) {
        PlasticZombie = sprites.create(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 3 e e e f f f f 
            f f f 3 3 3 e e f f f f 
            f f f 3 3 3 3 e e f f f 
            f 3 e 3 3 3 3 3 3 e 3 f 
            f 3 3 f f 3 3 f f 3 3 f 
            f e 3 d d d d d d 3 e f 
            . f e d d b b d d e f . 
            . f f e 3 3 3 3 e f f . 
            e 3 f b 1 1 1 1 b f 3 e 
            3 d f 1 1 1 1 1 1 f d 3 
            3 3 f 6 6 6 6 6 6 f 3 3 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(PlasticZombie, sprites.dungeon.darkGroundCenter)
    }
}
function DrawMenu () {
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
    if (!(MenuOpen)) {
        MenuOpen = true
        myMenu = miniMenu.createMenu(
        miniMenu.createMenuItem(" ", img`
            ............eeee.......................
            ..eeeeeee..222222......................
            e2222222222245542e.....................
            22555455542245542e.eeeeee.eeee..eeee...
            22555455554245542e2222222222222222222..
            2255522255524554224555554245542255522e.
            2255522255524554225555555425552455522cc
            2255522255524554222222255525554455422cc
            225554445552455422444445552455455522ccc
            225554555522455422555545552255455522cc.
            22555244422245542455522555224555542ecc.
            2255522222e245555455554555222455522ccc.
            2255522c...e24555245552555222455422cc..
            2222222.....e222222222222222255542ecc..
            .e222ec......e2222e222e22222255522ccc..
            ...................ccc.....2455422cc...
            ...........................222222ccc...
            ............................eeeeccc....
            ..............................ccccc....
            `),
        miniMenu.createMenuItem(" ", img`
            ....................................eeee................................
            ...eeeeee................e......e..222222...............................
            ..222222222...........e2222..e2222e255542...............................
            .22555555422..eeeee..224442e224442e255542eeeeeee....eeeeee....eeeeee....
            225554555542e222222222555422255542222222222222222e.22222222..22222222...
            2455522255422254555424555455455545525554255525552222554554222454555522..
            2455544442222554555544555455455545525554255545555225554555424554455542e.
            2255555555224554225552555422255542225554255522555245552255524554224222ec
            e225555555524554445552555422255542225554255522555245552255524555555522ec
            222244445552455455554255542e2555422255542555225552455522555224555555422c
            24555222555245542222225554222555422255542555225552455522555224422455522c
            22555554554225545555424555542455554255542555225552255554555245554455422c
            .225555454222254555522245554224555425554255522555222555255522555545422cc
            .e222222222ce22222222ee222222e222222222222222222222222225552222222222ccc
            ..e2222222c..e222222e..e2222e.e22222222222222e222222555555422e222222cccc
            .....................................cc...........e245555422c.ccccccccc.
            ...................................................e2222222c....ccccc...
            .....................................................eeeeecc............
            .......................................................cccc.............
            `),
        miniMenu.createMenuItem(" ", img`
            .............eeee....................................................................................
            ......eee...222222e..................................................................................
            ....e22222e.245542e.........................e222e....................................................
            ....2255522.2455422ee....eeeeee..eeee.eeee2224522e......eeeee....eeeeee..eeeeeeeee.eee....eeeeee.....
            ...e2545542e2455422222..222222222222222222245552222...e2222222e.22222222222222222222222..22222222....
            ...225455522245544554222255455422455424555255554522..e24545552224555554222555255542555222254555422...
            ...245455542245545555422555455542455424555255554522..245545555225555555422555455554555522554555542e..
            ..2255545552245542455524554225552455424555245552222.e2555425554222222555225552255522555245542255522c.
            ..245542555224554245552455422555245542455524555222e.e2555425554244444555225552255522555245544455522c.
            .e24554255542455424555245542255524554245552455522e..e2555425554255554555225552255522555245545555422cc
            .22555455555245542455524554225552455424555245552222.e2555425554455522555225552255522555245542222222cc
            .24554555555445544555422555455542255554555225555522..245554555445555455522555225552255522554555542ecc
            e25554222455545545554222255455422225544555222555522..e24554555424555255522555225552255522254555522ec.
            e222222e22222222222222ce22222222ee22222222222222222...22222555422222222222222222222222222222222222cc.
            .e2222c..222222222222c..e222222cc..22222222..22222....2455555522e222e22222222ee2222e2222ce222222eccc.
            ..........................ccccccc.....................225555422eccccccccc..................cccccccc..
            ............................ccc........................2222222ec....cc.......................cccc....
            ........................................................eeeeecc...........3..........................
            ..........................................................ccccc......................................
            `)
        )
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 0)
        myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            myMenu.close()
            if (selectedIndex == 0) {
                MenuOpen = false
                LevelHomeTown()
            } else if (selectedIndex == 1) {
                MenuOpen = false
                SettingsView()
            } else if (selectedIndex == 2) {
                MenuOpen = false
                DrawSaga()
            }
        })
    }
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
        tiles.placeOnRandomTile(Warrior, sprites.dungeon.floorLight0)
    }
})
controller.combos.attachCombo("lA", function () {
    projectileSprite = sprites.createProjectileFromSprite(assets.image`projectileSprite`, Warrior, -50, 0)
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
function Start_Game () {
    DungeonLevel = 1
    IsQualified = false
    info.setScore(0)
    DrawMenu()
}
function Level__8__Shadow_Realm__Boss () {
	
}
function LevelHomeTown () {
    SpawnCharecter()
    SoundPhase = 2
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(Warrior, assets.tile`HomeSpawn`)
}
controller.combos.attachCombo("dA", function () {
    projectileSprite = sprites.createProjectileFromSprite(assets.image`projectileSprite`, Warrior, 0, 50)
})
function Level__4__Future_Planet () {
	
}
function Level__5__Lost_City () {
	
}
function DestroySprites () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Logo)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false, effects.slash)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    LevelTheDeathGateHub()
})
function Level__2__Underwater_Palace () {
    tiles.setCurrentTilemap(tilemap`DungeonLevel2`)
}
function SpawnWarlord () {
    game.showLongText("You have made it to the end. Now you shall have the honour of getting killed by me. ", DialogLayout.Bottom)
    NecronWarlord = sprites.create(assets.image`NecronWarlord`, SpriteKind.Enemy)
    animation.runImageAnimation(
    NecronWarlord,
    [img`
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
        `,img`
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
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `,img`
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
        `,img`
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
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
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
    projectileSprite = sprites.createProjectileFromSprite(assets.image`projectileSprite`, Warrior, 0, -50)
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
        tiles.placeOnRandomTile(Warrior, sprites.dungeon.floorLight0)
    }
})
function Level__3__Jungle () {
    scene.setBackgroundImage(img`
        3377777777777777777777777777777777777777777773377777777777777777777777777777777777777777777777777777777777777777777777777775577777777777777777333777755557777777
        3377777777777777777777777777777777777777777777777777777777777775577777777777777777777777777777777777755577777777777777777775577777777777777777333777755557777777
        3377777777777777737777777777777777777777777777777777777777777775577777777777777777777777777777777777755577777777777777777775577777777777777777333777777777777777
        7777777777777777737777777772227777777777777777777777777777777775577777777777777777777777777222777777755577777777777777777777777777777777777777777777777772277773
        7777777777777777737777777772227777777777777777777777227777777777777733777777777777777777777222777777777777777777772277777777777777333777777777777777777772277773
        7777777777777777777777777777777777777777777777777777227777777777777733777777777777777777777222777777777777777777772277777777777777333777777777777777777772277773
        7777777777777777777777777777777777777733377777777777227777777777777733777777773333777777777777777777777777777777772277777777777777333777777777777777777772277773
        7777222777777777777777777777777777777733377777777777777777777777777733777777773333777777777777777777777777777777772277777777777777777777777777777777777772277777
        7777222777777777777777777777777777777733377777777777777777777777777777777777773333777775557777777777777777777777777777777777777777777777777777777777777777777777
        7777222777777777777777777777777777777777777777777777777777777777777777777777777777777775557777777777777773377777777777777777777777777777777777777777777777777777
        7777777777777775577777777777777777777777777777777777777777777777777777777777777777777777777777777777777773377777777777777777777777777777777777777777777777777777
        7777777777777775577777733777777777777777777777555777777777777777777777777777777777777777777777777777777773377777777777777777777777777777777777777777777777777777
        3377777777777777777777733777777777777777777777555777777777777777777777777772227777777777777777777777777773377777777773333377777777777722222777777777773333777777
        3377777733377777777777733777777722277777777777555777777777777777777777777772227777777777777333777777777777777777777773333377777777777722222777777777773333777777
        3377777733377777777777777777777722277777777777777777777777333777777777777772227777777777777333777777777777777777777773333377777777777777777777777777773333777777
        7777777733377777777777777777777722277777777777777777777777333777777755577777777777777777777333777777777777777777777777777777777777777777777777777777777777777227
        7777777777777777777777777777777777777777777777777777777777333777777755577777777777777777777777777777777777777777777777777777777777777777777777777777777777777227
        7777777777777777777777777777777777777777777777777777777777777777777755577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755577777777777777
        7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777755577777777776677777777767777777755577777777777777
        7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777755577777677666777777777667777777755577777777777767
        7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
        6666667767766766776766777722777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
        6666677766766666766667777722777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
        6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
        6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
        6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
        66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
        66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
        66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
        66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
        66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
        6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
        6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
        6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
        bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
        bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
        bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
        bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
        bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
        bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
        bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
        bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
        bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
        bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
        b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
        b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
        b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
        b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
        dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
        9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
        9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
        9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
        9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
        99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
        99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
        9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
        9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
        999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
        d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
        dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
        dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
        9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
        ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
        dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
        d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
        d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
        d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
        999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
        999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
        9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
        d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
        ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
        dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
        ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
        ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
        ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
        dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
        dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
        ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
        dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
        ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
}
function SettingsView () {
    SettingsMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("PlaceHolder")
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
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
controller.combos.attachCombo("rA", function () {
    projectileSprite = sprites.createProjectileFromSprite(assets.image`projectileSprite`, Warrior, 50, 0)
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
    animation.runImageAnimation(
    Warrior,
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
    true
    )
    controller.moveSprite(Warrior, 100, 100)
    scene.cameraFollowSprite(Warrior)
    Warriors_Health = statusbars.create(100, 4, StatusBarKind.Health)
    Warriors_Health.value = 200
    Warriors_Health.setLabel("HP", 15)
    Warriors_Health.positionDirection(CollisionDirection.Top)
    Warriors_Health.setColor(9, 15)
}
function Level__7__Haunted_Mansion () {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`RuinsTile - 2 - Horizontal - Breakable0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile15`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`RuinsTile - 2 - Horizontal - Breakable`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile16`)
})
function Level__1__Ruins () {
    color.startFadeFromCurrent(color.Black)
    color.startFadeFromCurrent(color.originalPalette)
    tiles.placeOnRandomTile(Warrior, sprites.dungeon.stairEast)
    tiles.setCurrentTilemap(tilemap`level10`)
    SpawnPlasticZombie(5, 1)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    DungeonLevel += 1
    DestroySprites()
    LevelHomeTown()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Warriors_Health.value += -5
    pause(1000)
})
function LevelTheDeathGateHub () {
    tiles.setCurrentTilemap(tilemap`DeathGateHub`)
    tiles.placeOnRandomTile(Warrior, sprites.dungeon.floorLight0)
}
let Warriors_Health: StatusBarSprite = null
let SettingsMenu: miniMenu.MenuSprite = null
let NecronWarlord: Sprite = null
let DungeonLevel = 0
let sagaSprite: Sprite = null
let scroll = false
let Warrior: Sprite = null
let IsQualified = false
let myMenu: miniMenu.MenuSprite = null
let MenuOpen = false
let PlasticZombie: Sprite = null
let ShowSaga = false
let SoundPhase = 0
let SagaTimeSpan = 0
let projectileSprite: Sprite = null
let sagaImage: Image = null
let lineAdjust = 0
let star = null
let storyLines: string[] = []
projectileSprite = null
SagaTimeSpan = 34000
SoundPhase = 1
ShowSaga = false
Start_Game()
game.onUpdate(function () {
    if (ShowSaga == true) {
        if (sagaSprite.bottom < 0) {
            sagaSprite.destroy()
        }
    }
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
