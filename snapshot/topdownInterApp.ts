import { Env } from '@helloworld/rn-common'

function topdownInterApp () {

    if (Env.isWM()) {
        wmHelper()
    } else if (Env.isMT()) {
        mtHelper()
    } else if (Env.isDP()) {
        dpHelper()
    }
}

function wmHelper() {
    return 'wm task performed'
}

function mtHelper() {
    return 'mt task performed'
}

function dpHelper() {
    return 'dp task performed'
}
