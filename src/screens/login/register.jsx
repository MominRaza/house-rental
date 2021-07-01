import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../hooks/AuthContext";

import { Link, useHistory } from "react-router-dom";
import { firestore } from "../../firebase_config";

export default function Register() {
  const nameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  useEffect(() => {
    if (currentUser && currentUser.uid) {
      firestore
        .collection("users")
        .doc(currentUser.uid)
        .set({ number: numberRef.current.value })
        .then(() => history.push("/user"));
    }
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <section className="register center">
      <h1 className="h3">Register</h1>
      <form className="card left rd-4" onSubmit={handleSubmit}>
        {error && (
          <div className="card b-danger center">
            <i className="material-icons">error_outline</i>
            {error}
          </div>
        )}
        <label>
          Full name:
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            ref={nameRef}
            required
          />
        </label>
        <label>
          Mobile number:
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter mobile number"
            ref={numberRef}
            required
          />
        </label>
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
          Create password:
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            ref={passwordRef}
            required
          />
        </label>
        <label>
          Password confirmation:
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            ref={passwordConfirmRef}
            required
          />
        </label>
        <label>
          <input type="checkbox" name="terms" id="terms" required />
          Accept <Link to="/terms">terms</Link> and
          <Link to="/conditions">conditions</Link>.
        </label>
        <input
          type="submit"
          value="Register"
          className="btn primary"
          disabled={loading}
        />
      </form>
      <p className="or">or</p>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </section>
  );
}
