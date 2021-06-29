import React, { Component } from "react";

import { Link } from "react-router-dom";

class Register extends Component {
  state = {};
  render() {
    return (
      <section className="register center">
        <h1 className="h3">Register</h1>
        <form action="#" className="card left rd-4">
          <label>
            Full name:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter full name"
            />
          </label>
          <label>
            Mobile number:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter mobile number"
            />
          </label>
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
            Create password:
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </label>
          <label>
            <input type="checkbox" name="terms" id="terms" />
            Accept <Link to="/terms">terms</Link> and
            <Link to="/conditions">conditions</Link>.
          </label>
          <input type="submit" value="Register" className="btn primary" />
        </form>
        <p className="or">or</p>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </section>
    );
  }
}

export default Register;
