import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from '../../store'

import Routes from '../../routes'

import './App.scss';

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <div className="app" data-testid="app">
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </div>
        </PersistGate>
    </Provider>
);

export default App;
