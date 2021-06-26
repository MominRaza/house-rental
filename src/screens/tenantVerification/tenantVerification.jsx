import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class TenantVerification extends Component {
  state = {};
  render() {
    return (
      <section className="tenant-verify">
        <h1 className="h3">Tenant Verification</h1>
        <p>
          Choose a plan
          <i className="material-icons">chevron_right</i>
          Enter tenant details
          <i className="material-icons">chevron_right</i>
          Make Payment Get Verification
          <i className="material-icons">chevron_right</i>
          Report in 4-5 days
        </p>
        <h3 className="h4">Choos a plan</h3>
        <div className="flex">
          <NavLink to="/tenant-verification/basic" className="flex-item card">
            <p className="h6">Basic</p>
            <p className="s1">Rs. 50</p>
            <p>
              <i className="material-icons">check</i>
              ID Verification
            </p>
            <button className="btn primary">Choose &amp; Verify</button>
          </NavLink>
          <NavLink
            to="/tenant-verification/advanced"
            className="flex-item card"
          >
            <p className="h6">Advanced</p>
            <p className="s1">Rs. 150</p>
            <p>
              <i className="material-icons">check</i>
              ID Verification
            </p>
            <p>
              <i className="material-icons">check</i>
              Civil &amp; Criminal Record Check
            </p>
            <button className="btn primary">Choose &amp; Verify</button>
          </NavLink>
        </div>
      </section>
    );
  }
}

export default TenantVerification;
