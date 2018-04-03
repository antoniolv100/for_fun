import React, { Component } from 'react';
import Navitem from './Navitem';
class NavBar extends Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-primary">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle-collapsed" data-toggle="collapsed">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span> 
            <span className="icon-bar"></span>  
            </button> 
            <a className="navbar-brand" href="#">MemeBook</a>
          </div> 
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">
              { <Navitem/> }
            </ul>
          </div> 
        </nav>            
      </div>
    );
  }
}

export default NavBar;