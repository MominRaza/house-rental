import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import logo from "../images/logo.png";

class Header extends Component {
  state = {};
  render() {
    let HomePageStyling = "";
    return (
      <Route
        render={(props) => {
          if (props.location.pathname === "/") {
            HomePageStyling = "home-page";
          }
          return (
            <header className={HomePageStyling}>
              <nav className="appbar">
                <Link to="/" className="leading">
                  <img src={logo} alt="House Rental" className="logo" />
                </Link>
                <div className="trailing">
                  <Link to="#" className="btn secondary sm">
                    List Property
                  </Link>
                  <Link to="#" className="btn btn-t secondary sm icon-l">
                    <i className="material-icons md-18">favorite_outline</i>
                    Favorite
                  </Link>
                  <Link to="#" className="btn btn-t secondary sm">
                    News
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-t secondary sm icon-l"
                    onClick={this.props.onLoginToggle}
                  >
                    <i className="material-icons md-18">person_outline</i>
                    Login
                  </Link>
                  <Link to="#" className="btn btn-t secondary sm icon-o">
                    <i className="material-icons md-18">menu</i>
                  </Link>
                </div>
              </nav>
            </header>
          );
        }}
      />
    );
  }
}

export default Header;
