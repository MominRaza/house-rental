import React, { Component } from "react";

class OwnerVerification extends Component {
  state = {};
  render() {
    return (
      <section className="tenant-verify center">
        <h1 className="h3">Owner Verification</h1>
        <form action="#" className="card left">
          <p>Tenant Details</p>
          <label>
            Tenant Name:
            <input type="text" name="tenant-name" />
          </label>
          <label>
            Tenant Adhar Card Number:
            <input type="text" name="tenant-adhar-number" />
          </label>
          <p>Owner Details</p>
          <label>
            Owner Name:
            <input type="text" name="owner-name" />
          </label>
          <label>
            Owner Phone Number:
            <input type="text" name="owner-phone" />
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
            Owner Father Name:
            <input type="text" name="owner-father" />
          </label>
          <p>Owner Permanent Address</p>
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
      </section>
    );
  }
}

export default OwnerVerification;
