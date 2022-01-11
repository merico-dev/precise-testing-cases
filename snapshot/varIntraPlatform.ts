import { Env, doSomething, doSomethingElse } from '@helloworld/rn-common'

function varIntraPlatform () {
    const isIOS = Env.isIOS()

    if (isIOS) {
        doSomething()
    } else {
        doSomethingElse()
    }
}
