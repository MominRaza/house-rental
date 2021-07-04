import React, { useState, useEffect } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";

export default function SearchSection() {
  const [want, setWant] = useState("Sell");
  const [location, setLocation] = useState("Lucknow");
  const [search, setSearch] = useState("");
  const history = useHistory();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#buy") {
      setWant("Sell");
    } else if (hash === "#rent") {
      setWant("Rent");
    } else if (hash === "#pg") {
      setWant("PG / Co Living");
    }
  }, [hash]);

  function handleSearch(e) {
    e.preventDefault();
    if (search) {
      history.push(
        "/search?search=" + search + "&location=" + location + "&want=" + want
      );
    }
  }

  return (
    <section className="home center">
      <h1 className="h3">
        {want} properties in {location}
      </h1>
      <h2 className="h5">Choose your quality life</h2>
      <div className="card bg-dark">
        <div className="tab">
          <NavLink
            to="#buy"
            isActive={() => {
              return (
                window.location.hash === "#buy" ||
                (window.location.pathname === "/" &&
                  window.location.hash === "")
              );
            }}
            className="tab-item white"
            activeClassName="selected"
          >
            BUY
          </NavLink>
          <NavLink
            to="#rent"
            isActive={() => {
              return window.location.hash === "#rent";
            }}
            className="tab-item white"
            activeClassName="selected"
          >
            RENT
          </NavLink>
          <NavLink
            to="#pg"
            isActive={() => {
              return window.location.hash === "#pg";
            }}
            className="tab-item white"
            activeClassName="selected"
          >
            PG / Co Living
          </NavLink>
        </div>
        <form onSubmit={handleSearch}>
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
            id="search"
            placeholder="Search for locality, landmark, area, or builder"
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button type="submit" className="btn primary lg icon-l">
            <i className="material-icons">search</i>
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
