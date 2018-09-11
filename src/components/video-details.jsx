import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="progress">
        <div
          className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
          style={{ width: "100%" }}
        />
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          allowFullScreen
        />
      </div>
      <div className="card mb-4">
        <div className="card-body bg-light">
          <a
            className="btn"
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
          >
            <h5 className="card-title text-dark">{video.snippet.title}</h5>
          </a>
          <p className="card-text">
            <a
              className="btn"
              href={`https://www.youtube.com/channel/${
                video.snippet.channelId
              }`}
              target="_blank"
            >
              {video.snippet.channelTitle}
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoDetail;
