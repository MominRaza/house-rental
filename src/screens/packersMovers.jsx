import React, { Component } from "react";

import packer1 from "../images/packer1.jpg";

class PackersMovers extends Component {
  state = {};
  render() {
    return (
      <section className="packers">
        <h1 className="h3">Packers &amp; Movers</h1>
        <div className="list-item">
          <img src={packer1} alt="" />
          <div>
            <h2 className="h4">The Packers Movers</h2>
            <p className="s1">Relation is easy now</p>
            <p className="ratings">
              <span>Ratings:</span>
              <span>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star_half</i>
                <i className="material-icons">star_outline</i>
              </span>
              <span>(21)</span>
            </p>
            <button className="btn primary">Read more</button>
            <button className="btn secondary">Add ratings</button>
          </div>
        </div>
        <div className="list-item">
          <img src={packer1} alt="" />
          <div>
            <h2 className="h4">The Packers Movers</h2>
            <p className="s1">Relation is easy now</p>
            <p className="ratings">
              <span>Ratings:</span>
              <span>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star_half</i>
                <i className="material-icons">star_outline</i>
              </span>
              <span>(21)</span>
            </p>
            <button className="btn primary">Read more</button>
            <button className="btn secondary">Add ratings</button>
          </div>
        </div>
        <div className="list-item">
          <img src={packer1} alt="" />
          <div>
            <h2 className="h4">The Packers Movers</h2>
            <p className="s1">Relation is easy now</p>
            <p className="ratings">
              <span>Ratings:</span>
              <span>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star_half</i>
                <i className="material-icons">star_outline</i>
              </span>
              <span>(21)</span>
            </p>
            <button className="btn primary">Read more</button>
            <button className="btn secondary">Add ratings</button>
          </div>
        </div>
        <div className="list-item">
          <img src={packer1} alt="" />
          <div>
            <h2 className="h4">The Packers Movers</h2>
            <p className="s1">Relation is easy now</p>
            <p className="ratings">
              <span>Ratings:</span>
              <span>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star_half</i>
                <i className="material-icons">star_outline</i>
              </span>
              <span>(21)</span>
            </p>
            <button className="btn primary">Read more</button>
            <button className="btn secondary">Add ratings</button>
          </div>
        </div>
      </section>
    );
  }
}

export default PackersMovers;
