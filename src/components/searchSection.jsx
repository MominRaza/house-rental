import React, { Component } from "react";

class SearchSection extends Component {
  state = {};
  render() {
    return (
      <section class="home center">
        <h1 class="h3">Properties to buy in Lucknow</h1>
        <h2 class="h5">Yahan Search Khatam Karo</h2>
        <div class="card bg-dark">
          <div class="tab">
            <div class="tab-item selected">BUY</div>
            <div class="tab-item">RENT</div>
            <div class="tab-item">PLOTS</div>
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
            <button type="submit" class="btn primary lg icon-l">
              <i class="material-icons">search</i>
              Search
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default SearchSection;
