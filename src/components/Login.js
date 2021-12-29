import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
 
import FormPropsTextFields from './TextField'; 


import '../../src/App.css'

class Login extends Component {
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

  render(){
    return (
      <div className="App">
          <div>
              <Link to="/"> Welcome Page</Link>
              <FormPropsTextFields/>
              <Link to="/dashboard">Login</Link><br></br>
              <Link to="/signup">Sign Up</Link>
          </div>
      </div>
    )
  }
}

export default Login;