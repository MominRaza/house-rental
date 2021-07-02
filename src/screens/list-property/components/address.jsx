import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Address(props) {
  const property = props.propertyData;

  const [city, setCity] = useState(property.city || "");
  const [building, setBuilding] = useState(property.building || "");
  const [locality, setLocality] = useState(property.locality || "");
  const [fflat, setFflat] = useState(property.fflat || "");
  const [floor, setFloor] = useState(property.floor || "");
  const [totalFloor, setTotalFloor] = useState(property.totalFloor || "");

  const history = useHistory();

  return (
    <form
      className="card left"
      onSubmit={(event) => {
        event.preventDefault();
        props.addPropertyData({
          city,
          building,
          locality,
          fflat,
          floor,
          totalFloor,
        });
        history.push("/list-property/photos-videos");
      }}
    >
      <p>Address:</p>
      <div className="flex">
        <label>
          City/Town
          <select
            name="city"
            onChange={(e) => setCity(e.target.value)}
            required
          >
            <option value="">Select city</option>
            <option value="Lucknow" selected={city === "Lucknow"}>
              Lucknow
            </option>
            <option value="Mumbai" selected={city === "Lucknow"}>
              Mumbai
            </option>
            <option value="Bengaluru" selected={city === "Lucknow"}>
              Bengaluru
            </option>
            <option value="Hyderabad" selected={city === "Lucknow"}>
              Hyderabad
            </option>
            <option value="Pune" selected={city === "Lucknow"}>
              Pune
            </option>
            <option value="Chennai" selected={city === "Lucknow"}>
              Chennai
            </option>
            <option value="Delhi" selected={city === "Lucknow"}>
              Delhi
            </option>
            <option value="Gurgaon" selected={city === "Lucknow"}>
              Gurgaon
            </option>
          </select>
        </label>
      </div>
      <div className="flex">
        <label>
          Building/House No./Project/Society
          <input
            type="text"
            name="building"
            onChange={(e) => setBuilding(e.target.value)}
            value={building}
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
            value={locality}
            required
          />
        </label>
      </div>
      <div className="flex">
        <label className="flex-item">
          Flat No.
          <input
            type="number"
            name="flat"
            onChange={(e) => setFflat(e.target.value)}
            value={fflat}
            required
          />
        </label>
        <label className="flex-item">
          Floor No.
          <input
            type="number"
            name="floor"
            onChange={(e) => setFloor(e.target.value)}
            value={floor}
            required
          />
        </label>
        <label className="flex-item">
          Total Floors
          <input
            type="number"
            name="totalFloor"
            onChange={(e) => setTotalFloor(e.target.value)}
            value={totalFloor}
            required
          />
        </label>
      </div>
      <div className="flex submit">
        <button type="submit" className="btn primary">
          Save &amp; Continue
        </button>
        <Link to="/list-property/price" className="btn secondary">
          Back
        </Link>
      </div>
    </form>
  );
}

export default Address;
