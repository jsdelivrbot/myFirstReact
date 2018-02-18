import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import VideoNext from './components/video_next';

const API_KEY = 'AIzaSyD5EQCoHKTGr0lZxN_j_-mJtSFt4Bjz_fA';

class App extends Component {

	//initializing constructor
	constructor(props) {
		super(props);

		this.state = {
		    videos: [],
            selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	//video search function
	videoSearch(term) {
	    YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
                videos: videos,
                selectedVideo: videos[0],
				nextVideo: videos[1]
			});
		});
    }

    //render function
	render() {
		const debouncedVideoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={debouncedVideoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
				<VideoNext video={this.state.nextVideo} />
				<VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));