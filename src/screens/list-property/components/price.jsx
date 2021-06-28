import React, { useState } from "react";

function Price(props) {
  const [priceRange, setPriceRange] = useState("");
  const [price, setPrice] = useState("");
  const [rentMode, setRentMode] = useState("");
  const [rentIncludes1, setRentIncludes1] = useState("");
  const [rentIncludes2, setRentIncludes2] = useState("");
  const [rentIncludes3, setRentIncludes3] = useState("");
  const [rentIncludes4, setRentIncludes4] = useState("");
  const [rentExcludes1, setRentExcludes1] = useState("");
  const [rentExcludes2, setRentExcludes2] = useState("");
  const [rentExcludes3, setRentExcludes3] = useState("");
  const [rentExcludes4, setRentExcludes4] = useState("");
  const [propertyPerks1, setPropertyPerks1] = useState("");
  const [propertyPerks2, setPropertyPerks2] = useState("");
  const [propertyPerks3, setPropertyPerks3] = useState("");
  const [propertyPerks4, setPropertyPerks4] = useState("");
  const [propertyPerks5, setPropertyPerks5] = useState("");
  const [propertyPerks6, setPropertyPerks6] = useState("");
  const [propertyPerks7, setPropertyPerks7] = useState("");
  const [propertyPerks8, setPropertyPerks8] = useState("");
  const [propertyPerks9, setPropertyPerks9] = useState("");
  const [propertyPerks10, setPropertyPerks10] = useState("");
  const [propertyPerks11, setPropertyPerks11] = useState("");

  return (
    <form
      className="card left"
      onSubmit={(event) => {
        event.preventDefault();
        props.addAddress({
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
      }}
    >
      <p>Price Range:</p>
      <div className="flex">
        <label>
          <input
            type="radio"
            name="priceRange"
            onChange={(e) => setPriceRange("Negotiable")}
            required
          />
          Negotiable
        </label>
        <label>
          <input
            type="radio"
            name="priceRange"
            onChange={(e) => setPriceRange("Non-negotiable")}
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
            required
          />
          Online
        </label>
        <label>
          <input
            type="radio"
            name="rentMode"
            onChange={(e) => setRentMode("Offline")}
            required
          />
          Offline
        </label>
        <label>
          <input
            type="radio"
            name="rentMode"
            onChange={(e) => setRentMode("Both")}
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
            onChange={(e) => setRentIncludes1("Electricity Bill")}
          />
          Electricity Bill
        </label>
        <label>
          <input
            type="checkbox"
            name="rentIncludes"
            onChange={(e) => setRentIncludes2("Water Bill")}
          />
          Water Bill
        </label>
        <label>
          <input
            type="checkbox"
            name="rentIncludes"
            onChange={(e) => setRentIncludes3("Parking Bill")}
          />
          Parking Bill
        </label>
        <label>
          <input
            type="checkbox"
            name="rentIncludes"
            onChange={(e) => setRentIncludes4("Maintenance Bill")}
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
            onChange={(e) => setRentExcludes1("Electricity Bill")}
          />
          Electricity Bill
        </label>
        <label>
          <input
            type="checkbox"
            name="rentExcludes"
            onChange={(e) => setRentExcludes2(" Water Bill")}
          />
          Water Bill
        </label>
        <label>
          <input
            type="checkbox"
            name="rentExcludes"
            onChange={(e) => setRentExcludes3("Parking Bill")}
          />
          Parking Bill
        </label>
        <label>
          <input
            type="checkbox"
            name="rentExcludes"
            onChange={(e) => setRentExcludes4("Maintenance Bill")}
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
            onChange={(e) => setPropertyPerks1("Inverter")}
          />
          Inverter
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks2("A.C.")}
          />
          A.C.
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks3("T.V.")}
          />
          T.V.
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks4("Water Purifier")}
          />
          Water Purifier
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks5("Cooler")}
          />
          Cooler
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks6("Fan")}
          />
          Fan
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks7("Light")}
          />
          Light
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks8("Refrigerator")}
          />
          Refrigerator
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks9("Table")}
          />
          Table
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks10("Chair")}
          />
          Chair
        </label>
        <label>
          <input
            type="checkbox"
            name="propertyPerks"
            onChange={(e) => setPropertyPerks11("Cupboard")}
          />
          Cupboard
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

export default Price;
