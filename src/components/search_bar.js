import React, { Component } from 'react';
//es6 version of a class

//this is an example of a class based component;
class SearchBar extends Component {
  constructor(props) {
  	super(props);
  	//properties we want to store on the state
  	//right now, state is an empy string inside the search bar
    //in a classbase component set your state inside the constructor  
  	this.state = { term: '' };
  }

  render() {
  	//this runs when there is a change in the inputbar
  	//use this.setState to change state never assign it 
  	return ( 
  	<div className="search-bar">
    	<input
    	  //value is equivalent to the text in the search bar	
    	  value={this.state.term}
    	  //changing the value of the input
        //whenever content of input changes, it calls this method with new input value
        onChange={event => this.onInputChange( event.target.value )} />
    	</div>
  	);
  }
  //this is an eventHandler 
  

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term)
  }

}

export default SearchBar;