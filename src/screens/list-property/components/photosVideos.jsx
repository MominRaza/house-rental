import React, { useState } from "react";
import Progress from "./progress";

export default function PhotosVideos() {
  const [image, setImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imageChangeHandler = (e) => {
    let selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
    } else {
      setImage(null);
    }
  };

  const removeFile = (storageRef) => {
    storageRef
      .delete()
      .then(() => {
        let urls = imageUrls;
        urls.filter((url) => url.storageRef != storageRef);
        setImageUrls(urls);
      })
      .catch((error) => {});
  };

  const getImageUrl = (url) => {
    let urls = imageUrls;
    urls.push(url);
    setImageUrls(urls);
    console.log(imageUrls);
  };

  return (
    <div className="card left">
      <p>Photo</p>
      <div className="flex">
        {imageUrls.map((url) => (
          <div className="uploaded-file">
            <img src={url.url} />
            <button
              className="btn btn-o danger sm icon-o"
              onClick={() => removeFile(url.storageRef)}
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
          <Progress file={image} setFile={setImage} getImageUrl={getImageUrl} />
        )}
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
