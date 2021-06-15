import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="footer grid grid-4">
        <div class="grid-item">
          <img src="./images/logo.png" alt="House Rental" class="logo" />
          <p class="b2 copy">&copy; 2012-21 Locon Solutions Pvt. Ltd.</p>
        </div>
        <div class="grid-item">
          <p class="s1">COMPANY</p>
          <ul>
            <li>
              <a href="#" class="b2">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="b2">
                Terms
              </a>
            </li>
            <li>
              <a href="#" class="b2">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="b2">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div class="grid-item">
          <p class="s1">EXPLORE</p>
          <ul>
            <li>
              <a href="#" class="b2">
                News
              </a>
            </li>
            <li>
              <a href="#" class="b2">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div class="grid-item">
          <p class="s1">FOLLOW</p>
          <ul>
            <li>
              <a href="#" class="b2">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" class="b2">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" class="b2">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" class="b2">
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
