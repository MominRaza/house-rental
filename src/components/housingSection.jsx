import React, { Component } from "react";
import { Link } from "react-router-dom";

import payRent from "../images/payRent.svg";
import rentAgreement from "../images/rentAgreement.svg";
import movers from "../images/movers.svg";
import tenantVerification from "../images/tenantVerification.svg";
import furniture from "../images/furniture.svg";
import homeInteriors from "../images/homeInteriors.svg";
import propertyManagement from "../images/propertyManagement.svg";
import solarRooftop from "../images/solarRooftop.svg";

class HousingSection extends Component {
  state = {};
  render() {
    return (
      <section className="housing">
        <h2 className="h4">Housing Edge</h2>
        <p>The most rewarding destination for all home-related services.</p>
        <div className="flex">
          <Link to="#" className="flex-item card">
            <img src={payRent} alt="" />
            <h3>Pay Rent</h3>
            <p>Pay your rent using Credit Card and enjoy rewards</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={rentAgreement} alt="" />
            <h3>Rent Agreement</h3>
            <p>India's only online service with digital signing</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={movers} alt="" />
            <h3>Packers &amp; Movers</h3>
            <p>5-star rated home shifting service for smooth move-ins</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={tenantVerification} alt="" />
            <h3>Tenant Verification</h3>
            <p>Authentic tenant verification at a click</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={furniture} alt="" />
            <h3>Rental Furniture</h3>
            <p>Curated furniture to suit your home needs. Upto 50% discount</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={homeInteriors} alt="" />

            <h3>Home Interiors</h3>
            <p>Latest Home Interior Design Solutions</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={propertyManagement} alt="" />
            <h3>Property Management</h3>
            <p>End to end services for landlords</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={solarRooftop} alt="" />
            <h3>Solar Rooftop</h3>
            <p>Innovative residential solar solution</p>
          </Link>
        </div>
      </section>
    );
  }
}

export default HousingSection;
