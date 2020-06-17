import React from 'react';
import PropTypes from 'prop-types';

import './Loading.scss';

const Loading = ({ text }) => (
  <div data-testid="loading">
    <div className="loading">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>

    <p className="loading__text">
      {text}
    </p>
  </div>
);

Loading.propTypes = {
  text: PropTypes.string,
}

Loading.defaultProps = {
  text: 'Carregando...',
}


export default Loading;
