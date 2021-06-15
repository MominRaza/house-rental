import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer grid grid-4">
        <div className="grid-item">
          <img src={logo} alt="House Rental" className="logo" />
          <p className="b2 copy">&copy; 2012-21 Locon Solutions Pvt. Ltd.</p>
        </div>
        <div className="grid-item">
          <p className="s1">COMPANY</p>
          <ul>
            <li>
              <Link to="/about-us" className="b2">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="b2">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="b2">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="contact-us" className="b2">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid-item">
          <p className="s1">EXPLORE</p>
          <ul>
            <li>
              <Link to="/news-and-articles" className="b2">
                News
              </Link>
            </li>
            <li>
              <Link to="#" className="b2">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid-item">
          <p className="s1">FOLLOW</p>
          <ul>
            <li>
              <Link to="#" className="b2">
                Facebook
              </Link>
            </li>
            <li>
              <Link to="#" className="b2">
                Instagram
              </Link>
            </li>
            <li>
              <Link to="#" className="b2">
                Twitter
              </Link>
            </li>
            <li>
              <Link to="#" className="b2">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
