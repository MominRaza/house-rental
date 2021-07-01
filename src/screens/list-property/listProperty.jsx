import React, { useState } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  NavLink,
  useHistory,
} from "react-router-dom";
import Basic from "./components/basic";
import Price from "./components/price";
import Address from "./components/address";
import PhotosVideos from "./components/photosVideos";

import { firestore } from "../../firebase_config";

function ListProperty() {
  const [propertyData, setPropertyData] = useState([]);
  const [error, setError] = useState("");
  const history = useHistory();

  let match = useRouteMatch();

  const getPropertyData = (data) => {
    console.log(data);
    let property = { ...propertyData, ...data };
    setPropertyData(property);
    console.log(property);
  };

  function listProperty() {
    if (
      propertyData.want &&
      propertyData.price &&
      propertyData.city &&
      propertyData.imageUrls &&
      propertyData.imageUrls.length
    ) {
      const propertiesRef = firestore.collection("properties");
      propertiesRef
        .doc()
        .set(propertyData)
        .then(() => {
          history.push("/search");
        })
        .catch((err) => {
          console.error(err);
        });
      setError("");
    } else {
      setError("Fill all the fields and save!");
    }
  }
  return (
    <section className="list-property center">
      <h1 className="h3">List Property</h1>
      <div className="tab">
        <NavLink
          exact
          to={match.url}
          className="tab-item black"
          activeClassName="selected"
        >
          Basic Information
        </NavLink>
        <NavLink
          to={`${match.url}/price`}
          className="tab-item black"
          activeClassName="selected"
        >
          Price
        </NavLink>
        <NavLink
          to={`${match.url}/address`}
          className="tab-item black"
          activeClassName="selected"
        >
          Address
        </NavLink>
        <NavLink
          to={`${match.url}/photos-videos`}
          className="tab-item black"
          activeClassName="selected"
        >
          Photos/Videos
        </NavLink>
      </div>
      {error && (
        <div className="card b-danger center">
          <i className="material-icons">error_outline</i>
          {error}
        </div>
      )}
      <Switch>
        <Route exact path={match.path}>
          <Basic
            propertyData={propertyData}
            addPropertyData={getPropertyData}
          />
        </Route>
        <Route path={`${match.path}/price`}>
          <Price
            propertyData={propertyData}
            addPropertyData={getPropertyData}
          />
        </Route>
        <Route path={`${match.path}/address`}>
          <Address
            propertyData={propertyData}
            addPropertyData={getPropertyData}
          />
        </Route>
        <Route path={`${match.path}/photos-videos`}>
          <PhotosVideos
            propertyData={propertyData}
            addPropertyData={getPropertyData}
            listProperty={listProperty}
          />
        </Route>
      </Switch>
    </section>
  );
}

export default ListProperty;
