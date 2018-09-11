import React from "react";

const Video = props => {
  const videoSnip = props.video.snippet;
  const activeClass = props.isActive ? " active" : "";
  return (
    <li
      onClick={() => {
        props.handleVideoSelect(props.index);
      }}
      className={"list-group-item list-group-item-action media" + activeClass}
    >
      <div className="row">
        <div className="col-4">
          <img
            src={videoSnip.thumbnails.default.url}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-8">
          <h6>{videoSnip.title}</h6>
          <small>
            <p className="text-muted">{videoSnip.channelTitle}</p>
          </small>
        </div>
      </div>
    </li>
  );
};

export default Video;
