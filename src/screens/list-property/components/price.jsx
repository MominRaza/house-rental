import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Price(props) {
  const [priceRange, setPriceRange] = useState(
    props.propertyData.priceRange || ""
  );
  const [price, setPrice] = useState(props.propertyData.price || "");
  const [rentMode, setRentMode] = useState(props.propertyData.rentMode || "");
  const [rentIncludes1, setRentIncludes1] = useState(
    props.propertyData.rentIncludes1 || false
  );
  const [rentIncludes2, setRentIncludes2] = useState(
    props.propertyData.rentIncludes2 || false
  );
  const [rentIncludes3, setRentIncludes3] = useState(
    props.propertyData.rentIncludes3 || false
  );
  const [rentIncludes4, setRentIncludes4] = useState(
    props.propertyData.rentIncludes4 || false
  );
  const [rentExcludes1, setRentExcludes1] = useState(
    props.propertyData.rentExcludes1 || false
  );
  const [rentExcludes2, setRentExcludes2] = useState(
    props.propertyData.rentExcludes2 || false
  );
  const [rentExcludes3, setRentExcludes3] = useState(
    props.propertyData.rentExcludes3 || false
  );
  const [rentExcludes4, setRentExcludes4] = useState(
    props.propertyData.rentExcludes4 || false
  );
  const [propertyPerks1, setPropertyPerks1] = useState(
    props.propertyData.propertyPerks1 || false
  );
  const [propertyPerks2, setPropertyPerks2] = useState(
    props.propertyData.propertyPerks2 || false
  );
  const [propertyPerks3, setPropertyPerks3] = useState(
    props.propertyData.propertyPerks3 || false
  );
  const [propertyPerks4, setPropertyPerks4] = useState(
    props.propertyData.propertyPerks4 || false
  );
  const [propertyPerks5, setPropertyPerks5] = useState(
    props.propertyData.propertyPerks5 || false
  );
  const [propertyPerks6, setPropertyPerks6] = useState(
    props.propertyData.propertyPerks6 || false
  );
  const [propertyPerks7, setPropertyPerks7] = useState(
    props.propertyData.propertyPerks7 || false
  );
  const [propertyPerks8, setPropertyPerks8] = useState(
    props.propertyData.propertyPerks8 || false
  );
  const [propertyPerks9, setPropertyPerks9] = useState(
    props.propertyData.propertyPerks9 || false
  );
  const [propertyPerks10, setPropertyPerks10] = useState(
    props.propertyData.propertyPerks10 || false
  );
  const [propertyPerks11, setPropertyPerks11] = useState(
    props.propertyData.propertyPerks11 || false
  );

  const history = useHistory();

  return (
    <form
      className="card left"
      onSubmit={(event) => {
        event.preventDefault();
        props.addPropertyData({
          priceRange,
          price,
          rentMode,
          rentIncludes1,
          rentIncludes2,
          rentIncludes3,
          rentIncludes4,
          rentExcludes1,
          rentExcludes2,
          rentExcludes3,
          rentExcludes4,
          propertyPerks1,
          propertyPerks2,
          propertyPerks3,
          propertyPerks4,
          propertyPerks5,
          propertyPerks6,
          propertyPerks7,
          propertyPerks8,
          propertyPerks9,
          propertyPerks10,
          propertyPerks11,
        });
        history.push("/list-property/address");
      }}
    >
      <p>Price Range:</p>
      <div className="flex">
        <label>
          <input
            type="radio"
            name="priceRange"
            onChange={(e) => setPriceRange("Negotiable")}
            checked={priceRange === "Negotiable"}
            required
          />
          Negotiable
        </label>
        <label>
          <input
            type="radio"
            name="priceRange"
            onChange={(e) => setPriceRange("Non-negotiable")}
            checked={priceRange === "Non-negotiable"}
            required
          />
          Non-negotiable
        </label>
      </div>
      <div className="flex">
        <label>
          Price:
          <input
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
        </label>
      </div>
      <p>Rent Mode:</p>
      <div className="flex">
        <label>
          <input
            type="radio"
            name="rentMode"
            onChange={(e) => setRentMode("Online")}
            checked={rentMode === "Online"}
            required
          />
          Online
        </label>
        <label>
          <input
            type="radio"
            name="rentMode"
            onChange={(e) => setRentMode("Offline")}
            checked={rentMode === "Offline"}
            required
          />
          Offline
        </label>
        <label>
          <input
            type="radio"
            name="rentMode"
            onChange={(e) => setRentMode("Both")}
            checked={rentMode === "Both"}
            required
          />
          Both
        </label>
      </div>
      <div className="flex">
        <label>
          Rent:
          <input
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
        </label>
      </div>
      <p>Rent Includes:(Optional)</p>
      <div className="flex">
        <label>
          <input
            type="checkbox"
            name="rentIncludes"
            onChange={(e) => setRentIncludes1(!rentIncludes1)}
            checked={rentIncludes1}
          />
          Electricity Bill
        </label>
        <label>
          <input
            type="checkbox"
            name="rentIncludes"
            onChange={(e) => setRentIncludes2(!rentIncludes2)}
            checked={rentIncludes2}
          />
          Water Bill
        </label>
        <label>
          <input
            type="checkbox"
            name="rentIncludes"
            onChange={(e) => setRentIncludes3(!rentIncludes3)}
            checked={rentIncludes3}
          />
          Parking Bill
        </label>
        <label>
          <input
            type="checkbox"
            name="rentIncludes"
            onChange={(e) => setRentIncludes4(!rentIncludes4)}
            checked={rentIncludes4}
          />
          Maintenance Bill
        </label>
      </div>
      <p>Rent Excludes:(Optional)</p>
      <div className="flex">
        <label>
          <input
            type="checkbox"
            name="rentExcludes"
            onChange={(e) => setRentExcludes1(!rentExcludes1)}
            checked={rentExcludes1}
          />
          Electricity Bill
        </label>
        <label>
          <input
            type="checkbox"
            name="rentExcludes"
            onChange={(e) => setRentExcludes2(!rentExcludes2)}
            checked={rentExcludes2}
          />
          Water Bill
        </label>
        <label>
          <input
            type="checkbox"
            name="rentExcludes"
            onChange={(e) => setRentExcludes3(!rentExcludes3)}
            checked={rentExcludes3}
          />
          Parking Bill
        </label>
        <label>
          <input
            type="checkbox"
            name="rentExcludes"
            onChange={(e) => setRentExcludes4(!rentExcludes4)}
            checked={rentExcludes4}
          />
          Maintenance Bill
        </label>
      </div>
      <p>Property Perks:</p>
      <div className="flex">
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks1(!propertyPerks1)}
            checked={propertyPerks1}
          />
          Inverter
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks2(!propertyPerks2)}
            checked={propertyPerks2}
          />
          A.C.
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks3(!propertyPerks3)}
            checked={propertyPerks3}
          />
          T.V.
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks4(!propertyPerks4)}
            checked={propertyPerks4}
          />
          Water Purifier
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks5(!propertyPerks5)}
            checked={propertyPerks5}
          />
          Cooler
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks6(!propertyPerks6)}
            checked={propertyPerks6}
          />
          Fan
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks7(!propertyPerks7)}
            checked={propertyPerks7}
          />
          Light
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks8(!propertyPerks8)}
            checked={propertyPerks8}
          />
          Refrigerator
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks9(!propertyPerks9)}
            checked={propertyPerks9}
          />
          Table
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks10(!propertyPerks10)}
            checked={propertyPerks10}
          />
          Chair
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks11(!propertyPerks11)}
            checked={propertyPerks11}
          />
          Cupboard
        </label>
      </div>
      <div className="flex submit">
        <button type="submit" className="btn primary">
          Save &amp; Continue
        </button>
        <Link to="/list-property" className="btn secondary">
          Back
        </Link>
      </div>
    </form>
  );
}

export default Price;
