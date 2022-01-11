import { Env, doSomething, doSomethingElse } from '@helloworld/rn-common'

function bottomupInterPlatform () {

    const platformType = getPlatformType()

    if (platformType == 10000) {
        doSomething()
    } else {
        doSomethingElse()
    }
}

function getPlatformType() {
    if (Env.isIOS()) {
        return 10000
    } else {
        return 20000
    }
}
