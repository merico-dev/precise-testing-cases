import { Env } from '@helloworld/rn-common'

function varIntraApp () {

    const isWM = Env.isWM()
    let val = ''

    if (isWM) {
        val = 'a' // WM
    } else {
        val = 'b' // MT, DP
    }

    return val
}
