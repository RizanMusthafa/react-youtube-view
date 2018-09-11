import React, { Component } from "react";

import SearchBar from "./components/search-bar";
import Header from "./components/header";
import VideoList from "./components/video-list";
import VideoDetails from "./components/video-details";

import yts from "youtube-api-v3-search";

const API_KEY = "AIzaSyAkbXpj3FL_zQdsuCzzW2Ga61glcSID23s";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: 0
  };
  constructor(props) {
    super(props);
    this.getSearchResults("ReactJs");
  }

  getSearchResults(q) {
    yts(API_KEY, { q, part: "snippet", type: "video" }).then(response => {
      this.setState({ videos: response.items });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <SearchBar
            getSearchResults={q => {
              this.getSearchResults(q);
            }}
          />
          <div className="row body-row">
            <div className="col-md-7">
              <VideoDetails
                video={this.state.videos[this.state.selectedVideo]}
              />
            </div>
            <div className="col-md-5">
              <VideoList
                videos={this.state.videos}
                selectedVideo={this.state.selectedVideo}
                handleVideoSelect={selectedVideo => {
                  this.setState({ selectedVideo });
                }}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
