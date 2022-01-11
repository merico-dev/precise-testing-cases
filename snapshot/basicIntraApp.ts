import { Env } from '@helloworld/rn-common'

function basicIntraApp () {
    let scheme = ''

    if (Env.isWM()) {
        scheme = 'x'
    } else if (Env.isMT()){
        scheme = 'y'
    } else if (Env.isDP()) {
        scheme = 'z'
    }

    return scheme
}
