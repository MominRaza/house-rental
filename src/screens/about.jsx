import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <section className="about card center">
        <h1 className="h3">HOUSE RENTAL</h1>
        <h2 className="h4">Welcomes You!</h2>
        <p className="b1">
          We,House Rental is an emerging platform for those who wants to find genuine real estates offerings.
          We understand the difficulty in finding desired property hence we are presenting a very detailed and 
          specified properties which will provide a very easy way to get exactly what you want.
        </p>
        <h2 className="h4">Key/Unique Features:</h2>
        <p className="b1">
          *Enhanced visibility of the website for colorblind persons. <br />
          *Owner verification is also provided in addition with tenent verification. <br />
          *Faster website compared to other websites for renting and housing.
        </p>
        <h2 className="h4">Aim</h2>
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
