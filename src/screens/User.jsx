import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { firestore } from "../firebase_config";

export default function User() {
  const [error, setError] = useState("");
  const [user, setUser] = useState();
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  useEffect(() => {
    firestore
      .collection("users")
      .doc(currentUser.uid)
      .onSnapshot((snap) => {
        setUser(snap.data());
      });
    // eslint-disable-next-line
  }, []);

  return (
    <section className="user">
      <h1 className="h3">Profile</h1>
      <div className="card">
        {error && (
          <div className="card b-danger">
            <div className="material-icons">error_outline</div>
            {error}
          </div>
        )}
        <p>
          <strong>Name:</strong> {currentUser.displayName}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p>
          <strong>Number:</strong> {user && user.number}
        </p>
        <button className="btn danger" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </section>
  );
}
