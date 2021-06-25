import React, { Component } from "react";

import Result from "./components/result";
import Filter from "./components/filter";

class Search extends Component {
  state = {};
  render() {
    return (
      <>
        <Filter />
        <div className="list results">
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
        </div>
      </>
    );
  }
}

export default Search;
