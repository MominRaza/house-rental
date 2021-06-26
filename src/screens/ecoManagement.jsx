import React, { Component } from "react";

import eco1 from "../images/eco1.png";

class EcoManagement extends Component {
  state = {};
  render() {
    return (
      <section className="packers">
        <h1 className="h3">Eco Management</h1>
        <div className="list-item">
          <img src={eco1} alt="" />
          <div>
            <h2 className="h4">Eco-Management</h2>
            <p className="s1">
              Teaching you and your staff to establish and maintain native plant
              communities
            </p>
            <p className="contact-d">Contact Details</p>
            <p className="contact">
              <a href="tel:+916776436549">
                <i className="material-icons">phone</i>+91 67764 36549
              </a>
              <a href="mailto:emailme@mycompany.com">
                <i className="material-icons">email</i>emailme@mycompany.com
              </a>
              <span>
                <i className="material-icons">place</i>My City 430089 My Country
              </span>
            </p>
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

export default EcoManagement;
