import React, { Component } from "react";
import Header from "./components/header";
import SearchSection from "./components/searchSection";
import HousingSection from "./components/housingSection";
import FeaturedSection from "./components/featuredSection";
import NewsSection from "./components/newsSection";
import Footer from "./components/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <SearchSection />
        <HousingSection />
        <FeaturedSection />
        <NewsSection />
        <Footer />
      </div>
    );
  }
}

export default App;
