import React, { Component } from 'react';
import './SearchBar.css'
class SearchBar extends Component {
  render (){
    return(
      <div>
        <div className="wrap">
          <div className="search">
            <input type="text"  className="searchTerm" placeholder="What are you looking for?" id="search"/>
               <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button> 
          </div>
        </div>
      </div>  
    );
  }
}
export default SearchBar;