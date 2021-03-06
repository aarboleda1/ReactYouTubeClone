import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
//if importing a file that we created, must write down the whole path
//if a library imported from npm, just need to refer to its name
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDEPPKB5Ln2vXVA-K1rkG92h6Z-M7BpXvk'

//this is the main App that we have running
class App extends Component {
  constructor(props){
  	super(props);

  	this.state = { 
  		videos: [],
  		selectedVideo: null
  	};
  	this.videoSearch('');
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
  //_.debounce is a lodash method that takes a function and only lets it be called every 300 seconds
	const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

	return ( 
	  <div>
		<SearchBar onSearchTermChange={videoSearch} />
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
