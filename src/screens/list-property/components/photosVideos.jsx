import React, { useState } from "react";
import Progress from "./progress";
import { storage } from "../../../firebase_config";
import { Link } from "react-router-dom";

export default function PhotosVideos(props) {
  const property = props.propertyData;

  const [image, setImage] = useState(null);
  const [imageUrls, setImageUrls] = useState(property.imageUrls || []);
  const [video, setVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState(property.videoUrl || []);
  const [error, setError] = useState("");

  const imageChangeHandler = (e) => {
    let selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
      selectedImage = null;
    } else {
      setImage(null);
    }
  };

  const videoChangeHandler = (e) => {
    let selectedVideo = e.target.files[0];
    if (selectedVideo) {
      setVideo(selectedVideo);
      selectedVideo = null;
    } else {
      setVideo(null);
    }
  };

  const removeImage = (fileName) => {
    storage
      .ref(fileName)
      .delete()
      .then(() => {
        let urls = imageUrls;
        urls = urls.filter((url) => url.fileName !== fileName);
        setImageUrls(urls);
      })
      .catch((error) => {});
  };
  const removeVideo = (fileName) => {
    storage
      .ref(fileName)
      .delete()
      .then(() => {
        let urls = videoUrl;
        urls = urls.filter((url) => url.fileName !== fileName);
        setVideoUrl(urls);
      })
      .catch((error) => {});
  };

  const getImageUrl = (url) => {
    let urls = imageUrls;
    urls.push(url);
    setImageUrls(urls);
  };
  const getVideoUrl = (url) => {
    let urls = videoUrl;
    urls.push(url);
    setVideoUrl(urls);
  };

  return (
    <div className="card left">
      <p>Photos</p>
      {error && (
        <div className="card b-danger center">
          <i className="material-icons">error_outline</i>
          {error}
        </div>
      )}
      <div className="flex">
        {imageUrls.map((url) => (
          <div className="uploaded-file">
            <img src={url.url} alt="" />
            <button
              className="btn btn-o danger sm icon-o"
              onClick={() => removeImage(url.fileName)}
            >
              <div className="material-icons md-18">delete</div>
            </button>
          </div>
        ))}

        <label className="upload-file">
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={imageChangeHandler}
          />
          Upload Image
        </label>

        {image && (
          <Progress file={image} setFile={setImage} getFileUrl={getImageUrl} />
        )}
      </div>
      <p>Video</p>
      <div className="flex">
        {videoUrl.map((url) => (
          <div className="uploaded-video">
            <video src={url.url} controls></video>
            <button
              className="btn btn-o danger sm icon-o"
              onClick={() => removeVideo(url.fileName)}
            >
              <div className="material-icons md-18">delete</div>
            </button>
          </div>
        ))}
        {videoUrl.length === 0 && (
          <label className="upload-file">
            <input
              type="file"
              name="video"
              accept="video/*"
              onChange={videoChangeHandler}
            />
            Upload Video
          </label>
        )}
        {video && (
          <Progress file={video} setFile={setVideo} getFileUrl={getVideoUrl} />
        )}
      </div>
      <div className="flex submit">
        <button className="btn primary success" onClick={props.listProperty}>
          List Property
        </button>
        <button
          className="btn primary"
          onClick={() => {
            if (imageUrls.length) {
              props.addPropertyData({
                imageUrls,
                videoUrl,
              });
              setError("");
            } else {
              setError("Upload at least one image!");
            }
          }}
        >
          Save
        </button>
        <Link to="/list-property/address" className="btn secondary">
          Back
        </Link>
      </div>
    </div>
  );
}
