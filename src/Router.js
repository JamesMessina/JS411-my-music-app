//external imports 
import React from 'react';
import { Switch, Route } from 'react-router';

//internal imports

import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import MusicApp from './App';  
import WelcomeScreen from './components/Home';

const Router = () =>{
    return (
        <Switch>
            <Route exact path="/" component={WelcomeScreen}/>
            <Route path="/login" component={MusicApp}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    )
}

export default Router; 