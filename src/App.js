import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import Admin from "./containers/Admin/Admin";
import Players from "./containers/Players/Players";

const App = () => {
    console.log('checking commit');
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/contacts' exact component={Contact}/>
                <Route path='/admin' exact component={Admin}/>
                <Route path='/players' exact component={Players}/>
            </Switch>
        </Layout>
    );
};

export default App;
