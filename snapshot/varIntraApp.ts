import { Env } from '@helloworld/rn-common'

function varIntraApp () {

    const isWM = Env.isWM()
    let val = ''

    if (isWM) {
        val = 'a'
    } else {
        val = 'b'
    }

    return val
}
