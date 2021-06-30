import React, { useState } from "react";

export default function SearchToggle() {
  const [icon, setIcon] = useState("search");

  function toggleMenu() {
    setIcon(icon === "search" ? "close" : "search");
    document.getElementById("searchBox").classList.toggle("active");
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
