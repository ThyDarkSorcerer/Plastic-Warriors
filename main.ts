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
    export const Logo = SpriteKind.create()
    export const VulkanAppSprite = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const ShopNpc_Sword = SpriteKind.create()
    export const ShopNPC_Hammer = SpriteKind.create()
    export const ShopNPC_Staff = SpriteKind.create()
}
namespace StatusBarKind {
    export const Load = StatusBarKind.create()
}
function DrawMenu () {
    if (!(MenuOpen)) {
        MenuOpen = true
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
            info.setScore(DungeonLevel)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`Exit_Level7HauntedMansion`, function (sprite, location) {
    console.log("Exited Level 7")
    HasCompletedLvl7 = true
    DestroySprites()
    LevelHomeTown()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile76`, function (sprite, location) {
    LevelHomeTown()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile77`, function (sprite, location) {
    LevelHomeTown()
})
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
    if (HasCompletedLvl3 = true) {
        Level__4__Future_Planet()
    } else {
        music.zapped.play()
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
    pause(2000)
})
// Overlaps for Dungeon Exit
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile92`, function (sprite, location) {
    console.log("Exited Level 8")
    HasCompletedLvl7 = true
    DestroySprites()
    LevelHomeTown()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (HasGameStarted == true) {
        timer.background(function () {
            handle_b_key_in_toolbar()
        })
        if (IsOverlapingNPCJhonny == true) {
            triggerNPC = true
            pause(2000)
            triggerNPC = false
        }
        if (IsOverlapingShopTiles == true) {
            triggerShop = true
            pause(2000)
            triggerShop = false
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
    if (HasGameStarted == true) {
        projectileSprite = sprites.createProjectileFromSprite(assets.image`projectileSprite`, PlayerWarrior, -50, 0)
        projectileSprite.setKind(SpriteKind.PlayerShot)
    }
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile60`, function (sprite, location) {
    WeaponShopUI()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (HasCompletedLvl4 = true) {
        Level__5__Lost_City()
    } else {
        music.zapped.play()
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
    pause(2000)
})
// Tilemaps
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (HasCompletedLvl0 == true) {
        Level__1__Ruins()
    } else {
        music.zapped.play()
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
    pause(2000)
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
    info.changeScoreBy(1)
    sprite.destroy()
})
function nonSpell1 () {
    for (let index22 = 0; index22 <= MAX - 1; index22++) {
        shootBulletFromSprite(boss, 60, 360 / MAX * index22 + offset)
    }
    offset += 13
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (HasCompletedLvl6 = true) {
        Level__7__Haunted_Mansion()
    } else {
        music.zapped.play()
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
    pause(2000)
})
function Level__6__The_Labyrinith () {
    tiles.setCurrentTilemap(tilemap`Level 6 The Labyrinth`)
}
function BlockMap () {
    tiles.setCurrentTilemap(tilemap`BlockMap`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Exit_Level5_AncientJungle`, function (sprite, location) {
    console.log("Exited Level 5")
    HasCompletedLvl5 = true
    DestroySprites()
    LevelHomeTown()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (HasCompletedLvl1 = true) {
        Level__2__Underwater_Palace()
    } else {
        music.zapped.play()
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
    pause(2000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Exit_Level6_TheLabyrinith`, function (sprite, location) {
    console.log("Exited Level 6")
    HasCompletedLvl6 = true
    DestroySprites()
    LevelHomeTown()
})
function Start_Game () {
    DungeonLevel = 1
    if (DebugMode == true) {
        InitDebugMode()
    }
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
    tiles.setCurrentTilemap(tilemap`Level8_ShadowRealm`)
}
function LevelHomeTown () {
    SoundPhase = 2
    DungeonLevel = 2
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(PlayerWarrior, assets.tile`HomeSpawn`)
    SpawnNPCJhonny(5, 5)
}
controller.combos.attachCombo("dA", function () {
    if (HasGameStarted == true) {
        projectileSprite = sprites.createProjectileFromSprite(assets.image`projectileSprite`, PlayerWarrior, 0, 50)
        projectileSprite.setKind(SpriteKind.PlayerShot)
    }
})
function spell2 () {
    for (let index4 = 0; index4 <= 4; index4++) {
        shootBulletFromSprite(boss, 60, offset + index4 * 30)
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
    DestroySprites()
    tiles.setCurrentTilemap(tilemap`level61`)
    tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorDarkDiamond)
    TraderNPC_Sword = sprites.create(assets.image`Npc_Sword_Shop`, SpriteKind.ShopNpc_Sword)
    tiles.placeOnTile(TraderNPC_Sword, tiles.getTileLocation(3, 8))
    TraderNPC_Hammer = sprites.create(assets.image`Npc_Sword_Shop0`, SpriteKind.ShopNPC_Hammer)
    tiles.placeOnTile(TraderNPC_Hammer, tiles.getTileLocation(12, 8))
    TraderNPC_Staff = sprites.create(assets.image`Npc_Hammer_Shop`, SpriteKind.ShopNPC_Staff)
    tiles.placeOnTile(TraderNPC_Staff, tiles.getTileLocation(7, 3))
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
    tiles.setCurrentTilemap(tilemap`Level4 - GrassyFields`)
}
function Level__5__Lost_City () {
    tiles.setCurrentTilemap(tilemap`level45`)
}
function DestroySprites () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPCJhonny)
    sprites.destroyAllSpritesOfKind(SpriteKind.ShopNpc_Sword)
    sprites.destroyAllSpritesOfKind(SpriteKind.ShopNPC_Hammer)
    sprites.destroyAllSpritesOfKind(SpriteKind.ShopNPC_Staff)
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
    tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.stairNorth)
    for (let index = 0; index < 10; index++) {
        DrawPlasticZombie(1)
        tiles.placeOnRandomTile(PlasticZombie, sprites.castle.tileDarkGrass3)
    }
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
}
function HandleShopBuy (ItemType: number) {
    if (ItemType == 1) {
        enable_movement(false)
        story.printCharacterText("Would you like to buy Sword of Life?", "Markus")
        story.printCharacterText("It costs 20 Plastic!", "Markus")
        story.showPlayerChoices("Yes", "No")
        if (story.checkLastAnswer("Yes")) {
            if (info.score() >= 20) {
                info.changeScoreBy(-20)
                add_item([Inventory.create_item(all_labels[1], all_items[1])])
                enable_movement(true)
            } else {
                story.printCharacterText("You cannot buy this yet!", "Markus")
                story.printCharacterText("Make sure you have 20 Plastic!", "Markus")
                enable_movement(true)
            }
        } else {
            story.printCharacterText("Oh ok! Make sure to buy it in the future!", "Markus")
            enable_movement(true)
        }
    } else if (ItemType == 2) {
    	
    } else if (ItemType == 3) {
    	
    }
    pause(10000)
}
controller.combos.attachCombo("uA", function () {
    if (HasGameStarted == true) {
        projectileSprite = sprites.createProjectileFromSprite(assets.image`projectileSprite`, PlayerWarrior, 0, -50)
        projectileSprite.setKind(SpriteKind.PlayerShot)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    if (HasCompletedLvl5 = true) {
        Level__6__The_Labyrinith()
    } else {
        music.zapped.play()
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
    pause(2000)
})
function DrawLoadingScreen () {
    scene.setBackgroundImage(img`
        fffffffcbccffffffffffcfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
        fffffffccffffcffffffbfddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
        fffffffcffffffbffffffddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
        ffffffcffffffffbdffffddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
        fcfffffffcdcdffdffdccdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
        fffffffffdbddcfffffcddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
        fcffffbffbffffffffbbddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
        fcbffffffcfffffffcdddd1111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
        fdcccffffdbffcffccdddd111111111111111111cc1111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
        fffffffffffffffcdddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
        ffffffffffffffcbddd11111111111111111111cccc11111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
        fffffffddcfffdddddd11111111111111111111ccccc11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
        fffffffdddbffbddd111111111111111111111cccccc111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
        ffffffcbfcccddddd111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
        fffffffffcfddddd1111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
        ffffffffdfcdddd1111111d11111d111111111cccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
        ffffffffcfbddd11111111111111111111111ccccccccc1111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
        fffffffcdcdddd11111111111111111111111cccccccccc1111111ccc111111111ccc111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
        fffffbfffcddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
        fccffdcbfbddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
        fffcffcdfbdd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
        ffddfffbbbdd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfccfffffffff
        cfdffffbcdd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcdfffffffff
        ffffffccdd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfbfffffffff
        ffcfffbdb111111111111111111111111111cccccccccccc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddcfdbffffffff
        fffffcddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbfcfffffffff
        fffffbdddd11111111111111111111111111cc1cc1ccc1cc1111111ccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddcfcfffffffff
        ffffcbddddd1111111111111111111111111cccccccccccc11111111ccccccccccc11111111111111111d1ddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbcfffffffffff
        fffccddddd11111111111111111111111111cccccccccccc111111111cccccccccc11111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbbffffffffffff
        ffdcbddddd11111111111111111111111111cccccccccccc111111111ccccccccc111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbffffffffffcf
        ffccddddddd11111111111111111111111111cccccccccc1111111111ccccccccc1111111111111111111dddddddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbcffffffffffff
        ffcbdddddd1111111111111111111111111111cccccccc11b11111111ccccccccc111111111111bb1111ddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbccfffffffffff
        ffcbddddd111111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddfffffffffffff
        fcbbdddddd1111111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbcfffffffffff
        fcddddddd1111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111b111ddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbcfffffffffffff
        ccddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111dddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbbffffffffffffff
        ddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111b111bdddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbccfffffffffffff
        dddddddd11111111111cc11ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111b111bddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbccfffffffffffff
        dddddddd11111111111cccccccbcccccccccc11cccccccc1111111cccccccccccc1111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbccfffffffffffff
        dddddddd11111111111ccccccccccccccccc111ccccccc1111b1111ccccccccccc1111111111111b1dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbccffffffffffffff
        dddddddddd111111111cccccccccccccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111b1dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcbffffffffffffff
        dddddddddd1111111111cccccccccccccccccccccccccc111111111cccccccccccbb11111111111b1db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbccfffffffffffffff
        dddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcffffffffffffff
        ddddddddd1d11111111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbcfffffffffffffff
        ddddddddd1d11b11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
        ddddddddd1d11b11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
        dddddddddddddbbd1bb111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffffffffffffffff
        dddddddddddddbbd1b1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
        ddddddddddddddbd1b11bbccccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
        ddddddddddddddbb1b11bbccccccccccccccccccccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffffffffffffffff
        dddddddddddddddb1b1db1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffffffffffffffff
        ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1111d1111bbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffffffffffffffff
        ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1b11d1111bbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffffcff
        ddddddddddddddddbb1b11cccccccccccccccccccccccccccccccccccccccccccccbbb111111bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccfffffffffffffffffff
        ddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbb111d111bbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcffffffffffffffffff
        ddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bb1111111bbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffcff
        ddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbb11111bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffffffff
        ddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bb11111bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffffffff
        dddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffffffff
        dbddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
        ddbddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11b11111bbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
        dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bb111bbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb1bbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
        dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffffffffffffffffffffffffff
        bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdfffffffffffffffffffffff
        bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbddfcbfdffffffffffffffffffffff
        bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbdffdffbcfffffffffffffffffffff
        bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcfffffff
        bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdfffffffffffffffffffffff
        bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcffffffffffffffffffffffff
        ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffcbff
        dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfffddf
        ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfffcff
        ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdffff
        dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffffffffffffffffffffffffff
        ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcffffffffffffffffcffffffffffffff
        bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcffffffffffffffffcfcffffff
        dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcffffff
        dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcffff
        ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffffffffffffffffffffffffff
        dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
        bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
        ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
        dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
        dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
        bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
        dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
        dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
        bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
        cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
        ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
        ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
        ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
        cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
        cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
        cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcfffffffffffffffffff
        ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffffffffffffffffffffffffff
        cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcffffffff
        cccccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcffffffff
        ccccccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccfffffffffffffffffffff
        cccccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddffffffffffffffffffffff
        cccccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbffffffffffffff
        ccfcccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
        cffcccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
        fcfffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
        fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
        fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
        ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
        fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
        `)
    PlasticWarriorsSplash = sprites.create(img`
        .............e222222e..........................2222222e........................................................e222222e....................................
        ..e2222222222222222222.....................e22222222222e..........222222222222222222e.........................2222222222...................................
        .222222222222222222222e.................e222222222222222c.......e222222222222222222222........................2222222222e..................................
        e2222222222222222222222222222e.e222222222222222222222222222222e.222222222222222222222222222e22222222222222222222222222222222222e222222222e.e22222222.......
        22222222222222255554222222222222222222222222222245555222222222222222222222222222222222222222222222222222222222222555542222222222222222222222222222222e.....
        222455555555422555542222222222222222222222245522455552222222222222245554245554245554222222222222222222222222222225555422222222222222222222222222222222e....
        2224555555555425555422222222222222222222245555222222222222222222222455552455552455522222222222222222222222222222222222222222222222222222222222222222222c...
        2224555422555545555424555555522245555554255555554555522455555522222255552555554555445555554225555455542555545554255554245555554245555455542255555554222ec..
        2224555422555545555424555555552555545555455555554555525555555552222245554555554555455555555425555555554555555555455554455555555445555555554555445555222ecc.
        2224555422555545555422222245554555544444245555224555545555245554222245555555555555222222555525555445554555544555455554555524555545555245554555444444222ecc.
        2224555555555425555424555555554555555554245555224555545555224442222225555555555555245555555525555445554555544555455554555524555545555245554555555554222eacc
        22245555555542255554255555555542555555554455552245555455552222222222245555555555544555555555255554222225555422222555545555245555455552222222555555554222acc
        22245554222222255554455542455544444245554455552245555455552455542222245555545555544555425555255554222225555422222555545555245555455552222224444245554222acc
        22245554222222245555555555555545555445554255555545555245555555522222225555425555524555555555255554222225555422222555544555555554455552222245555445552222acc
        222455542222222245554455554555425555555422255555455552245555552222e222455542555542255554555525555422222555542222255554245555554245555222222455555552222aacc
        222222222222222222222222222222222222222222222222222222222222222222a222222222222222222222222222222222222222222222222222222222222222222222222222222222222aacc
        e2222222222aae222222222222222222222222222222222222222222222222222aa222222222222222222222222222222222222222222222222222222222222222222222a2222222222222aaacc
        .e22222222aaaae222222222222222222222222222222222222222222222222eaaac2222222222222222222222222222222aa22222222aa222222222222222222222222aaa22222222222aaaacc
        ..ee2222aaaaaccce2222222222222ee2222222aaaae222222222eae22222eaaaaacce22222e22222aae2222222222222eaaaae2222eaaaae2222eae222222aae2222eaaaace2222222aaaaacc.
        ...cccaaaaaaccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaccccaaaaaaaaaaaaaaaaaaaaaacccccaaaaaaaaacc..
        ....cccccccccc...ccccaaaaaaacccaaaaaaaccccccccccaaaaaaaaaaaaccccccc....cccccccccccccccccccccaaaaaaacccccccccccccccccccaaaaaaaccaaaaaaacccccccccccccccccc...
        .....ccccccc.......ccccccccccccccccccccccccccccccccccccccccccccccc......cccccccccccccccccccccccccccccc...ccccccc...cccccccccccccccccccccc.....ccccccccc....
        ..................................................ccc..........................................c...........................................................
        `, SpriteKind.Logo)
    PlasticWarriorsSplash.setPosition(80, 48)
    pause(2000)
    color.startFade(color.originalPalette, color.Black, 500)
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
    PlasticWarriorsSplash.destroy()
    color.startFade(color.Black, color.originalPalette, 500)
    color.pauseUntilFadeDone()
    timer.debounce("Splash1", 2000, function () {
        LoadingAnimations.show_splash()
        pause(3000)
        LoadingAnimations.hide_splash()
    })
}
function DrawPlasticZombie (Health: number) {
    PlasticZombie = sprites.create(assets.image`PlasticZombie`, SpriteKind.Monster)
    UNFS_UniqueNumberForSprite += 1
    sprites.setDataNumber(PlasticZombie, "UNFS", UNFS_UniqueNumberForSprite)
    sprites.setDataNumber(PlasticZombie, "Health", Health)
    Monsters_Health = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    Monsters_Health.value = Health
    Monsters_Health.attachToSprite(PlasticZombie)
    PlasticZombie.follow(PlayerWarrior, randint(35, 75))
}
function Level__3__Jungle () {
    tiles.setCurrentTilemap(tilemap`Tilemap_Level-3 - The Jungle`)
    tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.stairWest)
    for (let index = 0; index < 10; index++) {
        DrawPlasticZombie(1)
        if (randint(0, 1) == 1) {
            tiles.placeOnRandomTile(PlasticZombie, assets.tile`myTile71`)
        } else {
            tiles.placeOnRandomTile(PlasticZombie, assets.tile`myTile72`)
        }
    }
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
    if (HasCompletedLvl2 = true) {
        Level__3__Jungle()
    } else {
        music.zapped.play()
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
    pause(2000)
})
function preSetBossPosition (x: number, y: number) {
    started = false
    ready = false
    offset = 0
    moveSpriteInTime(boss, x, y, 1)
}
function moveSpriteRandomFixedTime (sprite: Sprite, yLowerBound: number, outerBound: number, t: number) {
    moveSpriteInTime(sprite, randint(outerBound, scene.screenWidth() - outerBound), randint(outerBound, yLowerBound), t)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile87`, function (sprite, location) {
    LevelHomeTown()
})
function nonSpell2 () {
    for (let index32 = 0; index32 <= MAX - 1; index32++) {
        shootBulletFromSprite(boss, 60, 360 / MAX * index32 + offset)
        shootBulletFromSprite(boss, 100, 360 / MAX * (index32 + 0.5) + offset)
    }
}
function make_toolbar () {
    last_toolbar_select = 0
    DrawToolbar()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (HasCompletedGame = true) {
        Level__8__Shadow_Realm__Boss()
    } else {
        music.zapped.play()
        game.splash("You are not powerful enough to do this level", "Do the previous one first!")
        tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
    }
    pause(2000)
})
controller.combos.attachCombo("rA", function () {
    if (HasGameStarted == true) {
        projectileSprite = sprites.createProjectileFromSprite(assets.image`projectileSprite`, PlayerWarrior, 50, 0)
        projectileSprite.setKind(SpriteKind.PlayerShot)
    }
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
        . 2 a a a 2 . 
        2 2 c c c 2 2 
        2 c c 7 c c 2 
        6 c 7 7 7 c 6 
        b c 4 4 4 c b 
        e c c 4 c c e 
        e e c c c e e 
        . e 8 8 8 e . 
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
    tiles.setCurrentTilemap(tilemap`Level7_HauntedMansion`)
}
function enemyShootAimingPlayer (sprite: Sprite, speed: number, spread: number) {
    shootBulletFromSprite(sprite, speed, Math.atan2(PlayerWarrior.y - sprite.y, PlayerWarrior.x - sprite.x) * 57.3 + randint(0 - spread, spread))
}
function add_item (item_in_list: Inventory.Item[]) {
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
function SpawnNPCJhonny (cordsX: number, cordsY: number) {
    NPCJhonnyCitizen = sprites.create(assets.image`NPCJhonny`, SpriteKind.NPCJhonny)
    tiles.placeOnTile(NPCJhonnyCitizen, tiles.getTileLocation(cordsX, cordsX))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile53`, function (sprite, location) {
    console.log("Exited Level 2")
    HasCompletedLvl2 = true
    DestroySprites()
    LevelHomeTown()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`RuinsTile - 2 - Horizontal - Breakable0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile15`)
})
function InitDebugMode () {
    DungeonLevel = 8
}
function DrawLoadingScreenLegacy () {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`RuinsTile - 2 - Horizontal - Breakable`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile56`, function (sprite, location) {
    console.log("Exited Level 3")
    HasCompletedLvl3 = true
    DestroySprites()
    LevelHomeTown()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Level4-Exit`, function (sprite, location) {
    console.log("Exited Level 4")
    HasCompletedLvl4 = true
    DestroySprites()
    LevelHomeTown()
})
function Level__1__Ruins () {
    tiles.setCurrentTilemap(tilemap`level10`)
    tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.stairEast)
    for (let index = 0; index < 5; index++) {
        DrawPlasticZombie(1)
        tiles.placeOnRandomTile(PlasticZombie, sprites.dungeon.darkGroundCenter)
    }
}
// Overlaps for Dungeon Level Entry
// Level 1
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    // Level 2
    HasCompletedLvl1 = true
    DestroySprites()
    LevelHomeTown()
})
function LevelTheDeathGateHub () {
    DestroySprites()
    tiles.setCurrentTilemap(tilemap`DeathGateHub`)
    tiles.placeOnRandomTile(PlayerWarrior, sprites.dungeon.floorLight0)
}
let LoadingAnimation: Sprite = null
let LoadingTextSprite: TextSprite = null
let LoadingSprite: StatusBarSprite = null
let NPCJhonnyCitizen: Sprite = null
let speed = 0
let projectile: Sprite = null
let last_toolbar_select = 0
let ready = false
let SettingsMenu: miniMenu.MenuSprite = null
let PlasticWarriorsSplash: Sprite = null
let bossCanMove = false
let Players_Health: StatusBarSprite = null
let TraderNPC_Staff: Sprite = null
let TraderNPC_Hammer: Sprite = null
let TraderNPC_Sword: Sprite = null
let PlasticZombie: Sprite = null
let IsQualified = false
let offset = 0
let MAX = 0
let Monsters_Health: StatusBarSprite = null
let sagaSprite: Sprite = null
let scroll = false
let projectileSprite: Sprite = null
let boss: Sprite = null
let toolbar: Inventory.Toolbar = null
let triggerShop = false
let lifeBar: StatusBarSprite = null
let lifeBarPic: Image = null
let started = false
let PlayerWarrior: Sprite = null
let dy = 0
let dx = 0
let globalY = 0
let globalX = 0
let HasCompletedLvl7 = false
let HasGameStarted = false
let DungeonLevel = 0
let PlasticBottleIcon: Sprite = null
let all_labels: string[] = []
let all_items: Image[] = []
let myMenu: miniMenu.MenuSprite = null
let MenuOpen = false
let SoundPhase = 0
let ShowSaga = false
let SagaTimeSpan = 0
let triggerNPC = false
let bossLife = 0
let IsOverlapingNPCJhonny = false
let IsLoadingScreenVisible = false
let SettingsOpen = false
let IsOverlapingShopTiles = false
let UNFS_UniqueNumberForSprite = 0
let DebugMode = false
let HasCompletedLvl0 = false
let HasCompletedGame = false
let HasCompletedLvl6 = false
let HasCompletedLvl5 = false
let HasCompletedLvl4 = false
let HasCompletedLvl3 = false
let HasCompletedLvl2 = false
let HasCompletedLvl1 = false
let bossProgress = 0
let lifeBarProgress = 0
let item2 = null
let sagaImage: Image = null
let lineAdjust = 0
let star = null
let storyLines: string[] = []
let NecronWarlord = null
HasCompletedLvl0 = true
DebugMode = false
UNFS_UniqueNumberForSprite = 0
let CurrentLoadedDungeon = 1
HasCompletedLvl0 = true
IsOverlapingShopTiles = false
SettingsOpen = false
IsLoadingScreenVisible = false
IsOverlapingNPCJhonny = false
namespace SpriteKind {
    export const Star = SpriteKind.create()
    export const Messages = SpriteKind.create()
    export const AOE = SpriteKind.create()
    export const Sphere_Of_Influence = SpriteKind.create()
    export const Load2 = StatusBarKind.create()
}
let DeathMessages = [
"*Rage Incoming*",
"You died! Oh wait, you already know that!",
"Are you sure you want to respawn?",
"I forgot to say this: L"
]
bossLife = 48
triggerNPC = false
SagaTimeSpan = 34000
ShowSaga = false
DrawLoadingScreen()
timer.debounce("Loading", 5000, function () {
    color.startFade(color.Black, color.originalPalette)
    color.pauseUntilFadeDone()
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
    if (SoundPhase == 1) {
        Music.CatQuestVo1(songs.Ocean)
    } else if (SoundPhase == 2) {
        Music.CatQuestVo1(songs.Seaside_town)
    } else if (SoundPhase == 3) {
        Music.CatQuestVo1(songs.Tavern)
    } else if (SoundPhase == 4) {
        Music.CatQuestVo1(songs.Room)
    } else if (SoundPhase == 5) {
        Music.CatQuestVo1(songs.Town)
    } else if (SoundPhase == 6) {
        music.playMelody(music.convertRTTTLToMelody("mkombat:d=4,o=5,b=70:16a#,16a#,16c#6,16a#,16d#6,16a#,16f6,16d#6,16c#6,16c#6,16f6,16c#6,16g#6,16c#6,16f6,16c#6,16g#,16g#,16c6,16g#,16c#6,16g#,16d#6,16c#6,16f#,16f#,16a#,16f#,16c#6,16f#,16c#6,16c6"), 120)
    } else if (SoundPhase == 7) {
        music.playMelody(music.convertRTTTLToMelody("MissionImp:d=16,o=6,b=95:32d,32d#,32d,32d#,32d,32d#,32d,32d#,32d,32d,32d#,32e,32f,32f#,32g,g,8p,g,8p,a#,p,c7,p,g,8p,g,8p,f,p,f#,p,g,8p,g,8p,a#,p,c7,p,g,8p,g,8p,f,p,f#,p,a#,g,2d,32p,a#,g,2c#,32p,a#,g,2c,a#5,8c,2p,32p,a#5,g5,2f#,32p,a#5,g5,2f,32p,a#5,g5,2e,d#,8d"), 120)
    } else if (SoundPhase == 8) {
    	
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
