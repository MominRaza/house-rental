import React, { useRef, useState } from "react";
import { useAuth } from "../../hooks/AuthContext";

import { Link, useHistory } from "react-router-dom";

export default function LoginScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/user");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <section className="login center">
      <h1 className="h3">Login</h1>
      <form className="card left rd-4" onSubmit={handleSubmit}>
        {error && (
          <div className="card b-danger">
            <div className="material-icons">error_outline</div>
            {error}
          </div>
        )}
        <label>
          Email address:
          <input
            type="email"
            name="emailAddress"
            placeholder="Enter email"
            ref={emailRef}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            ref={passwordRef}
            required
          />
        </label>
        <input
          type="submit"
          value="Login"
          className="btn primary"
          disabled={loading}
        />
      </form>
      <p className="or">or</p>
      <p>
        Need an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
}
