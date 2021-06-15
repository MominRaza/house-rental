import React, { Component } from "react";
import SearchSection from "../components/searchSection";
import HousingSection from "../components/housingSection";
import FeaturedSection from "../components/featuredSection";
import NewsSection from "../components/newsSection";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <SearchSection />
        <HousingSection />
        <FeaturedSection />
        <NewsSection />
      </React.Fragment>
    );
  }
}

export default Home;
