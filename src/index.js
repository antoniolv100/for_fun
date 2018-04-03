import React, { Component } from 'react';
import { render } from 'react-dom';
import LoginPage from './Page/LoginPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './tool/Header';
import Home from './Page/Home';

class App extends React.Component{
  render(){
    return(
     <div>
     <NavBar/>
     <LoginPage/>
     </div>
    );
  }
}

render(<App />, document.getElementById('root'));
