import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/contacts' exact component={Contact}/>
            </Switch>
        </Layout>
    );
};

export default App;
