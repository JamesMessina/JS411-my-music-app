import React, { Component } from 'react'; 

import ContaintedButtons from './components/Button'; 
import FormPropsTextFields from './components/TextField'; 
import Dashboard from './components/Dashboard'; 
import Signup from './components/Signup'; 
import SignupButton from './components/SignupButton'

import './App.css';

class MusicApp extends Component {
  constructor(props){
    super(props)

    this.state = {
      loggedIn: false,
      signedUp: false
    }
  }

  handleLogin = () =>{
    if(this.state.loggedIn){
      this.setState({loggedIn: false})
    }else{
      this.setState({loggedIn: true})
    }
  }

  handleSignup = () =>{
    if(this.state.signedUp){
      this.setState({signedUp: false})
    }else{
      this.setState({signedUp: true})
    }
  }

  render(){
    return (
      <div className="App">
          {this.state.loggedIn ?
          <Dashboard/> : 
            this.state.signedUp ? 
              <Signup/> :
                <div>
                  < FormPropsTextFields/>
                    <ContaintedButtons clickToLogin={() => {this.handleLogin()}}/>
                    <SignupButton clickToSignup={() => {this.handleSignup()}}/>
                </div>
          }
      </div>
    )
  }
}

export default MusicApp;
