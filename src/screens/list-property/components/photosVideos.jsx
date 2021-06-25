import React, { Component } from "react";

class PhotosVideos extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <label>
          Photo
          <input type="file" name="photo" />
        </label>
        <button className="btn primary sm">
          <i className="material-icons">add</i>
        </button>
        <label>
          Video
          <input type="file" name="photo" />
        </label>
        <button className="btn primary sm">
          <i className="material-icons">add</i>
        </button>
        <button className="btn secondary">Back</button>
        <button type="submit" className="btn primary">
          List Property
        </button>
      </div>
    );
  }
}

export default PhotosVideos;
