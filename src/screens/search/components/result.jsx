import React, { Component } from "react";

class Result extends Component {
  state = {};
  render() {
    const property = this.props.property;
    return (
      <div className="list-item">
        <img src={property["propertyImageUrl"]} alt="Result 1" />
        <div>
          <div className="list-item">
            <div className="ts-wraper">
              <p className="price h6">{property["price"]}</p>
            </div>
            <div className="trailing">
              <i className="material-icons">favorite_outline</i>
            </div>
          </div>
          <p className="type">
            <b>{property["type"]}</b>
            <span>
              {" "}
              for {property["want"]} in {property["city"]}
            </span>
          </p>
          <p className="address">{property["address"]}</p>
          <p className="details">
            {property["details"]}
            <a href={"/property/" + property["id"]}>Read more</a>
          </p>
          <div className="list-item">
            <div className="leading">
              <img
                src={property["userImageUrl"]}
                alt={property["userName"]}
                className="avatar sm"
              />
            </div>
            <div className="ts-wraper">
              <p className="title">{property["userName"]}</p>
            </div>
            <div className="trailing">
              <button className="btn sm">Contact</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
