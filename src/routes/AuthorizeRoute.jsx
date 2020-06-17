import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { authCallbackError, authCallbackSucess, authSetRedirect } from '../actions';

import { getInfoFromUrlHash } from '../modules/url';

import { Authorize } from '../containers';

const AuthorizeRoute = ({redirect, dispatch}) => {

  useEffect(() => {

    const urlHash = window.location.hash

    const hashData = getInfoFromUrlHash(urlHash)

    if (hashData.error) {
      dispatch(authCallbackError(hashData.error))
    }else{
      dispatch(authCallbackSucess(hashData));
    }
    
    setTimeout(
      () => dispatch(authSetRedirect(true)),
      3000)
  },[])

    if(redirect){
      dispatch(authSetRedirect(false))
    return  <Redirect to={'/dashboard'} /> 

    }

  return <Authorize />;
}

export default connect(state => state.auth )(AuthorizeRoute)