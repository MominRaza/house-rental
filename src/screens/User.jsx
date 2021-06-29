import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../hooks/AuthContext";

export default function User() {
  const [error, setError] = useState("");
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
        <strong>Email:</strong> {currentUser.email}
        <button className="btn danger" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </section>
  );
}
