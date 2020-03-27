import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import Admin from "./containers/Admin/Admin";
import Players from "./containers/Players/Players";
import SinglePlayer from "./containers/SinglePlayer/SinglePlayer";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/contacts' exact component={Contact}/>
                <Route path='/admin' exact component={Admin}/>
                <Route path='/players' exact component={Players}/>
                <Route path='/players/:id' exact component={SinglePlayer}/>
            </Switch>
        </Layout>
    );
};

export default App;
