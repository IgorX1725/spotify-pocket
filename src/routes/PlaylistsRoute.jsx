import React, {useEffect} from 'react'
import {useParams, Redirect} from 'react-router-dom'
import {endpoints} from '../modules/endpoints'
import {connect} from 'react-redux'
import {getCategoryPlaylistRequest, getCategoryPlaylistSuccess, logout, authCallbackError } from '../actions'
import {request, sanitizeUrl} from '../modules/request'
import {getContentNameById} from '../modules/helpers'
import Playlists from '../containers/Playlists'

const PlaylistsRoute = ({auth,dispatch, path, content})=>{


    const { categoryId } = useParams()

    useEffect(  () => {
        const requestOptions = {
          ...endpoints.getCategoryPlaylists.options,
          headers: { 'Authorization': `Bearer ${auth.accessToken}` }
        }

        dispatch(getCategoryPlaylistRequest())

        const respose = request(sanitizeUrl(endpoints.getCategoryPlaylists.url,{ categoryId }), requestOptions)
        
        respose
        .then(data => dispatch(getCategoryPlaylistSuccess(data)))
        .catch(error => {
          if (error === 401) {
            dispatch(logout())
            dispatch(authCallbackError("sua sessão expirou ..."))
            return <Redirect to="/" />
          }
        })

    },[auth, dispatch])

   return  <Playlists
      categoryId={categoryId}
      categoryName={getContentNameById(categoryId, content.categories)}
      data={content.playlists}
      isLoading={content.status === 'running' && content.playlists.length === 0}
      path={path}
    />
}

export default connect(state=>state)(PlaylistsRoute)