import React, { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav class="appbar">
          <div class="leading">
            <img src="./images/logo.png" alt="House Rental" class="logo" />
          </div>
          <div class="trailing">
            <a href="#" class="btn secondary sm">
              List Property
            </a>
            <a href="#" class="btn btn-t secondary sm icon-l">
              <i class="material-icons md-18">favorite_outline</i>
              Favorite
            </a>
            <a href="#" class="btn btn-t secondary sm">
              News
            </a>
            <a href="#" class="btn btn-t secondary sm icon-l">
              <i class="material-icons md-18">person_outline</i>
              Login
            </a>
            <a href="#" class="btn btn-t secondary sm icon-o">
              <i class="material-icons md-18">menu</i>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
