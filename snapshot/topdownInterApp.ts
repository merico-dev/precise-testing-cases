import { Env } from '@helloworld/rn-common'

function topdownInterApp () {

    if (Env.isWM()) {
        wmHelper() // WM
    } else if (Env.isMT()) {
        mtHelper() // MT
    } else if (Env.isDP()) {
        dpHelper() // DP
    }
}

function wmHelper() {
    return 'wm task performed' // WM
}

function mtHelper() {
    return 'mt task performed' // MT
}

function dpHelper() {
    return 'dp task performed' // DP
}
