import { Env, doSomething, doSomethingElse } from '@helloworld/rn-common'

function basicIntraPlatform () {

    if (Env.isIOS()) {
        doSomething()
    } else {
        doSomethingElse()
    }
}
