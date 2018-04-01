import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class route extends React.Component{
  render(){
    return(
      <Router>
      
      </Router>
    );
  }
}

render(<LoginPage />, document.getElementById('root'));
