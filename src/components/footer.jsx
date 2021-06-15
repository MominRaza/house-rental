import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer grid grid-4">
        <div className="grid-item">
          <img src="./images/logo.png" alt="House Rental" className="logo" />
          <p className="b2 copy">&copy; 2012-21 Locon Solutions Pvt. Ltd.</p>
        </div>
        <div className="grid-item">
          <p className="s1">COMPANY</p>
          <ul>
            <li>
              <a href="#" className="b2">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="b2">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="b2">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="b2">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="grid-item">
          <p className="s1">EXPLORE</p>
          <ul>
            <li>
              <a href="#" className="b2">
                News
              </a>
            </li>
            <li>
              <a href="#" className="b2">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div className="grid-item">
          <p className="s1">FOLLOW</p>
          <ul>
            <li>
              <a href="#" className="b2">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="b2">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="b2">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="b2">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
