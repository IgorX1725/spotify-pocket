import {SET_IS_MOBILE} from '../constants/login'

const setIsMobile =(isMobile)=>{
    return {
        type: SET_IS_MOBILE,
        payload: {
            isMobile: isMobile
          }
    }
}

export{ setIsMobile }