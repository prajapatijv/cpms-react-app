import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import configureFontawsome from './components/shared/fontawsome'
import { HandleError } from './utility/handle-error'

import './stylesheets/custom.scss';
import './stylesheets/index.scss';

import configureStore from './configureStore'

import App from './App';

  
configureFontawsome()

const store = configureStore({})

window.React = React
window.store = store
window.addEventListener("error", (err) => HandleError(err.message, store.dispatch))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
