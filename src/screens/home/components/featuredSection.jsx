import React, { Component } from "react";
import { Link } from "react-router-dom";

import ready from "../../../images/ready.webp";
import townships from "../../../images/township.webp";
import luxury from "../../../images/luxury.webp";
import affordable from "../../../images/affordable.webp";
import hour from "../../../images/hour.jpg";

class FeaturedSection extends Component {
  state = {};
  render() {
    return (
      <section className="featured">
        <div>
          <h2 className="h4">Featured Collections</h2>
          <p>Handpicked projects for you</p>
          <div className="flex">
            <Link to="/search?condition=move-in" className="flex-item card">
              <div>
                <img src={ready} alt="Ready to Move-In" />
                <h3>Ready to Move-In</h3>
                <p>Comfortable homes available for immediate use</p>
              </div>
            </Link>
            <Link to="/search?type=township" className="flex-item card">
              <div>
                <img src={townships} alt="Townships" />
                <h3>Townships</h3>
                <p>Redefining community living</p>
              </div>
            </Link>
            <Link to="/search?price=luxury" className="flex-item card">
              <div>
                <img src={luxury} alt="Luxury" />
                <h3>Luxury</h3>
                <p>Premium housing for the lifestyle-conscious</p>
              </div>
            </Link>
            <Link to="/search?type=hour" className="flex-item card">
              <div>
                <img src={hour} alt="Hour Ready" />
                <h3>Hour Ready</h3>
                <p>Premium housing for the lifestyle-conscious</p>
              </div>
            </Link>
            <Link to="/search?price=affordable" className="flex-item card">
              <div>
                <img src={affordable} alt="Affordable Homes" />
                <h3>Affordable Homes</h3>
                <p>Pocket-friendly homes</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedSection;
