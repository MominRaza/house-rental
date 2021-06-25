import React, { Component } from "react";

class Price extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="flex">
          <p>Price Type:</p>
          <label>
            <input type="radio" name="price-type" />
            Sell
          </label>
          <label>
            <input type="radio" name="price-type" />
            Rent
          </label>
        </div>
        <div className="flex">
          <p>Price Range:</p>
          <label>
            <input type="radio" name="price-range" />
            Negosiable
          </label>
          <label>
            <input type="radio" name="price-range" />
            Non-negosiable
          </label>
        </div>
        <div className="flex">
          <label>
            Price:
            <input type="number" name="price" />
          </label>
        </div>
        <div className="flex">
          <p>Rent Mode:</p>
          <label>
            <input type="radio" name="rent-mode" />
            Online
          </label>
          <label>
            <input type="radio" name="rent-mode" />
            Offline
          </label>
          <label>
            <input type="radio" name="rent-mode" />
            Both
          </label>
          <label>
            Rent:
            <input type="number" name="rent" />
          </label>
        </div>
        <div className="flex">
          <p>Rent Includes:</p>
          <label>
            <input type="checkbox" name="rent-includes" />
            Electricity Bill
          </label>
          <label>
            <input type="checkbox" name="rent-includes" />
            Water Bill
          </label>
          <label>
            <input type="checkbox" name="rent-includes" />
            Parking Bill
          </label>
          <label>
            <input type="checkbox" name="rent-includes" />
            Maintainence Bill
          </label>
        </div>
        <div className="flex">
          <p>Rent Excludes:</p>
          <label>
            <input type="checkbox" name="rent-excludes" />
            Electricity Bill
          </label>
          <label>
            <input type="checkbox" name="rent-excludes" />
            Water Bill
          </label>
          <label>
            <input type="checkbox" name="rent-excludes" />
            Parking Bill
          </label>
          <label>
            <input type="checkbox" name="rent-excludes" />
            Maintainence Bill
          </label>
        </div>
        <div className="flex">
          <p>Property Perks:</p>
          <label>
            <input type="checkbox" name="property-perks" />
            Inverter
          </label>
          <label>
            <input type="checkbox" name="property-perks" />
            A.C.
          </label>
          <label>
            <input type="checkbox" name="property-perks" />
            T.V.
          </label>
          <label>
            <input type="checkbox" name="property-perks" />
            Water Purifier
          </label>
          <label>
            <input type="checkbox" name="property-perks" />
            Cooler
          </label>
          <label>
            <input type="checkbox" name="property-perks" />
            Fan
          </label>
          <label>
            <input type="checkbox" name="property-perks" />
            Light
          </label>
          <label>
            <input type="checkbox" name="property-perks" />
            Refrigiretor
          </label>
          <label>
            <input type="checkbox" name="property-perks" />
            Table
          </label>
          <label>
            <input type="checkbox" name="property-perks" />
            Chair
          </label>
          <label>
            <input type="checkbox" name="property-perks" />
            Lampboard
          </label>
        </div>
        <button className="btn secondary">Back</button>
        <button type="submit" className="btn primary">
          Continue
        </button>
      </div>
    );
  }
}

export default Price;
