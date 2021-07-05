import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 



class Signup extends Component {
  constructor(props){
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      userData: []
    }
  }



  handleChange = (e) =>{
    console.log(e.target.name); 
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault(); 

    this.setState({userData: [...this.state.userData, this.state.firstName, this.state.lastName, this.state.gender]})

    this.setState({
      firstName: "",
      lastName: "",
      gender: "",
    })
  }

  render(){
    return (
      <div className="App">
      <Link to="/login">Back to Login</Link>
      <header className="App-header">
        <p>New Member</p>
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <label>Name:</label>
          <input name="firstName" placeholder="first name" type="text" value={this.state.firstName} onChange={e => {this.handleChange(e)}}></input>
          <input name="lastName" placeholder="last name" type="text" value={this.state.lastName} onChange={e => {this.handleChange(e)}}></input>
          <select name="gender" onClick={(e) => {this.handleChange(e)}}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="submit"></input>
        </form>
      </header>
      </div>
    )
  }
}

export default Signup;