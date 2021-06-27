import React, { useState } from "react";

function Basic(props) {
  const [want, setWant] = useState("");
  const [propertyPurpose, setPropertyPurpose] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [constructionStatus, setConstructionStatus] = useState("");
  const [bhk, setBhk] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [balcony, setBalcony] = useState("");
  const [furnishType, setFurnishType] = useState("");
  const [parking, setParking] = useState("");
  const [area, setArea] = useState("");

  return (
    <form
      className="card left"
      onSubmit={(event) => {
        event.preventDefault();
        props.addAddress({
          want,
          propertyPurpose,
          propertyType,
          constructionStatus,
          bhk,
          bathroom,
          balcony,
          furnishType,
          parking,
          area,
        });
      }}
    >
      <p>I want to:</p>
      <div className="flex">
        <label>
          <input
            type="radio"
            name="want"
            onChange={(e) => setWant("Sell")}
            required
          />
          Sell
        </label>
        <label>
          <input
            type="radio"
            name="wantTo"
            onChange={(e) => setWant("Rent")}
            required
          />
          Rent
        </label>
        <label>
          <input
            type="radio"
            name="wantTo"
            onChange={(e) => setWant("PG / Co Living")}
            required
          />
          PG / Co Living
        </label>
      </div>
      <p>Property purpose:</p>
      <div className="flex">
        <label>
          <input
            type="radio"
            name="propertyPurpose"
            onChange={(e) => setPropertyPurpose("Housing")}
            required
          />
          Housing
        </label>
        <label>
          <input
            type="radio"
            name="propertyPurpose"
            onChange={(e) => setPropertyPurpose("Business")}
            required
          />
          Business
        </label>
      </div>
      <p>Property type:</p>
      <div className="flex">
        <label>
          <input
            type="radio"
            name="propertyType"
            onChange={(e) => setPropertyType("Apartment/House")}
            required
          />
          Apartment/House
        </label>
        <label>
          <input
            type="radio"
            name="propertyType"
            onChange={(e) => setPropertyType("Independent (House / Floor)")}
            required
          />
          Independent (House / Floor)
        </label>
        <label>
          <input
            type="radio"
            name="propertyType"
            onChange={(e) => setPropertyType("Plot")}
            required
          />
          Plot
        </label>
        <label>
          <input
            type="radio"
            name="propertyType"
            onChange={(e) => setPropertyType("Agricultural Land")}
            required
          />
          Agricultural Land
        </label>
        <label>
          <input
            type="radio"
            name="propertyType"
            onChange={(e) => setPropertyType("Farm House")}
            required
          />
          Farm House
        </label>
        <label>
          <input
            type="radio"
            name="propertyType"
            onChange={(e) => setPropertyType("Hotel")}
            required
          />
          Hotel
        </label>
        <label>
          <input
            type="radio"
            name="propertyType"
            onChange={(e) => setPropertyType("Party Place")}
            required
          />
          Party Place
        </label>
      </div>
      <p>Construction Status:</p>
      <div className="flex">
        <label>
          <input
            type="radio"
            name="constructionStatus"
            onChange={(e) => setConstructionStatus("Ready to move")}
            required
          />
          Ready to move
        </label>
        <label>
          <input
            type="radio"
            name="constructionStatus"
            onChange={(e) => setConstructionStatus("Under construction")}
            required
          />
          Under construction
        </label>
      </div>
      <p>BHK:</p>
      <div className="flex">
        <label>
          <input
            type="radio"
            name="bhk"
            onChange={(e) => setBhk("Single Room")}
            required
          />
          Single Room
        </label>
        <label>
          <input
            type="radio"
            name="bhk"
            onChange={(e) => setBhk("1 BHK")}
            required
          />
          1 BHK
        </label>
        <label>
          <input
            type="radio"
            name="bhk"
            onChange={(e) => setBhk("2 BHK")}
            required
          />
          2 BHK
        </label>
        <label>
          <input
            type="radio"
            name="bhk"
            onChange={(e) => setBhk("3 BHK")}
            required
          />
          3 BHK
        </label>
        <label>
          <input
            type="radio"
            name="bhk"
            onChange={(e) => setBhk("3+ BHK")}
            required
          />
          3+ BHK
        </label>
      </div>
      <p>Bathroom:</p>
      <div className="flex">
        <label>
          <input
            type="radio"
            name="bathroom"
            onChange={(e) => setBathroom("0")}
            required
          />
          0
        </label>
        <label>
          <input
            type="radio"
            name="bathroom"
            onChange={(e) => setBathroom("1")}
            required
          />
          1
        </label>
        <label>
          <input
            type="radio"
            name="bathroom"
            onChange={(e) => setBathroom("2")}
            required
          />
          2
        </label>
        <label>
          <input
            type="radio"
            name="bathroom"
            onChange={(e) => setBathroom("3")}
            required
          />
          3
        </label>
        <label>
          <input
            type="radio"
            name="bathroom"
            onChange={(e) => setBathroom("3+")}
            required
          />
          3+
        </label>
      </div>
      <p>Balcony:</p>
      <div className="flex">
        <label>
          <input
            type="radio"
            name="balcony"
            onChange={(e) => setBalcony("0")}
            required
          />
          0
        </label>
        <label>
          <input
            type="radio"
            name="balcony"
            onChange={(e) => setBalcony("1")}
            required
          />
          1
        </label>
        <label>
          <input
            type="radio"
            name="balcony"
            onChange={(e) => setBalcony("2")}
            required
          />
          2
        </label>
        <label>
          <input
            type="radio"
            name="balcony"
            onChange={(e) => setBalcony("3")}
            required
          />
          3
        </label>
        <label>
          <input
            type="radio"
            name="balcony"
            onChange={(e) => setBalcony("3+")}
            required
          />
          3+
        </label>
      </div>
      <p>Furnish Type:</p>
      <div className="flex">
        <label>
          <input
            type="radio"
            name="furnishType"
            onChange={(e) => setFurnishType("Fully Furnished")}
            required
          />
          Fully Furnished
        </label>
        <label>
          <input
            type="radio"
            name="furnishType"
            onChange={(e) => setFurnishType("Semi Furnished")}
            required
          />
          Semi Furnished
        </label>
        <label>
          <input
            type="radio"
            name="furnishType"
            onChange={(e) => setFurnishType("Unfurnished")}
            required
          />
          Unfurnished
        </label>
      </div>
      <p>Parking:</p>
      <div className="flex">
        <label>
          <input
            type="radio"
            name="parking"
            onChange={(e) => setParking("Covered")}
            required
          />
          Covered
        </label>
        <label>
          <input
            type="radio"
            name="parking"
            onChange={(e) => setParking("Uncovered")}
            required
          />
          Uncovered
        </label>
        <label>
          <input
            type="radio"
            name="parking"
            onChange={(e) => setParking("No parking")}
            required
          />
          No parking
        </label>
      </div>
      <p>Area:</p>
      <div className="flex">
        <label>
          <input
            className="area"
            type="text"
            name="area"
            placeholder="Area of property"
            onChange={(e) => setArea(e.target.value)}
            required
          />
          Sq-ft
        </label>
      </div>
      <div className="flex submit">
        <input type="submit" value="Continue" className="btn primary" />
      </div>
    </form>
  );
}

export default Basic;
