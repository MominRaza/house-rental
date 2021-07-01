import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import Progress from "./components/progress";

export default function User() {
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrls, setImageUrls] = useState("");

  const { currentUser, user, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const imageChangeHandler = (e) => {
    let selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
      selectedImage = null;
    } else {
      setImage(null);
    }
  };

  console.log(currentUser);

  return (
    <section className="user">
      <h1 className="h3">Profile</h1>
      <div className="card">
        {error && (
          <div className="card b-danger">
            <div className="material-icons">error_outline</div>
            {error}
          </div>
        )}
        <div className="flex">
          {currentUser.photoURL && (
            <div className="uploaded-file">
              <img
                src={imageUrls || currentUser.photoURL}
                alt={currentUser.displayName}
              />
            </div>
          )}
          <label className="upload-file">
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={imageChangeHandler}
            />
            {currentUser.photoURL ? "Change Image" : "Upload Image"}
          </label>
          {image && (
            <Progress
              file={image}
              setFile={setImage}
              setImageUrls={setImageUrls}
            />
          )}
        </div>
        <p>
          <strong>Name:</strong> {currentUser.displayName}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p>
          <strong>Number:</strong> {user && user.number}
        </p>
        <button className="btn danger" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </section>
  );
}
