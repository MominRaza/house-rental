import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Basic(props) {
  const property = props.propertyData;

  const [want, setWant] = useState(property.want || "");
  const [propertyPurpose, setPropertyPurpose] = useState(
    property.propertyPurpose || ""
  );
  const [propertyType, setPropertyType] = useState(property.propertyType || "");
  const [constructionStatus, setConstructionStatus] = useState(
    property.constructionStatus || ""
  );
  const [bhk, setBhk] = useState(property.bhk || "");
  const [bathroom, setBathroom] = useState(property.bathroom || "");
  const [balcony, setBalcony] = useState(property.balcony || "");
  const [furnishType, setFurnishType] = useState(property.furnishType || "");
  const [parking, setParking] = useState(property.parking || "");
  const [area, setArea] = useState(property.area || "");

  const history = useHistory();

  return (
    <form
      className="card left"
      onSubmit={(event) => {
        event.preventDefault();
        props.addPropertyData({
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
        history.push("/list-property/price");
      }}
    >
      <p>I want to:</p>
      <div className="flex">
        <label>
          <input
            type="radio"
            name="want"
            onChange={(e) => setWant("Sell")}
            checked={want === "Sell"}
            required
          />
          Sell
        </label>
        <label>
          <input
            type="radio"
            name="want"
            onChange={(e) => setWant("Rent")}
            checked={want === "Rent"}
            required
          />
          Rent
        </label>
        <label>
          <input
            type="radio"
            name="want"
            onChange={(e) => setWant("PG / Co Living")}
            checked={want === "PG / Co Living"}
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
            checked={propertyPurpose === "Housing"}
            required
          />
          Housing
        </label>
        <label>
          <input
            type="radio"
            name="propertyPurpose"
            onChange={(e) => setPropertyPurpose("Business")}
            checked={propertyPurpose === "Business"}
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
            checked={propertyType === "Apartment/House"}
            required
          />
          Apartment/House
        </label>
        <label>
          <input
            type="radio"
            name="propertyType"
            onChange={(e) => setPropertyType("Independent (House / Floor)")}
            checked={propertyType === "Independent (House / Floor)"}
            required
          />
          Independent (House / Floor)
        </label>
        <label>
          <input
            type="radio"
            name="propertyType"
            onChange={(e) => setPropertyType("Plot")}
            checked={propertyType === "Plot"}
            required
          />
          Plot
        </label>
        <label>
          <input
            type="radio"
            name="propertyType"
            onChange={(e) => setPropertyType("Agricultural Land")}
            checked={propertyType === "Agricultural Land"}
            required
          />
          Agricultural Land
        </label>
        <label>
          <input
            type="radio"
            name="propertyType"
            onChange={(e) => setPropertyType("Farm House")}
            checked={propertyType === "Farm House"}
            required
          />
          Farm House
        </label>
        <label>
          <input
            type="radio"
            name="propertyType"
            onChange={(e) => setPropertyType("Hotel")}
            checked={propertyType === "Hotel"}
            required
          />
          Hotel
        </label>
        <label>
          <input
            type="radio"
            name="propertyType"
            onChange={(e) => setPropertyType("Party Place")}
            checked={propertyType === "Party Place"}
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
            checked={constructionStatus === "Ready to move"}
            required
          />
          Ready to move
        </label>
        <label>
          <input
            type="radio"
            name="constructionStatus"
            onChange={(e) => setConstructionStatus("Under construction")}
            checked={constructionStatus === "Under construction"}
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
            checked={bhk === "Single Room"}
            required
          />
          Single Room
        </label>
        <label>
          <input
            type="radio"
            name="bhk"
            onChange={(e) => setBhk("1 BHK")}
            checked={bhk === "1 BHK"}
            required
          />
          1 BHK
        </label>
        <label>
          <input
            type="radio"
            name="bhk"
            onChange={(e) => setBhk("2 BHK")}
            checked={bhk === "2 BHK"}
            required
          />
          2 BHK
        </label>
        <label>
          <input
            type="radio"
            name="bhk"
            onChange={(e) => setBhk("3 BHK")}
            checked={bhk === "3 BHK"}
            required
          />
          3 BHK
        </label>
        <label>
          <input
            type="radio"
            name="bhk"
            onChange={(e) => setBhk("3+ BHK")}
            checked={bhk === "3+ BHK"}
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
            checked={bathroom === "0"}
            required
          />
          0
        </label>
        <label>
          <input
            type="radio"
            name="bathroom"
            onChange={(e) => setBathroom("1")}
            checked={bathroom === "1"}
            required
          />
          1
        </label>
        <label>
          <input
            type="radio"
            name="bathroom"
            onChange={(e) => setBathroom("2")}
            checked={bathroom === "2"}
            required
          />
          2
        </label>
        <label>
          <input
            type="radio"
            name="bathroom"
            onChange={(e) => setBathroom("3")}
            checked={bathroom === "3"}
            required
          />
          3
        </label>
        <label>
          <input
            type="radio"
            name="bathroom"
            onChange={(e) => setBathroom("3+")}
            checked={bathroom === "3+"}
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
            checked={balcony === "0"}
            required
          />
          0
        </label>
        <label>
          <input
            type="radio"
            name="balcony"
            onChange={(e) => setBalcony("1")}
            checked={balcony === "1"}
            required
          />
          1
        </label>
        <label>
          <input
            type="radio"
            name="balcony"
            onChange={(e) => setBalcony("2")}
            checked={balcony === "2"}
            required
          />
          2
        </label>
        <label>
          <input
            type="radio"
            name="balcony"
            onChange={(e) => setBalcony("3")}
            checked={balcony === "3"}
            required
          />
          3
        </label>
        <label>
          <input
            type="radio"
            name="balcony"
            onChange={(e) => setBalcony("3+")}
            checked={balcony === "3+"}
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
            checked={furnishType === "Fully Furnished"}
            required
          />
          Fully Furnished
        </label>
        <label>
          <input
            type="radio"
            name="furnishType"
            onChange={(e) => setFurnishType("Semi Furnished")}
            checked={furnishType === "Semi Furnished"}
            required
          />
          Semi Furnished
        </label>
        <label>
          <input
            type="radio"
            name="furnishType"
            onChange={(e) => setFurnishType("Unfurnished")}
            checked={furnishType === "Unfurnished"}
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
            checked={parking === "Covered"}
            required
          />
          Covered
        </label>
        <label>
          <input
            type="radio"
            name="parking"
            onChange={(e) => setParking("Uncovered")}
            checked={parking === "Uncovered"}
            required
          />
          Uncovered
        </label>
        <label>
          <input
            type="radio"
            name="parking"
            onChange={(e) => setParking("No parking")}
            checked={parking === "No parking"}
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
            value={area}
            required
          />
          Sq-ft
        </label>
      </div>
      <div className="flex submit">
        <input
          type="submit"
          value="Save &amp; Continue"
          className="btn primary"
        />
      </div>
    </form>
  );
}

export default Basic;
