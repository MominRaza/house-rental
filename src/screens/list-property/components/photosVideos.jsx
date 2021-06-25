import React, { Component } from "react";

class PhotosVideos extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="flex">
          <label>
            Photo
            <input type="file" name="photo" accept="image/*" />
          </label>
          <button className="btn primary sm">
            <i className="material-icons">add</i>
          </button>
        </div>
        <div className="flex">
          <label>
            Video
            <input type="file" name="video" accept="video/*" />
          </label>
          <button className="btn primary sm">
            <i className="material-icons">add</i>
          </button>
        </div>
        <button className="btn secondary">Back</button>
        <button type="submit" className="btn primary">
          List Property
        </button>
      </div>
    );
  }
}

export default PhotosVideos;
