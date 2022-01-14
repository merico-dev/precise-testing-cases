import { Env, doSomething, doSomethingElse } from '@helloworld/rn-common'

function bottomupInterPlatform () {

    const platformType = getPlatformType()

    if (platformType == 10000) {
        doSomething() // iOS
    } else {
        doSomethingElse() // Android
    }
}

function getPlatformType() {
    if (Env.isIOS()) {
        return 10000 // iOS
    } else {
        return 20000 // Android
    }
}
