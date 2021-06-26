import React, { Component } from "react";

class Debit extends Component {
  state = {};
  render() {
    return (
      <div className="card payment">
        <h2 className="h4">Debit Card Details</h2>
        <form action="#">
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
