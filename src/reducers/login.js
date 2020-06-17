import {SET_IS_MOBILE} from '../constants/login'

const INITIAL_STATE ={

    isMobile: false,
  
}

function reducer(store = INITIAL_STATE, action){

    if(action.type === SET_IS_MOBILE){
        
        return {...store,...action.payload}
    }

    return store
}

export default reducer