import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBox() {
  const [location, setLocation] = useState("Lucknow");
  const [search, setSearch] = useState("");
  const history = useHistory();

  function handleSearch(e) {
    e.preventDefault();
    if (search) {
      history.push("/search?search=" + search + "&location=" + location);
    }
  }

  return (
    <form className="search-box flex" id="searchBox" onSubmit={handleSearch}>
      <select name="location" onChange={(e) => setLocation(e.target.value)}>
        <option value="Lucknow">Lucknow</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Pune">Pune</option>
        <option value="Chennai">Chennai</option>
        <option value="Delhi">Delhi</option>
        <option value="Gurgaon">Gurgaon</option>
      </select>
      <input
        type="search"
        name="search"
        placeholder="Search for locality, landmark, project, or builder"
        onChange={(e) => setSearch(e.target.value)}
        required
      />
      <button type="submit" className="btn secondary icon-o">
        <i className="material-icons">search</i>
      </button>
    </form>
  );
}
