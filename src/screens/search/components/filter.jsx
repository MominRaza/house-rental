import React, { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    return (
      <section className="filters">
        <p>Filters</p>
        <form className="filter flex">
          <select name="want">
            <option value="">I want to:</option>
            <option>Sell</option>
            <option>Rent</option>
            <option>PG / Co Living</option>
          </select>
          <select name="type">
            <option value="">Property type:</option>
            <option>Apartment</option>
            <option>Independent House / Floor</option>
            <option>Plot</option>
            <option>Agricultural Land</option>
            <option>Farm House</option>
            <option>Hotel</option>
            <option>Party Place</option>
          </select>
          <select name="status">
            <option value="">Construction Status:</option>
            <option>Ready to move</option>
            <option>Under construction</option>
          </select>
          <select name="bhk">
            <option value="">BHK Type:</option>
            <option>Single Room</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>3+ BHK</option>
          </select>
          <button type="reset" className="btn secondary">
            Reset
          </button>
          <button type="submit" className="btn primary">
            Apply
          </button>
        </form>
      </section>
    );
  }
}

export default Filter;
