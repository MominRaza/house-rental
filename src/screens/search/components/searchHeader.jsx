import React, { Component } from "react";
import { Link } from "react-router-dom";

import UserLogo from "../../../components/UserLogo";
import MenuToggle from "../../../components/MenuToggle";
import SearchToggle from "./SearchToggle";
import SearchBox from "./SearchBox";

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
          <SearchBox
            location={this.props.location}
            search={this.props.search}
          />
          <div className="trailing" id="menu">
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
          <div className="flex">
            <SearchToggle />
            <MenuToggle />
          </div>
        </nav>
      </header>
    );
  }
}

export default SearchHeader;
