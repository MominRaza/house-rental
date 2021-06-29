import React, { useState } from "react";
import { Link } from "react-router-dom";

import Login from "./login";

export default function UserLogo() {
  const [loginModal, setLoginModal] = useState(false);

  function toggleLogin() {
    setLoginModal(!loginModal);
  }
  return (
    <>
      <Link to="#" className="btn btn-t white sm icon-l" onClick={toggleLogin}>
        <i className="material-icons md-18">person_outline</i>
        Login
      </Link>
      <Login loginModal={loginModal} onLoginToggle={toggleLogin} />
    </>
  );
}
