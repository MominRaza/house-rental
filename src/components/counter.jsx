import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="btn btn-o primary">
          {this.formatCount()}
        </span>
        <button className="btn success">Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
