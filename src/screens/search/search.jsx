import React, { Component } from "react";

import Result from "./components/result";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="list results">
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </div>
    );
  }
}

export default Search;
