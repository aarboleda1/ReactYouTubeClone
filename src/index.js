import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component. This should produce some HTML
const App = () =>{
	return <div>Hi!</div>;
}

//Take this component's generated HTML and put it on the page
// (in the DOM) 
//to make  an instance of a class, just wrap it in JSX components

ReactDOM.render(<App />, document.querySelector('.container'));
