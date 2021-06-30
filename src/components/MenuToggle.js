import React, { useState } from "react";

export default function MenuToggle() {
  const [icon, setIcon] = useState("menu");

  function toggleMenu() {
    setIcon(icon === "menu" ? "close" : "menu");
    document.getElementById("menu").classList.toggle("active");
  }
  return (
    <button
      className="btn btn-o white icon-o sm menu-toggle"
      onClick={toggleMenu}
    >
      <div className="material-icons">{icon}</div>
    </button>
  );
}
