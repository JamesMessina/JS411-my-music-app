import React, { Component } from 'react'; 

import ButtonAppBar from './components/AppNavBar';
import ContaintedButtons from './components/Button'; 
import FormPropsTextFields from './components/TextField'; 
import Dashboard from './components/Dashboard'; 

import './App.css';

class MusicApp extends Component {
  constructor(props){
    super(props)

    this.state = {
      loggedIn: false,
      online: false,
    }
  }

  handleLogin = () =>{
    if(this.state.loggedIn){
      this.setState({loggedIn: false})
    }else{
      this.setState({loggedIn: true})
    }
  }

  handleSwitchClick = () =>{
    if(this.state.online){
      this.setState({online: false})
    }else{
      this.setState({online: true})
    }
  }

  render(){
    return (
      <div className="App">
          <ButtonAppBar/>
            {this.state.loggedIn ?
            <Dashboard clickToGoOnline={() => {this.handleSwitchClick()}}/> : 
          <div>
            <FormPropsTextFields/>
            <ContaintedButtons clickToLogin={() => {this.handleLogin()}}/>
          </div>  
            }
      </div>
    )
  }
}

export default MusicApp;
