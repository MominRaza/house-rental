import React, { Component } from "react";

class Basic extends Component {
  state = {};
  render() {
    return (
      <>
        <h3 className="h4">Tenant details for Basic plan</h3>
        <form action="#" className="card left">
          <label>
            Tenant Name:
            <input type="text" name="tenant-name" />
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
          <input
            type="submit"
            value="Pay Rs. 50 &amp; Verify"
            className="btn primary"
          />
        </form>
      </>
    );
  }
}

export default Basic;
