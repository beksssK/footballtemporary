import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import Admin from "./containers/Admin/Admin";
import Players from "./containers/Players/Players";
import SinglePlayer from "./containers/SinglePlayer/SinglePlayer";
import Staff from "./containers/Staff/Staff";
import Login from "./containers/Login/Login";
import {useSelector} from "react-redux";

const ProtectedRoute = ({isAllowed, ...props}) => (
    isAllowed ? <Route {...props}/> : <Redirect to='/login'/>
);

const App = () => {
    const user = useSelector(state => state.users.user);
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/contacts' exact component={Contact}/>
                <ProtectedRoute isAllowed={user && user.role === 'admin'} path='/admin' exact component={Admin}/>
                <Route path='/players' exact component={Players}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/staff' exact component={Staff}/>
                <Route path='/players/:id' exact component={SinglePlayer}/>
            </Switch>
        </Layout>
    );
};

export default App;
