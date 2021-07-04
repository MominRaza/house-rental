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

  useEffect(() => {
    if (user && user.favourites) {
      setIsFavorite(user.favourites.includes(match.params["id"]));
    }
    // eslint-disable-next-line
  }, []);

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
      <div className="top-header">
        <h1 className="h4">
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
      </div>
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

      <h2 className="h3">Property details</h2>
      <div className="card property-detail rd-3 grid grid-laptop-3 grid-tablet-2 center">
        <div className="grid-item">
          <h3 className="h5">House Features</h3>
          {property.bhk}{" "}
          {parseInt(property.balcony)
            ? " with "
            : parseInt(property.bathroom)
            ? " with "
            : ""}
          {property.balcony === "0" ? "" : property.balcony + " Balcony"}
          {parseInt(property.balcony)
            ? parseInt(property.bathroom)
              ? " and "
              : ""
            : ""}
          {property.bathroom === "0" ? "" : property.bathroom + " Bathroom"}
        </div>
        <div className="grid-item">
          <h3 className="h5">Property Purpose</h3>
          <p>{property.propertyPurpose}</p>
        </div>
        <div className="grid-item">
          <h3 className="h5">Property type</h3>
          <p>{property.propertyType}</p>
        </div>
        <div className="grid-item">
          <h3 className="h5">Construction Status</h3>
          <p>{property.constructionStatus}</p>
        </div>
        <div className="grid-item">
          <h3 className="h5">Parking</h3>
          <p>{property.parking}</p>
        </div>
        <div className="grid-item">
          <h3 className="h5">Furnish Type</h3>
          <p>{property.furnishType}</p>
        </div>
        <div className="grid-item">
          <h3 className="h5">Area</h3>
          <p>{property.area} Sq-ft</p>
        </div>
      </div>
      <h2 className="h3">Property Perks</h2>
      <div className="card property-detail rd-3"></div>
      <h2 className="h3">Address</h2>
      <div className="card property-detail rd-3">
        <p>{property.city}</p>
        <p>{property.locality}</p>
        <p>{property.fflat}</p>
        <p>
          {property.floor} / {property.totalFloor}
        </p>
        <p>{property.building}</p>
        <div className="map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113525.16554900429!2d85.93170977987533!3d27.229777919537003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb8ca1c134290d%3A0x53a3e8776d17b360!2sHotel%20Sindhuli%20Inn!5e0!3m2!1sen!2sin!4v1625413110647!5m2!1sen!2sin"
            width="500"
            height="320"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <h2 className="h3">Book now</h2>
      <div className="card property-detail rd-3">
        <p>₹ {property.price}</p>
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
    </section>
  );
}
