import { Env } from '@helloworld/rn-common'

function basicIntraApp () {
    let scheme = ''

    if (Env.isWM()) {
        scheme = 'x' // WM
    } else if (Env.isMT()){
        scheme = 'y' // MT
    } else if (Env.isDP()) {
        scheme = 'z' // DP
    }

    return scheme
}
