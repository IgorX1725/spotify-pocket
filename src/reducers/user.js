import user from '../constants/user'
const INITIAL_STATE ={

    email: "",
    errorMessage:"",
    name: "",
    status: "",
    thumb: ""
  
}

function reducer(store = INITIAL_STATE, action){

    if(action.type === user.GET_USER_SUCCESS){
        store = {...store, ...action.payload}
    }

    if(action.type === user.USER_LOGOUT){
        
    }

    return store
}

export default reducer