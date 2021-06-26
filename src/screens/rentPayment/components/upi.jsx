import React, { Component } from "react";

class Upi extends Component {
  state = {};
  render() {
    return (
      <div className="card payment">
        <h2 className="h4">UPI Details</h2>
        <form action="#">
          <p>Sender details:</p>
          <label>
            UPI Id:
            <input type="text" name="upi-id" />
          </label>
          <p>Receiver details:</p>
          <label>
            Bank name:
            <input type="text" name="bank-name" />
          </label>
          <label>
            Account holder name:
            <input type="text" name="holder-name" />
          </label>
          <label>
            Account number:
            <input type="text" name="account-number" />
          </label>
          <label>
            IFSC code:
            <input type="text" name="ifsc-code" />
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
