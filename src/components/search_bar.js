import React, { Component } from 'react';
//es6 version of a class
class SearchBar extends Component {
  constructor(props) {
  	super(props);
  	//properties we want to store on the state
  	//right now, state is an empy string inside the search bar
  	this.state = { term: ' i am the starting value' };
  }

  render() {
  	//this runs when there is a change in the inputbar
  	//use this.setState to change state never assign it 
  	return ( 
  	<div>

  	<input
  	  //value is equivalent to the text in the search bar	
  	  value={this.state.term}
  	  onChange={event => this.setState({term: event.target.value})} />
  	</div>
  	);
  }
  //this is an eventHandler 
  

}

export default SearchBar;