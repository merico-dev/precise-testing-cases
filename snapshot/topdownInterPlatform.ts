import { Env } from '@helloworld/rn-common'

function topdownInterPlatform () {

    if (Env.isIOS()) {
        iOSHelper() // iOS
    } else {
        androidHelper() // Android
    }
}

function iOSHelper() {
    return 'iOS task performed' // iOS
}

function androidHelper() {
    return 'android task performed' // Android
}
