import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserHistory} from "history";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import {connectRouter, ConnectedRouter, routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import App from './App';
import * as serviceWorker from './serviceWorker';
import footballersReducer from "./store/reducers/footballersReducer";
import {Provider} from "react-redux";
import usersReducer from "./store/reducers/usersReducer";
import {loadFromLocalStorage, localStorageMiddleware} from "./store/localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    allPlayers: footballersReducer,
    users: usersReducer
});

const middleware = [
    thunk,
    routerMiddleware(history),
    localStorageMiddleware
];
const enhancers = composeEnhancers(applyMiddleware(...middleware));
const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
