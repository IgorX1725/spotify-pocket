import React, { useEffect } from 'react'
import { useParams ,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

import {
  getPlaylistTracksRequest,
  getPlaylistTracksSuccess,
  getPlaylistTracksFailed,
  logout,
  authCallbackError
} from '../actions'

import { endpoints } from '../modules/endpoints'
import { getContentNameById } from '../modules/helpers'
import { request, sanitizeUrl } from '../modules/request'

import { Tracks } from '../containers'

const { getPlaylistTracks } = endpoints

const TracksRoute = ({ path, auth, content, dispatch}) => {

  const { playlistId } = useParams();

  useEffect(() => {
    const requestOptions = {
      ...getPlaylistTracks.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(getPlaylistTracksRequest());

    request(sanitizeUrl(getPlaylistTracks.url,{ playlistId }), requestOptions)
      .then(data => dispatch(getPlaylistTracksSuccess(data)))
      .catch(error => {
        if (error === 401) {
          dispatch(logout());
          dispatch(authCallbackError("sua sessão expirou ..."))
          return <Redirect to="/" />
        }

        dispatch(getPlaylistTracksFailed(error));
      });

  }, [auth, playlistId, dispatch]);

  return (
    <Tracks
      categoryName={getContentNameById(playlistId, content.playlists)}
      data={content.tracks}
      isLoading={content.status === 'running'}
      path={path}
    />
  );
}

export default connect(state => state)(TracksRoute)