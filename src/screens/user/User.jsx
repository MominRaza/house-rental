import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { firestore } from "../../firebase_config";
import { useAuth } from "../../hooks/AuthContext";
import Progress from "./components/progress";
import Result from "./components/result";

export default function User() {
  const [error, setError] = useState("");
  const [properties, setProperties] = useState([]);
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

  const getProperties = () => {
    firestore.collection("properties").onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setProperties(documents);
    });
  };

  useEffect(() => {
    getProperties();
  }, []);

  console.log(imageUrls);

  return (
    <section className="user">
      <h1 className="h3">Profile</h1>
      <div className="card center">
        {error && (
          <div className="card b-danger">
            <div className="material-icons">error_outline</div>
            {error}
          </div>
        )}
        <div className="flex">
          {(imageUrls || currentUser.photoURL) && (
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
            {imageUrls || currentUser.photoURL ? (
              <div className="material-icons md-18">edit</div>
            ) : (
              "Upload Image"
            )}
          </label>
          {image && (
            <Progress
              file={image}
              setFile={setImage}
              setImageUrls={setImageUrls}
            />
          )}
        </div>
        <p className="details">
          <strong>Name:</strong> {currentUser.displayName}
        </p>
        <p className="details">
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p className="details">
          <strong>Number:</strong> {user && user.number}
        </p>
        <button className="btn danger logout icon-l" onClick={handleLogout}>
          <div className="material-icons md-18">logout</div>
          Log Out
        </button>
      </div>
      <h2 className="h4">My Listed Properties</h2>
      <div className="list results">
        {
          // eslint-disable-next-line
          properties.map((property) => {
            if (currentUser.uid === property.uid) {
              return <Result key={property["id"]} property={property} />;
            }
          })
        }
      </div>
    </section>
  );
}
