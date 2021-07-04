import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../../../hooks/AuthContext";

export default function Result({ property }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addToFavourites, removeFromFavourites, user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user && user.favourites) {
      setIsFavorite(user.favourites.includes(property.id));
    }
    // eslint-disable-next-line
  }, []);

  function handleFavotite() {
    setIsLoading(true);
    if (!user) {
      return history.push("/favourites");
    }
    if (isFavorite) {
      removeFromFavourites(property.id).then(() => {
        setIsFavorite(!isFavorite);
        setIsLoading(false);
      });
    } else {
      addToFavourites(property.id).then(() => {
        setIsFavorite(!isFavorite);
        setIsLoading(false);
      });
    }
  }

  return (
    <div className="list-item">
      <div className="property-img">
        <img
          src={property.imageUrls[0].url}
          className="rd-3"
          alt={
            property["propertyType"] +
            " for " +
            property["want"] +
            " in " +
            property["city"]
          }
        />
      </div>
      <div className="ts-wraper">
        <div className="list-item price">
          <div className="ts-wraper">
            <p className="price h6">₹ {property["price"]}</p>
          </div>
          <div className="trailing">
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
        </div>
        <p className="type">
          <b>{property["propertyType"]}</b>
          <span>
            {" "}
            for {property["want"]} in {property["city"]}
          </span>
        </p>
        <p className="address">
          {property["city"] +
            " " +
            property["building"] +
            " " +
            property["locality"] +
            " " +
            property["fflat"] +
            " " +
            property["floor"] +
            "/" +
            property["totalFloor"]}
        </p>
        <p className="type">
          {property["bhk"]} - {property["constructionStatus"]}
        </p>
        <p className="details">
          {property["details"]}
          <Link to={"/property/" + property["id"]}>Read more</Link>
        </p>
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
    </div>
  );
}
