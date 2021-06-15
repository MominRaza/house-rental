import React, { Component } from "react";

class SearchSection extends Component {
  state = {};
  render() {
    return (
      <section className="home center">
        <h1 className="h3">Properties to buy in Lucknow</h1>
        <h2 className="h5">Yahan Search Khatam Karo</h2>
        <div className="card bg-dark">
          <div className="tab">
            <div className="tab-item selected">BUY</div>
            <div className="tab-item">RENT</div>
            <div className="tab-item">PLOTS</div>
          </div>
          <form action="#">
            <select name="location" id="location">
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
