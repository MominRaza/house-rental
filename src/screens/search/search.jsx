import React, { Component } from "react";

import Result from "./components/result";
import Filter from "./components/filter";

class Search extends Component {
  state = {};
  render() {
    const properties = this.props.properties;
    return (
      <>
        <Filter />
        <div className="list results">
          {properties.map((property) => (
            <Result key={property["id"]} property={property} />
          ))}
        </div>
      </>
    );
  }
}

export default Search;
