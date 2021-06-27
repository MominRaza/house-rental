import React, { Component } from "react";

class RentAgreement extends Component {
  state = {};
  render() {
    return (
      <section className="tenant-verify center">
        <h1 className="h3">Rent Agreement</h1>
        <form action="#" className="card left">
          <label>
            Full Name:
            <input type="text" name="full-name" />
          </label>
          <label>
            Phone Number:
            <input type="text" name="phone-number" />
          </label>
          <label>
            Email Id:
            <input type="email" name="email" />
          </label>
          <p>I am a</p>
          <div className="flex">
            <label>
              <input type="radio" name="iam" />
              Tenant
            </label>
            <label>
              <input type="radio" name="iam" />
              Landlord
            </label>
          </div>
          <label>
            State:
            <input type="text" name="state" />
          </label>
          <label>
            City:
            <input type="text" name="city" />
          </label>
          <input
            type="submit"
            value="Pay Rs. 100 &amp; Verify"
            className="btn primary"
          />
        </form>
      </section>
    );
  }
}

export default RentAgreement;
