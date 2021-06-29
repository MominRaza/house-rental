import React, { Component } from "react";
import { Link } from "react-router-dom";

import UserLogo from "../../../components/UserLogo";

import logo from "../../../images/logo.png";

class SearchHeader extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav className="appbar">
          <Link to="/" className="leading">
            <img src={logo} alt="House Rental" className="logo" />
          </Link>
          <div className="search-box flex">
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
              placeholder="Search for locality, landmark, project, or builder"
            />
            <button type="submit" className="btn secondary icon-o">
              <i className="material-icons">search</i>
            </button>
          </div>
          <div className="trailing">
            <Link to="/list-property" className="btn secondary sm">
              List Property
            </Link>
            <Link to="/favourites" className="btn btn-t white sm icon-l">
              <i className="material-icons md-18">favorite_outline</i>
              Favourites
            </Link>
            <Link to="/news-and-articles" className="btn btn-t white sm">
              News
            </Link>
            <UserLogo />
          </div>
        </nav>
      </header>
    );
  }
}

export default SearchHeader;
