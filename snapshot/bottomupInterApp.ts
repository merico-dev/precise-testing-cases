import { Env, doSomething, doSomethingElse } from '@helloworld/rn-common'

function bottomupInterApp () {

    const appType = getAppType()

    if (appType == 10000) {
        doSomething() // MT
    } else {
        doSomethingElse() // WM, DP
    }
}

function getAppType() {
    if (Env.isMT()) {
        return 10000 // MT
    } else if (Env.isWM()) {
        return 20000 // WM
    } else {
        return 30000 // DP
    }
}
