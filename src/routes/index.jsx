import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import AuthorizeRoute from './AuthorizeRoute'
import DashboardRoute from './DashboardRoute'
import LoginRoute from './LoginRoute'
import {PrivateRoute} from '../containers/'

const Routes = ()=>{
    return (
    <Switch>
        <Route exact path='/' component={LoginRoute} />

        <Route exact path='/authorize' component={AuthorizeRoute} />

        <PrivateRoute path='/dashboard' comp={DashboardRoute} />

        <Route path="*" exact render={()=> <Redirect to="/" />} />

    </Switch>)
}

export default Routes