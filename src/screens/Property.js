import React, { useEffect, useState } from "react";
import { matchPath, useLocation, useHistory } from "react-router-dom";

import { useAuth } from "../hooks/AuthContext";

import { firestore } from "../firebase_config";

export default function Property() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const match = matchPath(useLocation().pathname, { path: "/property/:id" });
  const [property, setProperty] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [video, setVideo] = useState(true);
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
    setVideo(false);
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
            {video && property.videoUrl.length ? (
              <video src={property.videoUrl[0].url} controls />
            ) : (
              <img src={imageUrl || property.imageUrls[0].url} alt="" />
            )}
          </div>
          <div className="all-images">
            {property.videoUrl.length !== 0 && (
              <div>
                <video
                  src={property.videoUrl[0].url}
                  onClick={() => setVideo(true)}
                />
                <i className="material-icons md-36">play_circle</i>
              </div>
            )}
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
      {property.want !== "Sell" && (
        <>
          <h2 className="h3">Property Perks</h2>
          <div className="card property-detail rd-3">
            <h3 className="h4">Rent Includes</h3>
            <div className="grid grid-laptop-4 grid-tablet-2 center">
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.rentIncludes1 ? "c-success" : "c-danger")
                  }
                >
                  {property.rentIncludes1 ? "check" : "close"}
                </i>
                Electricity Bill
              </div>
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.rentIncludes2 ? "c-success" : "c-danger")
                  }
                >
                  {property.rentIncludes2 ? "check" : "close"}
                </i>
                Water Bill
              </div>
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.rentIncludes3 ? "c-success" : "c-danger")
                  }
                >
                  {property.rentIncludes3 ? "check" : "close"}
                </i>
                Parking Bill
              </div>
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.rentIncludes4 ? "c-success" : "c-danger")
                  }
                >
                  {property.rentIncludes4 ? "check" : "close"}
                </i>
                Maintenance Bill
              </div>
            </div>
            <h3 className="h4">Property Perks</h3>
            <div className="grid grid-laptop-5 grid-tablet-3 center">
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.propertyPerks1 ? "c-success" : "c-danger")
                  }
                >
                  {property.propertyPerks1 ? "check" : "close"}
                </i>
                Inverter
              </div>
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.propertyPerks2 ? "c-success" : "c-danger")
                  }
                >
                  {property.propertyPerks2 ? "check" : "close"}
                </i>
                A.C.
              </div>
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.propertyPerks3 ? "c-success" : "c-danger")
                  }
                >
                  {property.propertyPerks3 ? "check" : "close"}
                </i>
                T.V.
              </div>
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.propertyPerks4 ? "c-success" : "c-danger")
                  }
                >
                  {property.propertyPerks4 ? "check" : "close"}
                </i>
                Water Purifier
              </div>
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.propertyPerks5 ? "c-success" : "c-danger")
                  }
                >
                  {property.propertyPerks5 ? "check" : "close"}
                </i>
                Cooler
              </div>
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.propertyPerks6 ? "c-success" : "c-danger")
                  }
                >
                  {property.propertyPerks6 ? "check" : "close"}
                </i>
                Fan
              </div>
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.propertyPerks7 ? "c-success" : "c-danger")
                  }
                >
                  {property.propertyPerks7 ? "check" : "close"}
                </i>
                Light
              </div>
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.propertyPerks8 ? "c-success" : "c-danger")
                  }
                >
                  {property.propertyPerks8 ? "check" : "close"}
                </i>
                Refrigerator
              </div>
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.propertyPerks9 ? "c-success" : "c-danger")
                  }
                >
                  {property.propertyPerks9 ? "check" : "close"}
                </i>
                Table
              </div>
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.propertyPerks10 ? "c-success" : "c-danger")
                  }
                >
                  {property.propertyPerks10 ? "check" : "close"}
                </i>
                Chair
              </div>
              <div className="grid-item">
                <i
                  className={
                    "material-icons " +
                    (property.propertyPerks11 ? "c-success" : "c-danger")
                  }
                >
                  {property.propertyPerks11 ? "check" : "close"}
                </i>
                Cupboard
              </div>
            </div>
          </div>
        </>
      )}
      <h2 className="h3">Address</h2>
      <div className="card property-detail rd-3 grid grid-tablet-2">
        <div className="grid-item">
          <h3 className="h5">{property.city}</h3>
          <p>{property.fflat}</p>
          <p>
            {property.floor} / {property.totalFloor}
          </p>
          <p>{property.building}</p>
          <p>{property.locality}</p>
        </div>
        <div className="grid-item map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113525.16554900429!2d85.93170977987533!3d27.229777919537003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb8ca1c134290d%3A0x53a3e8776d17b360!2sHotel%20Sindhuli%20Inn!5e0!3m2!1sen!2sin!4v1625413110647!5m2!1sen!2sin"
            width="100%"
            height="320"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <h2 className="h3">Book now</h2>
      <div className="card property-detail rd-3">
        <h3 className="h4">
          {property.want === "Sell" ? "Buy" : property.want} only for ₹{" "}
          {property.price}
        </h3>
        {property.want === "Sell" ? (
          <>
            <h4 className="h6">Price Range</h4>
            <p>{property.priceRange}</p>
          </>
        ) : (
          <>
            <h4 className="h6">Rent mode</h4>
            <p>
              {property.rentMode === "Both"
                ? "Both Online and Offline"
                : property.rentMode}
            </p>
          </>
        )}
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
