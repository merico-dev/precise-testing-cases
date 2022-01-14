import { Env } from '@helloworld/rn-common'

function nestedIntraPlatforms () {
    let val = ''
    if (Env.isIOS()) {
        if (Env.isIOS()) {
            val = 'a' // iOS
        } else {
            val = 'b' // Empty
        }
    } else {
        val = 'c' // Android
    }
    return val
}
