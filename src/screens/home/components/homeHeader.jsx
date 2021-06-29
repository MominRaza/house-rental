import React, { Component } from "react";
import { Link } from "react-router-dom";

import UserLogo from "../../../components/UserLogo";

import logo from "../../../images/logo.png";

class HomeHeader extends Component {
  state = {};
  render() {
    return (
      <header className="home-page">
        <nav className="appbar">
          <div className="leading">
            <img src={logo} alt="House Rental" className="logo" />
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

export default HomeHeader;
