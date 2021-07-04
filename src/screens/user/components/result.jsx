import React, { Component } from "react";
import { firestore } from "../../../firebase_config";
import { Link } from "react-router-dom";

class Result extends Component {
  state = {};

  render() {
    function handleDelete(id) {
      firestore
        .collection("properties")
        .doc(id)
        .delete()
        .then(() => console.log("Deleted"))
        .catch((err) => console.log(err));
    }

    const property = this.props.property;
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
              <button
                className="btn danger icon-l"
                onClick={() => handleDelete(property.id)}
              >
                <div className="material-icons md-18">delete</div>Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
