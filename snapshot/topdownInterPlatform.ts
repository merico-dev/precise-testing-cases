import { Env } from '@helloworld/rn-common'

function topdownInterPlatform () {

    if (Env.isIOS()) {
        iOSHelper()
    } else {
        androidHelper()
    }
}

function iOSHelper() {
    return 'iOS task performed'
}

function androidHelper() {
    return 'android task performed'
}
