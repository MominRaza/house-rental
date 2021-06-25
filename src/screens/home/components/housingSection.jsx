import React, { Component } from "react";
import { Link } from "react-router-dom";

import payRent from "../../../images/payRent.svg";
import rentAgreement from "../../../images/rentAgreement.svg";
import movers from "../../../images/movers.svg";
import tenantVerification from "../../../images/tenantVerification.svg";
import furniture from "../../../images/furniture.svg";
import homeInteriors from "../../../images/homeInteriors.svg";
import propertyManagement from "../../../images/propertyManagement.svg";
import solarRooftop from "../../../images/solarRooftop.svg";

class HousingSection extends Component {
  state = {};
  render() {
    return (
      <section className="housing">
        <h2 className="h4">Renting Benefits</h2>
        <p>Enjoy the perks of renting and live with passion and ease.</p>
        <div className="flex">
          <Link to="#" className="flex-item card">
            <img src={payRent} alt="" />
            <h3>Rent Payment</h3>
            <p>Pay rent as you like and enjoy rewards.*</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={rentAgreement} alt="" />
            <h3>Rent Agreement</h3>
            <p>Be safe and sign digitally now.</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={movers} alt="" />
            <h3>Packers &amp; Movers</h3>
            <p>Preferred choices with rating by experienced users.</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={tenantVerification} alt="" />
            <h3>Tenant Verification</h3>
            <p>Authentication is now only a click away.</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={furniture} alt="" />
            <h3>Owner Verification</h3>
            <p>Know your house owner before dealing.</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={homeInteriors} alt="" />

            <h3>Home Interiors</h3>
            <p>Latest Home Interior Design Solutions</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={propertyManagement} alt="" />
            <h3>Eco Management</h3>
            <p>Manage greenery in your life.</p>
          </Link>
          <Link to="#" className="flex-item card">
            <img src={solarRooftop} alt="" />
            <h3>Solar Rooftop</h3>
            <p>Recharge your power with sun and innovation.</p>
          </Link>
        </div>
      </section>
    );
  }
}

export default HousingSection;
