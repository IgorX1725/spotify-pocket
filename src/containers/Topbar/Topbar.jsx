import React from 'react';
import {Link, Redirect} from 'react-router-dom'
import Logo from '../../components/Logo'
import {connect} from 'react-redux'
import {logout} from '../../actions/auth'

import './Topbar.scss';

const Topbar = ({name, thumb,dispatch}) => {

  const onLogoutHanddle = ()=>{
    dispatch(logout())
    return <Redirect to="/"/>
  }
    
    return (<header className="topbar" data-testid="topbar">
        <div className="container">
        <Link to="/dashboard">
          <Logo />
        </Link>

        <div className="user">
          <span className="user__name">{name}</span>

          <figure className="user__thumb">
            <img src={thumb} alt={`foto de perfil de ${name}`} />
          </figure>
          <button onClick={onLogoutHanddle} className="user__logout">sair</button>
        </div>
      </div>
    </header>)};

export default connect(state=>state.user)(Topbar);
