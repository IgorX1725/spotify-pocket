import React, {useEffect, useState} from 'react';
import Ink from 'react-ink'
import {debounce} from 'lodash'
import {connect} from 'react-redux'
import {NotificationContainer} from 'react-notifications';
import createNotification from '../../modules/notification'
import {authCallbackError} from '../../actions/auth'

import Logo from '../../components/Logo'

import backgroundImageMobile from '../../assets/images/app-intro-1.jpg';
import backgroundImageDesktop from '../../assets/images/app-intro-2.jpg';

import {endpoints} from '../../modules/endpoints'

import './Login.scss';
import 'react-notifications/dist/react-notifications.css'

const Login = ({errorMessage, dispatch}) => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    if(errorMessage){
      createNotification('info',errorMessage)
      dispatch(authCallbackError(""))
    }
  },[])

  const onResizeHandler = (e) => {
    const { innerWidth } = e.target;

    if (innerWidth <= 768) {
        setIsMobile(true)

        return 
    }
      setIsMobile(false)

  }

  useEffect(() => {
    window.addEventListener('resize', debounce(onResizeHandler, 250));

    return () => {
      window.removeEventListener('resize',  debounce(onResizeHandler));
    }
  })

  const screenWidth = window.innerWidth;

return (<main
     className="login"
      data-testid="login"
      style={{backgroundImage: `url(${(isMobile || screenWidth <=768) ? backgroundImageMobile : backgroundImageDesktop})`}}
    >
        <div className="container">
            <Logo />
            <h2 className="login__microcopy">
                Não toca a música inteira,
                <strong>
                     mas toca o seu <span role="img" className="login__microcopy__heart" aria-label="Coração">❤️</span>
                </strong>
            </h2>
            <NotificationContainer/>
            <a href={endpoints.getAuthorization.url}
             className="login__auth-button">
                Entrar com Spotify
                <Ink />
            </a>
        </div>
    </main>);
}

export default connect(state => state.auth)(Login)
