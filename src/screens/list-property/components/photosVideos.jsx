import React, { Component } from "react";

class PhotosVideos extends Component {
  state = {};
  render() {
    return (
      <div className="card left">
        <p>Photo</p>
        <div className="flex">
          <label>
            <input type="file" name="photo" accept="image/*" />
          </label>
          <button className="btn primary sm">
            <i className="material-icons">add</i>
          </button>
        </div>
        <p>Video</p>
        <div className="flex">
          <label>
            <input type="file" name="video" accept="video/*" />
          </label>
          <button className="btn primary sm">
            <i className="material-icons">add</i>
          </button>
        </div>
        <div className="flex submit">
          <button type="submit" className="btn primary">
            List Property
          </button>
          <button className="btn secondary">Back</button>
        </div>
      </div>
    );
  }
}

export default PhotosVideos;
