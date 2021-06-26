import React, { Component } from "react";

import { Link } from "react-router-dom";

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <section className="login center">
        <h1 className="h3">Login</h1>
        <form action="#" className="card left">
          <label>
            Email address:
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </label>
          <input type="submit" value="Login" className="btn primary" />
        </form>
        <p className="or">or</p>
        <p>
          Not have an account <Link to="/register">Register</Link>
        </p>
      </section>
    );
  }
}

export default LoginScreen;
