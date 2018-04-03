import React , { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Page/Home';
import LoginPage from '../Page/LoginPage';
const listyle = {
  float: 'left'
};
class Navitem extends Component {
  render(){
    return(    
     <Router>
      <div>
        <ul>
          <li><Link to={'/'}>Login</Link></li>
          <li><Link to={'/Home'}>Home</Link></li>      
        </ul>
        <hr />
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/Home' component={Home} />
        </Switch>
        </div>
     </Router>

    );
  }
}
export default Navitem;
