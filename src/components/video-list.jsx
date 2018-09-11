import React from "react";
import Video from "./video";

class VideoList extends React.Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.videos.map((video, index) => {
          return (
            <Video
              key={index}
              index={index}
              video={video}
              isActive={this.props.selectedVideo === index}
              handleVideoSelect={this.props.handleVideoSelect}
            />
          );
        })}
      </ul>
    );
  }
}

export default VideoList;
