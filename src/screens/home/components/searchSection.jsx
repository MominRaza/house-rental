import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SearchSection extends Component {
  state = {};
  render() {
    return (
      <section className="home center">
        <h1 className="h3">Properties to buy in Lucknow</h1>
        <h2 className="h5">Yahan Search Khatam Karo</h2>
        <div className="card bg-dark">
          <div className="tab">
            <NavLink
              to="#buy"
              isActive={() => {
                return (
                  window.location.hash === "#buy" ||
                  (window.location.pathname === "/" &&
                    window.location.hash === "")
                );
              }}
              className="tab-item white"
              activeClassName="selected"
            >
              BUY
            </NavLink>
            <NavLink
              to="#rent"
              isActive={() => {
                return window.location.hash === "#rent";
              }}
              className="tab-item white"
              activeClassName="selected"
            >
              RENT
            </NavLink>
            <NavLink
              to="#plots"
              isActive={() => {
                return window.location.hash === "#plots";
              }}
              className="tab-item white"
              activeClassName="selected"
            >
              PLOTS
            </NavLink>
          </div>
          <form action="/search">
            <select name="location">
              <option value="Lucknow">Lucknow</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
              <option value="Chennai">Chennai</option>
              <option value="Delhi">Delhi</option>
              <option value="Gurgaon">Gurgaon</option>
            </select>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for locality, landmark, project, or builder"
            />
            <button type="submit" className="btn primary lg icon-l">
              <i className="material-icons">search</i>
              Search
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default SearchSection;
