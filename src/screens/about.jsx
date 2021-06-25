import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <section className="about card">
        <h1 className="h3">Welcome to Housing</h1>
        <p className="b1">
          We are the fastest growing company in the online real estate space.
          Born out of the need to simplify the search for a home, free of fake
          listings and endless site visits, we created a unique property search
          platform that filled the gaps left by others in the market. Led by
          passionate problem-solvers, and backed by top investors from around
          the world, we are poised to become the most trusted place to find a
          home in India.
        </p>
        <h2 className="h4">Our Vision</h2>
        <p className="b1">
          Delivering trustworthy experiences that you cherish for a lifetime.
        </p>
        <h2 className="h4">Our Mission</h2>
        <p className="b1">
          To be the first choice for our consumers and partners in their journey
          of discovering, renting, buying, selling and financing a home. We do
          that with data, design, technology, and above all the passion of our
          people, while delivering value to our shareholders.
        </p>
      </section>
    );
  }
}

export default About;
