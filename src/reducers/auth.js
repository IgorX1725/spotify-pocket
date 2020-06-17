import auth from '../constants/auth'

const INITIAL_STATE ={

    accessToken:"",
    errorMessage: "",
    expirationTime: "",
    expiresIn: "",
    isLogged : false,
    tokenType: "",
    redirect: false
  
}

function reducer(store = INITIAL_STATE, action){

    if(action.type === auth.AUTH_CALLBACK_ERROR ){
        store = {...store,
             errorMessage: action.payload,
             isLogged: false
            }
    }

    if(action.type === auth.AUTH_CALLBACK_SUCCESS ){
        store = {...store,
            accessToken: action.payload.access_token,
            tokenType: action.payload.token_type,
            expiresIn: action.payload.expires_in,
            isLogged: action.payload.isLogged,
            }
    }

    if(action.type === auth.AUTH_SET_REDIRECT){
        store = {...store,
            redirect: action.payload.redirect
        }
    }

    if(action.type === auth.USER_LOGOUT){
        store = {
            ...INITIAL_STATE
        }
    }

    return store
}

export default reducer