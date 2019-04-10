import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import configureFontawsome from './components/shared/fontawsome'
import { HandleError } from './utility/status'

import './stylesheets/custom.scss';
import './stylesheets/index.scss';

import configureStore from './configureStore'
import { AppConfig, Env } from './AppConfig'

import App from './App';


configureFontawsome()

const store = configureStore({})

if (AppConfig.ENV !== Env.Production) {
    console.log(AppConfig.ENV)
    window.React = React
    window.store = store
}

window.addEventListener("error", (err) => HandleError(err.message, store.dispatch))

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreContext.Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
