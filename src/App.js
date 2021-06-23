import React, { Component } from 'react'; 

import ButtonAppBar from './components/AppNavBar';
import ContaintedButtons from './components/Button'; 
import FormPropsTextFields from './components/TextField'; 

import './App.css';

class MusicApp extends Component {
  constructor(props){
    super(props)

    this.state = {
      loggedIn: false
    }
  }

  handleLogin = () =>{
    if(this.state.loggedIn){
      this.setState({loggedIn: false})
    }else{
      this.setState({loggedIn: true})
    }
  }

  render(){
    return (
      <div>
        {this.state.loggedIn ?
        <h2> You successfully logged in</h2> : 
        <div className="App">
          <ButtonAppBar/>
          <FormPropsTextFields/>
          <ContaintedButtons clickToLogin={() => {this.handleLogin()}}/>
        </div>  
        }
      </div>
    )
  }
}

export default MusicApp;
