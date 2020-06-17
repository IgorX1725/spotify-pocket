import React, {useEffect} from 'react'

import {Switch, useRouteMatch, Redirect} from 'react-router-dom';

import {connect} from 'react-redux'

import WelcomeBox from '../components/WelcomeBox'
import {
    Dashboard,
    Topbar,
    Categories,
    PrivateRoute
} from '../containers'
import PlaylistsRoute from '../routes/PlaylistsRoute'
import TracksRoute from './TracksRoute'

import {endpoints} from '../modules/endpoints'
import { request } from '../modules/request'

import {getUserSuccess, getCategoriesSuccess, getCategoriesRequest, logout, authCallbackError} from '../actions'

const DashboardRoute = ({auth, content, user, dispatch})=>{

    useEffect(  () => {
        const requestOptions = {
          ...endpoints.getUserProfile.options,
          headers: { 'Authorization': `Bearer ${auth.accessToken}` }
        }
        const respose = request(endpoints.getUserProfile.url,requestOptions)
        
        respose
        .then(data => dispatch(getUserSuccess(data)))
        .catch(error => {
          if (error === 401) {
            dispatch(logout())
            dispatch(authCallbackError("sua sessão expirou ..."))
            return <Redirect to="/" />
          }
        })
    },[auth, dispatch])

    useEffect( ()=>{

        const requestOptions = {
            ...endpoints.getCategories.options,
            headers: { 'Authorization': `Bearer ${auth.accessToken}` }
          }

          dispatch(getCategoriesRequest())

          const respose = request(endpoints.getCategories.url,requestOptions)
          respose
          .then(data => dispatch(getCategoriesSuccess(data)))
          .catch(error => {
            if (error === 401) {
              dispatch(logout());
              return <Redirect to="/" />
            }
          })

    },[auth.accessToken, dispatch, user.isLogged])

    const {path, url} = useRouteMatch()

    return(
    <Dashboard>
        <Topbar/>
        
        <Switch>
        <PrivateRoute exact path={`${path}`}>
            <WelcomeBox name={user.name} />
          <Categories
            isLoading={content.status === 'running' && content.categories.length === 0}
            data={content.categories}
            url={url}
          />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId`} >
            <PlaylistsRoute path={path} />
        </PrivateRoute>          
       
        <PrivateRoute exact path={`${path}/:categoryId/:playlistId`}>
            <TracksRoute />
        </PrivateRoute>

      </Switch>
    </Dashboard>
    )
}

export default connect(state=>state)(DashboardRoute)