import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Filter() {
  const [want, setWant] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [bhk, setBhk] = useState("");
  const history = useHistory();

  function handleFilter(e) {
    e.preventDefault();
    history.push(
      "/search?want=" +
        want +
        "&type=" +
        type +
        "&status=" +
        status +
        "&bhk=" +
        bhk
    );
  }

  function handleReset(e) {
    history.push("/search");
  }

  return (
    <section className="filters">
      <p>Filters</p>
      <form className="filter flex" onSubmit={handleFilter}>
        <select name="want" onChange={(e) => setWant(e.target.value)}>
          <option value="">I want to:</option>
          <option value="Sell">Buy</option>
          <option>Rent</option>
          <option>PG / Co Living</option>
        </select>
        <select name="type" onChange={(e) => setType(e.target.value)}>
          <option value="">Property type:</option>
          <option>Apartment/House</option>
          <option>Independent (House / Floor)</option>
          <option>Plot</option>
          <option>Agricultural Land</option>
          <option>Farm House</option>
          <option>Hotel</option>
          <option>Party Place</option>
        </select>
        <select name="status" onChange={(e) => setStatus(e.target.value)}>
          <option value="">Construction Status:</option>
          <option>Ready to move</option>
          <option>Under construction</option>
        </select>
        <select name="bhk" onChange={(e) => setBhk(e.target.value)}>
          <option value="">BHK Type:</option>
          <option>Single Room</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>3+ BHK</option>
        </select>
        <button type="reset" className="btn secondary" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className="btn primary">
          Apply
        </button>
      </form>
    </section>
  );
}
