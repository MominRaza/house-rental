import React, { Component } from "react";

class Price extends Component {
  state = {};
  render() {
    return (
      <div className="card left">
        <p>Price Type:</p>
        <div className="flex">
          <label>
            <input type="radio" name="price-type" />
            Sell
          </label>

          <label>
            <input type="radio" name="price-type" />
            Rent
          </label>
        </div>
        <p>Price Range:</p>
        <div className="flex">
          <label>
            <input type="radio" name="price-range" />
            Negotiable
          </label>
          <label>
            <input type="radio" name="price-range" />
            Non-negotiable
          </label>
        </div>
        <div className="flex">
          <label>
            Price:
            <input type="number" name="price" />
          </label>
        </div>
        <p>Rent Mode:</p>
        <div className="flex">
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
        </div>
        <div className="flex">
          <label>
            Rent:
            <input type="number" name="rent" />
          </label>
        </div>
        <p>Rent Includes:(Optional)</p>
        <div className="flex">
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
            Maintenance Bill
          </label>
        </div>
        <p>Rent Excludes:(Optional)</p>
        <div className="flex">
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
            Maintenance Bill
          </label>
        </div>
        <p>Property Perks:</p>
        <div className="flex">
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
            Refrigerator
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
            Cupboard
          </label>
        </div>
        <div className="flex submit">
          <button type="submit" className="btn primary">
            Continue
          </button>
          <button className="btn secondary">Back</button>
        </div>
      </div>
    );
  }
}

export default Price;
