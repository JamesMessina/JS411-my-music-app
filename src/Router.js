//external imports 
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

//internal imports

import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login'
import WelcomeScreen from './components/Home';

const checkAuth = () =>{
    if(1===1){
        return true; 
    }else{
        return false; 
    }
}

const ProtectedRoute = ({component: Component, ...rest}) =>{
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}

const Router = () =>{
    return (
        <Switch>
            <Route exact path="/" component={WelcomeScreen}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <ProtectedRoute path="/dashboard" component={Dashboard}/>
        </Switch>
    )
}

export default Router; 