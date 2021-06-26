import React, { Component } from "react";

class Advanced extends Component {
  state = {};
  render() {
    return (
      <>
        <h3 className="h4">Tenant details for Advanced plan</h3>
        <form action="#" className="card left">
          <label>
            Tenant Name:
            <input type="text" name="tenant-name" />
          </label>
          <label>
            Tenant Phone Number:
            <input type="text" name="tenant-phone" />
          </label>
          <label>
            Adhar Card Number:
            <input type="text" name="adhar-number" />
          </label>
          <label>
            Adhar Card Photo:
            <input type="file" name="adhar-number" accept="image/*" />
          </label>
          <label>
            PAN Card Number (optional):
            <input type="text" name="pan-number" />
          </label>
          <label>
            Tenant Father Name:
            <input type="text" name="tenant-father" />
          </label>
          <p>Tenant Permanent Address</p>
          <label>
            Street:
            <input type="text" name="street" />
          </label>
          <div className="flex">
            <label>
              City:
              <input type="text" name="city" />
            </label>
            <label>
              State:
              <input type="text" name="state" />
            </label>
          </div>
          <div className="flex">
            <label>
              Postal / Zip Code:
              <input type="text" name="zip-code" />
            </label>
            <label>
              Country:
              <input type="text" name="country" />
            </label>
          </div>
          <input
            type="submit"
            value="Pay Rs. 150 &amp; Verify"
            className="btn primary"
          />
        </form>
      </>
    );
  }
}

export default Advanced;
