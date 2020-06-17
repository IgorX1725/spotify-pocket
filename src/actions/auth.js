import auth from '../constants/auth'

export const authCallbackError = (errorMessage) => ({
    type: auth.AUTH_CALLBACK_ERROR,
    payload: errorMessage,
  })
  

  export const authCallbackSucess = (credentials) => ({
    type: auth.AUTH_CALLBACK_SUCCESS,
    payload: { ...credentials, isLogged: true }
  })

  export const authSetRedirect = (value) =>({
    type: auth.AUTH_SET_REDIRECT,
    payload: {redirect : value}
  })

  export const logout = () => ({
    type: auth.USER_LOGOUT,
    payload: {},
  })