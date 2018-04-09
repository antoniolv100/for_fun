import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import './Search.css'
class Search extends Component {
  constructor(){
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      Search: ''
    };
  }
    handleData(Data){
      this.setState({
        Search: Data
      });
    }
 
  render (){
    return(
      <div>
      <div className="Searchflex">
      <SearchBar handlersFromParent={this.handleData}/>
      </div>
      <div className="Searchflex1">
      <SearchResult Search={this.state.Search}/>
      </div>
      </div>
    );
  }
}
export default Search;