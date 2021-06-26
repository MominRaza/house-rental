import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};

  render() {
    let classes = "modal card center rd-4";
    classes += this.props.loginModal ? " modal-active" : "";

    return (
      <div className={classes}>
        <h2 className="h4">Login</h2>
        <button
          className="btn btn-t danger sm modal-close"
          onClick={this.props.onLoginToggle}
        >
          <div className="material-icons">close</div>
        </button>
        <form action="#" className="left">
          <label>
            Email address:
            <input
              type="text"
              id="email"
              name="email"
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
