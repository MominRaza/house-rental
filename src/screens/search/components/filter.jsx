import React, { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    return (
      <form className="filter flex">
        <p>Filters</p>
        <select name="want">
          <option value="">I want to:</option>
          <option value="sell">Sell</option>
          <option value="rent">Rent</option>
          <option value="pg">PG / Co Living</option>
        </select>
        <select name="type">
          <option value="">Property type:</option>
          <option value="apartment">Apartment</option>
          <option value="independent">Independent House / Floor</option>
          <option value="plot">Plot</option>
          <option value="agricultural">Agricultural Land</option>
          <option value="farm">Farm House</option>
          <option value="hotel">Hotel</option>
          <option value="party">Party Place</option>
        </select>
        <select name="status">
          <option value="">Construction Status:</option>
          <option value="ready">Ready to move</option>
          <option value="under">Under construction</option>
        </select>
        <select name="bhk">
          <option value="">BHK Type:</option>
          <option value="0">Single Room</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="3+">3+ BHK</option>
        </select>
        <button type="reset" className="btn secondary">
          Reset
        </button>
        <button type="submit" className="btn primary">
          Apply
        </button>
      </form>
    );
  }
}

export default Filter;
