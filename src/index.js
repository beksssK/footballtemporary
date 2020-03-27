import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import App from './App';
import * as serviceWorker from './serviceWorker';
import footballersReducer from "./store/reducers/footballersReducer";
import {Provider} from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    allPlayers: footballersReducer,
});
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
