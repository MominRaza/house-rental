import React from "react";

import { Link } from "react-router-dom";

import LoginForm from "./components/LoginForm";

export default function LoginScreen() {
  return (
    <section className="login center">
      <h1 className="h3">Login</h1>
      <LoginForm />
      <p className="or">or</p>
      <p>
        Need an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
}
