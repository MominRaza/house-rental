import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

import Login from "./login";

export default function UserLogo() {
  const { currentUser } = useAuth();
  const [loginModal, setLoginModal] = useState(false);

  function toggleLogin() {
    setLoginModal(!loginModal);
  }
  return currentUser ? (
    <Link to="/user" className="btn btn-o white rd-circle">
      <i className="material-icons">person</i>
    </Link>
  ) : (
    <>
      <Link to="#" className="btn btn-t white sm icon-l" onClick={toggleLogin}>
        <i className="material-icons md-18">person_outline</i>
        Login
      </Link>
      <Login loginModal={loginModal} onLoginToggle={toggleLogin} />
    </>
  );
}
