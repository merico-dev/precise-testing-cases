import { Env } from '@helloworld/rn-common'

function onelineIntraPlatform () {
    return Env.isIOS() ? 'a.png' : 'b.png'
}
