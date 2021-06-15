import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};

  render() {
    let classes = "modal card center";
    classes += this.props.loginModal ? " modal-active" : "";

    return (
      <div className={classes}>
        <h2 className="h4">Login</h2>
        <button
          className="btn btn-t danger sm"
          onClick={this.props.onLoginToggle}
        >
          <div className="material-icons">close</div>
        </button>
        <form action="#" className="left">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
          <input type="submit" value="Login" className="btn primary" />
        </form>
        <p>or</p>
        <p>
          Not have an account{" "}
          <Link to="/register" onClick={this.props.onLoginToggle}>
            Register
          </Link>
        </p>
      </div>
    );
  }
}

export default Login;
