import React, { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav className="appbar">
          <div className="leading">
            <img src="./images/logo.png" alt="House Rental" className="logo" />
          </div>
          <div className="trailing">
            <a href="#" className="btn secondary sm">
              List Property
            </a>
            <a href="#" className="btn btn-t secondary sm icon-l">
              <i className="material-icons md-18">favorite_outline</i>
              Favorite
            </a>
            <a href="#" className="btn btn-t secondary sm">
              News
            </a>
            <a href="#" className="btn btn-t secondary sm icon-l">
              <i className="material-icons md-18">person_outline</i>
              Login
            </a>
            <a href="#" className="btn btn-t secondary sm icon-o">
              <i className="material-icons md-18">menu</i>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
