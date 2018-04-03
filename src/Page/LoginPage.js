import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import './LoginPage.css';
class LoginPage extends Component{
  render(){
    return(

    <div className="back">
    <div className="wrapper">
      <div className="one">
      </div>
      <div className="two">
          <h2> Login </h2> 
        <input
          className="Form-control"
          type="text"
          placeholder="email"
        />
        <br/>
        <br/>
        <input 
          className="form-control"
          type="password"
          placeholder="password"
        />
        <br/>
        <br/>
        <button
          className="btn btn-primary"
          type="button"
          >
          <div className= "login1btn">
            login  
          </div>
          </button>
        <br/>
        <br/>
        <button
          className="btn btn-primary"
          type="button"
        >
          Sign up
          </button>
          <div className="divider"/>
        <button
          className="btn btn-primary"
          type="button"
        >
          forgot password 
          </button>
        <br/>
        <br/>
        </div>
      <div className="three">
      </div>
    </div>
    </div>

    )
  }
}
export default LoginPage;