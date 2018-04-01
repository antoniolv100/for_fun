import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import './LoginPage.css';
class LoginPage extends Component{
  render(){
    return(

    <div class="back">
    <div class="wrapper">
      <div class="one">
      </div>
      <div class="two">
          <h2> Login </h2> 
        <input
          class="Form-control"
          type="text"
          placeholder="email"
        />
        <br/>
        <br/>
        <input 
          class="form-control"
          type="password"
          placeholder="password"
        />
        <br/>
        <br/>
        <button
          class="btn btn-primary"
          type="button"
          >
          <div class= "login1btn">
            login  
          </div>
          </button>
        <br/>
        <br/>
        <button
          class="btn btn-primary"
          type="button"
        >
          Sign up
          </button>
          <div class="divider"/>
        <button
          class="btn btn-primary"
          type="button"
        >
          forgot password 
          </button>
        <br/>
        <br/>
        </div>
      <div class="three">
      </div>
    </div>
    </div>

    )
  }
}
export default LoginPage;