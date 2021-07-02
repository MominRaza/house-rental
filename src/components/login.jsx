import React, { Component } from "react";
import { Link } from "react-router-dom";

import LoginForm from "../screens/login/components/LoginForm";

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
        <LoginForm />
        <p className="or">or</p>
        <p>
          Need an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    );
  }
}

export default Login;
