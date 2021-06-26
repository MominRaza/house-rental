import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import Debit from "./components/debit";
import Credit from "./components/credit";
import Upi from "./components/upi";

import debitCard from "../../images/debit-card.jpg";
import creditCard from "../../images/credit-card.jpg";
import upi from "../../images/upi.jpg";

class RentPayment extends Component {
  state = {};
  render() {
    return (
      <section className="rent-payment">
        <h1 className="h3">Rent Payment</h1>

        <div className="flex">
          <NavLink
            to="/rent-payment/debit"
            className="flex-item card"
            activeClassName="active"
          >
            <div>
              <img src={debitCard} alt="Debit Card Prototype" />
              <h3 className="h5">Pay with Debit Card</h3>
            </div>
          </NavLink>
          <NavLink
            to="/rent-payment/credit"
            className="flex-item card"
            activeClassName="active"
          >
            <div>
              <img src={creditCard} alt="Debit Card Prototype" />
              <h3 className="h5">Pay with Credit Card</h3>
            </div>
          </NavLink>
          <NavLink
            to="/rent-payment/upi"
            className="flex-item card"
            activeClassName="active"
          >
            <div>
              <img src={upi} alt="Debit Card Prototype" />
              <h3 className="h5">Pay with UPI</h3>
            </div>
          </NavLink>
        </div>
        <Switch>
          <Route path="/rent-payment/debit">
            <Debit />
          </Route>
          <Route path="/rent-payment/credit">
            <Credit />
          </Route>
          <Route path="/rent-payment/upi">
            <Upi />
          </Route>
        </Switch>
      </section>
    );
  }
}

export default RentPayment;
