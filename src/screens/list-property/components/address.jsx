import React, { useState } from "react";

function Address(props) {
  const [city, setCity] = useState("");
  const [building, setBuilding] = useState("");
  const [locality, setLocality] = useState("");
  const [flat, setFlat] = useState("");
  const [floor, setFloor] = useState("");
  const [totalFloor, setTotalFloor] = useState("");

  return (
    <form
      className="card left"
      onSubmit={(event) => {
        event.preventDefault();
        props.addAddress({
          city,
          building,
          locality,
          flat,
          floor,
          totalFloor,
        });
      }}
    >
      <p>Address:</p>
      <div className="flex">
        <label>
          City/Town
          <input
            type="text"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="flex">
        <label>
          Building/House No./Project/Society
          <input
            type="text"
            name="building"
            onChange={(e) => setBuilding(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="flex">
        <label>
          Locality
          <input
            type="text"
            name="locality"
            onChange={(e) => setLocality(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="flex">
        <label className="flex-item">
          Flat No.
          <input
            type="text"
            name="flat"
            onChange={(e) => setFlat(e.target.value)}
            required
          />
        </label>
        <label className="flex-item">
          Floor No.
          <input
            type="text"
            name="floor"
            onChange={(e) => setFloor(e.target.value)}
            required
          />
        </label>
        <label className="flex-item">
          Total Floors
          <input
            type="text"
            name="totalFloor"
            onChange={(e) => setTotalFloor(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="flex submit">
        <button type="submit" className="btn primary">
          Continue
        </button>
        <button className="btn secondary">Back</button>
      </div>
    </form>
  );
}

export default Address;
