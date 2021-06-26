import React, { Component } from "react";

class Address extends Component {
  state = {};
  render() {
    return (
      <div className="card left">
        <p>Address:</p>
        <div className="flex">
          <label>
            City/Town
            <input type="text" name="city" />
          </label>
        </div>
        <div className="flex">
          <label>
            Building/House No./Project/Society(Mandatry)
            <input type="text" name="building" />
          </label>
        </div>
        <div className="flex">
          <label>
            Locelity
            <input type="text" name="locelity" />
          </label>
        </div>
        <div className="flex">
          <label className="flex-item">
            Flat No.
            <input type="text" name="flat" />
          </label>
          <label className="flex-item">
            Floor No.
            <input type="text" name="floor" />
          </label>
          <label className="flex-item">
            Total Floor
            <input type="text" name="total-floor" />
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

export default Address;
