import React, { Component } from "react";

class HousingSection extends Component {
  state = {};
  render() {
    return (
      <section className="housing">
        <h2 className="h4">Housing Edge</h2>
        <p>The most rewarding destination for all home-related services.</p>
        <div className="flex">
          <Link to="#" className="flex-item card">
            <img src="./images/payRent.svg" />
            <h3>Pay Rent</h3>
            <p>Pay your rent using Credit Card and enjoy rewards</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src="./images/rentAgreement.svg" />
            <h3>Rent Agreement</h3>
            <p>India's only online service with digital signing</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src="./images/movers.svg" />
            <h3>Packers &amp; Movers</h3>
            <p>5-star rated home shifting service for smooth move-ins</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src="./images/tenantVerification.svg" />
            <h3>Tenant Verification</h3>
            <p>Authentic tenant verification at a click</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src="./images/furniture.svg" />
            <h3>Rental Furniture</h3>
            <p>Curated furniture to suit your home needs. Upto 50% discount</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src="./images/homeInteriors.svg" />

            <h3>Home Interiors</h3>
            <p>Latest Home Interior Design Solutions</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src="./images/propertyManagement.svg" />
            <h3>Property Management</h3>
            <p>End to end services for landlords</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src="./images/solarRooftop.svg" />
            <h3>Solar Rooftop</h3>
            <p>Innovative residential solar solution</p>
          </Link>
        </div>
      </section>
    );
  }
}

export default HousingSection;
