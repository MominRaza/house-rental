import React, { Component } from "react";
import { Link } from "react-router-dom";

import ready from "../../../images/ready.webp";
import townships from "../../../images/hotels.webp";
import luxury from "../../../images/farmhouse.webp";
import affordable from "../../../images/affordable.webp";
import hour from "../../../images/hour.webp";

class FeaturedSection extends Component {
  state = {};
  render() {
    return (
      <section className="featured">
        <div>
          <h2 className="h4">Featured Collections</h2>
          <p>Handpicked projects for you</p>
          <div className="flex">
            <Link to="/search?type=hour" className="flex-item card">
              <div>
                <img src={hour} alt="Hour Ready" />
                <h3>Hour Ready</h3>
                <p>Enjoy perks of metered time.</p>
              </div>
            </Link>
            <Link to="/search?condition=move-in" className="flex-item card">
              <div>
                <img src={ready} alt="Ready to Move-In" />
                <h3>Ready to Move-In</h3>
                <p>Homes ready to use</p>
              </div>
            </Link>
            <Link to="/search?type=township" className="flex-item card">
              <div>
                <img src={townships} alt="Hotels" />
                <h3>Hotels</h3>
                <p>Relaxation like never before</p>
              </div>
            </Link>
            <Link to="/search?price=luxury" className="flex-item card">
              <div>
                <img src={luxury} alt="Farmhouse" />
                <h3>Farmhouse</h3>
                <p>Excellent places to spend weekends</p>
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
