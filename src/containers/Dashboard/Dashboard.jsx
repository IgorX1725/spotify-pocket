import React from 'react';
import {connect} from 'react-redux'

import Player from '../Player';

import './Dashboard.scss';

const Dashboard = ({playerHeight, children }) => (

    <div className="dashboard" data-testid="dashboard" style={{paddingBottom: `${playerHeight}px`}}>
        {children}
        <Player />
    </div>);

export default connect(state =>state.content)(Dashboard);

