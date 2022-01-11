import { Env, doSomething, doSomethingElse } from '@helloworld/rn-common'

function bottomupInterApp () {

    const appType = getAppType()

    if (appType == 10000) {
        doSomething()
    } else {
        doSomethingElse()
    }
}

function getAppType() {
    if (Env.isMT()) {
        return 10000
    } else if (Env.isWM()) {
        return 20000
    } else {
        return 30000
    }
}
