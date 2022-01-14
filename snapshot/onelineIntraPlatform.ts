import { Env } from '@helloworld/rn-common'

function onelineIntraPlatform () {
    // return Env.isIOS() ? 'a.png' : 'b.png'
    return Env.isIOS() ?
        'a.png' : // iOS
        'b.png' // Android
}
