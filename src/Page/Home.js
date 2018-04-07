import React, { Component } from 'react';
import './Home.css';
import Post from './Post';
import NewFeed from './NewFeed';
import Tool from './Tool';
import AvaterPhoto from './AvaterPhoto';
class Home extends Component {
  render() {
    return (
      <div>
      <div className = "container-1">
        <div className = "box1">
        <AvaterPhoto/>
        </div>
        <div className = "box2">
        <Post/>
        </div>
      </div>
      <div className = "container-2">
        <div className = "box21">
        <Tool/>
        </div>
        <div className = "box22">
        <NewFeed/>
        </div>
      </div>
    </div>
    );
  }
}
export default Home;