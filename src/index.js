import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//if importing a file that we created, must write down the whole path
//if a library imported from npm, just need to refer to its name
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC-6asu_xhVnmz1heN69I3aPNLm9lUvpbw'
//this is the main App that we have running
class App extends Component {
  constructor(props){
  	super(props);

  	this.state = { 
  		videos: [],
  		selectedVideo: null
  	};
  	this.videoSearch('surfboards');
  }

  //this is a method to search for videos
  videoSearch(term){
	YTSearch({key: API_KEY, term: term}, (videos) => {
		this.setState({ 
			videos: videos,
			selectedVideo: videos[0] 
		});
		//es6 shortcut for this.setState({ videos: videos })
	});
  	
  }

  //this render method fires asynchronously
  render() {
	return ( 
	  <div>
		<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
		<VideoDetail video={this.state.selectedVideo} />
		<VideoList 
		  onVideoSelect={selectedVideo => this.setState({selectedVideo})  }	
		  videos={this.state.videos} />
	  </div>
	);
  }
}

//Take this component's generated HTML and put it on the page
// (in the DOM) 
//to make  an instance of a class, just wrap it in JSX components

ReactDOM.render(<App />, document.querySelector('.container'));
