import React, { Component } from 'react';
class SearchResult extends Component {
  render (){
    return (
      <div>
    you search for : {this.props.Search}
      </div>
    );
  }
}
export default SearchResult;