import React, { Component } from "react";

class Result extends Component {
  state = {};
  render() {
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
              <p className="price h6">{property["price"]}</p>
            </div>
            <div className="trailing">
              <i className="material-icons">favorite_outline</i>
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
            <a href={"/property/" + property["id"]}>Read more</a>
          </p>
          <div className="list-item user">
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
                className="btn primary"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
