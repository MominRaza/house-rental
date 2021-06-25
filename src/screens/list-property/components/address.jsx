import React, { Component } from "react";

class Address extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <label>
          City/Town
          <input type="text" name="city" />
        </label>
        <label>
          Building/House No./Project/Society(Mandatry)
          <input type="text" name="building" />
        </label>
        <label>
          Locelity
          <input type="text" name="locelity" />
        </label>
        <label>
          Flat No.
          <input type="text" name="flat" />
        </label>
        <label>
          Floor No.
          <input type="text" name="floor" />
        </label>
        <label>
          Total Floor
          <input type="text" name="total-floor" />
        </label>
        <button className="btn secondary">Back</button>
        <button type="submit" className="btn primary">
          Continue
        </button>
      </div>
    );
  }
}

export default Address;
