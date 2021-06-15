import React, { Component } from "react";

class FeaturedSection extends Component {
  state = {};
  render() {
    return (
      <section class="featured">
        <div>
          <h2 class="h4">Featured Collections</h2>
          <p>Handpicked projects for you</p>
          <div class="flex">
            <a href="#" class="flex-item card">
              <div>
                <img src="./images/medium.webp" alt="Ready to Move-In" />
                <h3>Ready to Move-In</h3>
                <p>Comfortable homes available for immediate use</p>
              </div>
            </a>
            <a href="#" class="flex-item card">
              <div>
                <img src="./images/medium (1).webp" alt="Townships" />
                <h3>Townships</h3>
                <p>Redefining community living</p>
              </div>
            </a>
            <a href="#" class="flex-item card">
              <div>
                <img src="./images/medium (2).webp" alt="Luxury" />
                <h3>Luxury</h3>
                <p>Premium housing for the lifestyle-conscious</p>
              </div>
            </a>
            <a href="#" class="flex-item card">
              <div>
                <img src="./images/medium (3).webp" alt="Affordable Homes" />
                <h3>Affordable Homes</h3>
                <p>Pocket-friendly homes</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedSection;
