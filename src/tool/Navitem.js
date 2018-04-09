import React , { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Page/Home';
import LoginPage from '../Page/LoginPage';
import Search from '../Page/Search';
const listyle = {
  float: 'left'
};
class Navitem extends Component {
  render(){
    return(    
     <Router>
      <div>
        <div>
          <ul className = "Navflex" >
            <li><Link to={'/'}>Login</Link></li>
            <li><Link to={'/Home'}>Home</Link></li> 
            <li><Link to={'/Search'}>Search</Link></li>     
          </ul>
        </div>
        <hr />
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Search' component={Search} />
        </Switch>
        </div>
     </Router>

    );
  }
}
export default Navitem;
