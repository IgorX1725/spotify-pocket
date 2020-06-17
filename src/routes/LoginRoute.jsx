import React from 'react'
import {Redirect} from 'react-router-dom'
import Login from '../containers/Login'

import {useSelector} from 'react-redux'

const LoginRoute = ()=>{
    const {accessToken} = useSelector(state => state.auth)

    return accessToken ? <Redirect to="/dashboard" /> : <Login />
}

export default LoginRoute