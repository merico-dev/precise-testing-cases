import { Env } from '@helloworld/rn-common'

function onelineIntraApp () {
    // return Env.isWM() ? 'a.png' : (Env.isMT() ? 'b.png' : 'c.png')
    return Env.isWM() ? 
            'a.png' : // WM
                      (Env.isMT() ? 
                            'b.png' : // MT
                            'c.png' // DP
                      )
}
