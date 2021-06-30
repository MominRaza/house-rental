import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Price(props) {
  const property = props.propertyData;

  const [priceRange, setPriceRange] = useState(property.priceRange || "");
  const [price, setPrice] = useState(property.price || "");
  const [rentMode, setRentMode] = useState(property.rentMode || "");
  const [rentIncludes1, setRentIncludes1] = useState(
    property.rentIncludes1 || false
  );
  const [rentIncludes2, setRentIncludes2] = useState(
    property.rentIncludes2 || false
  );
  const [rentIncludes3, setRentIncludes3] = useState(
    property.rentIncludes3 || false
  );
  const [rentIncludes4, setRentIncludes4] = useState(
    property.rentIncludes4 || false
  );
  const [propertyPerks1, setPropertyPerks1] = useState(
    property.propertyPerks1 || false
  );
  const [propertyPerks2, setPropertyPerks2] = useState(
    property.propertyPerks2 || false
  );
  const [propertyPerks3, setPropertyPerks3] = useState(
    property.propertyPerks3 || false
  );
  const [propertyPerks4, setPropertyPerks4] = useState(
    property.propertyPerks4 || false
  );
  const [propertyPerks5, setPropertyPerks5] = useState(
    property.propertyPerks5 || false
  );
  const [propertyPerks6, setPropertyPerks6] = useState(
    property.propertyPerks6 || false
  );
  const [propertyPerks7, setPropertyPerks7] = useState(
    property.propertyPerks7 || false
  );
  const [propertyPerks8, setPropertyPerks8] = useState(
    property.propertyPerks8 || false
  );
  const [propertyPerks9, setPropertyPerks9] = useState(
    property.propertyPerks9 || false
  );
  const [propertyPerks10, setPropertyPerks10] = useState(
    property.propertyPerks10 || false
  );
  const [propertyPerks11, setPropertyPerks11] = useState(
    property.propertyPerks11 || false
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
      {!property.want && <p>First select want to sell or rent?</p>}
      {property.want === "Sell" && (
        <>
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
        </>
      )}
      {(property.want === "Rent" || property.want === "PG / Co Living") && (
        <>
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
          <p>Rent Includes:</p>
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
        </>
      )}
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
