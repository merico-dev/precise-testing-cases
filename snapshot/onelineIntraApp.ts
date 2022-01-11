import { Env } from '@helloworld/rn-common'

function onelineIntraApp () {
    return Env.isWM() ? 'a.png' : (Env.isMT() ? 'b.png' : 'c.png')
}
