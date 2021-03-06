import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../../../hooks/AuthContext";
import { useHistory, useLocation } from "react-router-dom";

export default function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#/favourites") {
      setInfo("Login before adding items to your favourites list.");
    } else if (hash === "#/list-property") {
      setInfo("To list your property first login.");
    } else if (hash === "#/tenant-verification") {
      setInfo("Please login before verifying tenant.");
    } else {
      setInfo("");
    }
    // eslint-disable-next-line
  }, []);

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
    <form className="card left rd-4" onSubmit={handleSubmit}>
      {info && (
        <div className="card b-info center">
          <i className="material-icons">info_outline</i>
          {info}
        </div>
      )}
      {error && (
        <div className="card b-danger center">
          <i className="material-icons">error_outline</i>
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
  );
}
