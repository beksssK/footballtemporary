import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ConnectedRouter} from "connected-react-router";
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";

import store, {history} from "./store/configureStore";

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
