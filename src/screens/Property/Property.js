import React, { useEffect, useState } from "react";
import { matchPath, useLocation, useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/AuthContext";

import { firestore } from "../../firebase_config";

export default function Property() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const match = matchPath(useLocation().pathname, { path: "/property/:id" });
  const [property, setProperty] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const history = useHistory();

  const { addToFavourites, removeFromFavourites, user } = useAuth();

  function handleFavotite() {
    setIsLoading(true);
    if (!user) {
      return history.push("/favourites");
    }
    if (isFavorite) {
      removeFromFavourites(match.params["id"]).then(() => {
        setIsFavorite(!isFavorite);
        setIsLoading(false);
      });
    } else {
      addToFavourites(match.params["id"]).then(() => {
        setIsFavorite(!isFavorite);
        setIsLoading(false);
      });
    }
  }

  const getNews = () => {
    firestore
      .collection("properties")
      .doc(match.params["id"])
      .onSnapshot((snap) => {
        setProperty(snap.data());
      });
  };

  function handleImageChange(url) {
    setImageUrl(url);
  }

  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="property">
      <h1 className="h3">
        <b>{property["propertyType"]}</b>
        <span>
          {" "}
          for {property["want"]} in {property["city"]}
        </span>
      </h1>
      <button
        className="btn btn-t danger"
        onClick={handleFavotite}
        disabled={isLoading}
      >
        <i className="material-icons">
          {isFavorite ? "favorite" : "favorite_outline"}
        </i>
      </button>
      {property.imageUrls && (
        <div className="card property-image">
          <div className="main-image">
            {property.videoUrl.length ? (
              <p>{property.videoUrl}</p>
            ) : (
              <img src={imageUrl || property.imageUrls[0].url} alt="" />
            )}
          </div>
          <div className="all-images">
            {property.videoUrl.length !== 0 && <p>{property.videoUrl}</p>}
            {property.imageUrls.map((image) => (
              <img
                key={image.url}
                src={image.url}
                alt=""
                onClick={() => handleImageChange(image.url)}
              />
            ))}
          </div>
        </div>
      )}
      <h2 className="h3">Address</h2>
      <div className="card">
        <p>{property.city}</p>
        <p>{property.locality}</p>
        <p>{property.fflat}</p>
        <p>
          {property.floor} / {property.totalFloor}
        </p>
        <p>{property.building}</p>
      </div>
      <h2 className="h3">Book now</h2>
      <div className="card">
        <p>{property.price}</p>
        <p>{property.rentMode}</p>
        <p>{property.priceRange}</p>
        <p>{property.constructionStatus}</p>
        <div className="list-item user-details">
          <div className="leading">
            <img
              src={property["userImageUrl"]}
              alt={property["userName"]}
              className="avatar md"
            />
          </div>
          <div className="ts-wraper">
            <p className="title">{property["userName"]}</p>
          </div>
          <div className="trailing">
            <a
              href={"tel:" + property["userContact"]}
              className="btn primary icon-l"
            >
              <div className="material-icons md-18">call</div> Contact
            </a>
          </div>
        </div>
      </div>
      <h2 className="h3">Property details</h2>
      <div className="card">
        {property.bhk} with {property.balcony} Balcony and {property.bathroom}{" "}
        Bathroom
        <p>{property.propertyPurpose}</p>
        <p>{property.parking}</p>
        <p>{property.furnishType}</p>
        <p>{property.area} Sq-ft</p>
      </div>
    </section>
  );
}
