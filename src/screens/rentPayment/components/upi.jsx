import React, { Component } from "react";

class Upi extends Component {
  state = {};
  render() {
    return (
      <div className="card payment">
        <h2 className="h4">UPI Details</h2>
        <form action="#">
          <label>
            UPI Id:
            <input type="text" name="upi-id" />
          </label>
          <input
            type="submit"
            value="Continue to checkout"
            className="btn primary"
          />
        </form>
      </div>
    );
  }
}

export default Upi;
