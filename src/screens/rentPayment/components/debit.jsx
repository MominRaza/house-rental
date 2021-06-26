import React, { Component } from "react";

class Debit extends Component {
  state = {};
  render() {
    return (
      <div className="card payment">
        <h2 className="h4">Debit Card Details</h2>
        <form action="#">
          <p>Sender details:</p>
          <label>
            Name on card:
            <input type="text" name="name" />
          </label>
          <label>
            Debit card number:
            <input type="text" name="cardnumber" />
          </label>
          <div className="flex">
            <label>
              Exp month:
              <input type="text" name="expmonth" />
            </label>
            <label>
              Exp year:
              <input type="text" name="expyear" />
            </label>
          </div>
          <label>
            CVV:
            <input type="text" name="cvv" />
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

export default Debit;
