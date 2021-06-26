import React, { Component } from "react";

class Basic extends Component {
  state = {};
  render() {
    return (
      <div className="card left">
        <p>I want to:</p>
        <div className="flex">
          <label>
            <input type="radio" name="i-want-to" id="" />
            Sell
          </label>
          <label>
            <input type="radio" name="i-want-to" id="" />
            Rent
          </label>
          <label>
            <input type="radio" name="i-want-to" id="" />
            PG / Co Living
          </label>
        </div>
        <p>Property purpose:</p>
        <div className="flex">
          <label>
            <input type="radio" name="property-purpose" id="" />
            Living
          </label>
          <label>
            <input type="radio" name="property-purpose" id="" />
            Business
          </label>
        </div>
        <p>Property type:</p>
        <div className="flex">
          <label>
            <input type="radio" name="property-type" id="" />
            Apartment
          </label>
          <label>
            <input type="radio" name="property-type" id="" />
            Independent House / Floor
          </label>
          <label>
            <input type="radio" name="property-type" id="" />
            Plot
          </label>
          <label>
            <input type="radio" name="property-type" id="" />
            Agricultural Land
          </label>
          <label>
            <input type="radio" name="property-type" id="" />
            Farm House
          </label>
          <label>
            <input type="radio" name="property-type" id="" />
            Hotel
          </label>
          <label>
            <input type="radio" name="property-type" id="" />
            Party Place
          </label>
        </div>
        <p>Construction Status:</p>
        <div className="flex">
          <label>
            <input type="radio" name="construction-status" id="" />
            Ready to move
          </label>
          <label>
            <input type="radio" name="construction-status" id="" />
            Under construction
          </label>
        </div>
        <p>BHK:</p>
        <div className="flex">
          <label>
            <input type="radio" name="bhk" id="" />
            Single Room
          </label>
          <label>
            <input type="radio" name="bhk" id="" />1 BHK
          </label>
          <label>
            <input type="radio" name="bhk" id="" />2 BHK
          </label>
          <label>
            <input type="radio" name="bhk" id="" />3 BHK
          </label>
          <label>
            <input type="radio" name="bhk" id="" />
            3+ BHK
          </label>
        </div>
        <label>
          Enter Manually:
          <input type="number" name="bhk-value" id="" />
        </label>
        <p>Bathroom:</p>
        <div className="flex">
          <label>
            <input type="radio" name="bathroom" id="" />0
          </label>
          <label>
            <input type="radio" name="bathroom" id="" />1
          </label>
          <label>
            <input type="radio" name="bathroom" id="" />2
          </label>
          <label>
            <input type="radio" name="bathroom" id="" />3
          </label>
          <label>
            <input type="radio" name="bathroom" id="" />
            3+
          </label>
        </div>
        <label>
          Enter Manually:
          <input type="number" name="bathroom-value" id="" />
        </label>
        <p>Balcony:</p>
        <div className="flex">
          <label>
            <input type="radio" name="balcony" id="" />0
          </label>
          <label>
            <input type="radio" name="balcony" id="" />1
          </label>
          <label>
            <input type="radio" name="balcony" id="" />2
          </label>
          <label>
            <input type="radio" name="balcony" id="" />3
          </label>
          <label>
            <input type="radio" name="balcony" id="" />
            3+
          </label>
        </div>
        <label>
          Enter Manually:
          <input type="number" name="balcony-value" id="" />
        </label>
        <p>Furnish Type:</p>
        <div className="flex">
          <label>
            <input type="radio" name="furnish-type" id="" />
            Fully Furnished
          </label>
          <label>
            <input type="radio" name="furnish-type" id="" />
            Semi Furnished
          </label>
          <label>
            <input type="radio" name="furnish-type" id="" />
            Unfurnished
          </label>
        </div>
        <p>Parking:</p>
        <div className="flex">
          <label>
            <input type="radio" name="parking" id="" />
            Covered
          </label>
          <label>
            <input type="radio" name="parking" id="" />
            Uncovered
          </label>
          <label>
            <input type="radio" name="parking" id="" />
            No parking
          </label>
        </div>
        <p>Area:</p>
        <div className="flex">
          <label>
            <input
              className="area"
              type="text"
              name="parking"
              id=""
              placeholder="Area of property"
            />
            Sq-ft
          </label>
        </div>
        <div className="flex submit">
          <input type="submit" value="Continue" className="btn primary" />
        </div>
      </div>
    );
  }
}

export default Basic;
