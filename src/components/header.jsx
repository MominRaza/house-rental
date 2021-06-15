import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav className="appbar">
          <Link to="/" className="leading">
            <img src="./images/logo.png" alt="House Rental" className="logo" />
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
  }
}

export default Header;
