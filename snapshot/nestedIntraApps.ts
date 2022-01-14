import { Env } from '@helloworld/rn-common'

function nestedIntraApps () {
    let val = ''
    if (Env.isWM()) {
        if (Env.WM()) {
            val = 'a' // WM
        } else {
            val = 'b' // Empty
        }
    } else {
        if (Env.isMT()) {
            val = 'c' // MT
        } else {
            val = 'd' // DP
        }
    }
    return val
}
