import React, { Component } from "react";

import result1 from "../../../images/result1.webp";
import user1 from "../../../images/user1.jpg";

class Result extends Component {
  state = {};
  render() {
    return (
      <div className="list-item">
        <img src={result1} alt="Result 1" />
        <div>
          <div className="list-item">
            <div className="ts-wraper">
              <p className="price h6">12.0 L</p>
            </div>
            <div className="trailing">
              <i className="material-icons">favorite_outline</i>
            </div>
          </div>
          <p className="type">
            Residencial Ploat <span>for sale in Habuapur</span>
          </p>
          <p className="address">Rudram city, Habuapur, Lucknow</p>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            expedita mollitia ...
            <a href="#">Read more</a>
          </p>
          <div className="list-item">
            <div className="leading">
              <img src={user1} alt="User 1" className="avatar sm" />
            </div>
            <div className="ts-wraper">
              <p className="title">Sachin Rawat</p>
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
