import React from 'react';
import Loading from '../../components/Loading'

import backgroundImage from '../../assets/images/app-intro-1.jpg';

import './Authorize.scss';

const Authorize = () => {
  return (<div className="callback" style={{backgroundImage: `url(${backgroundImage})`}} data-testid="callback">
      <Loading text="Autenticando..."/>
    </div>);
}

export default Authorize;

