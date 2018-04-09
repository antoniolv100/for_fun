import React, { Component } from 'react';
import { render } from 'react-dom';
import NavBar from './tool/Header';

class App extends React.Component{
  render(){
    return(
    <NavBar/>

    );
  }
}

render(<App />, document.getElementById('root'));
