import React from "react";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import Basic from "./components/basic";
import Price from "./components/price";
import Address from "./components/address";
import PhotosVideos from "./components/photosVideos";

import { firestore } from "../../firebase_config";

function ListProperty(props) {
  let match = useRouteMatch();

  function addAddress(newAddress) {
    const propertiesRef = firestore.collection("properties");
    propertiesRef
      .doc()
      .set(newAddress)
      .catch((err) => {
        console.error(err);
      });
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

      <Switch>
        <Route exact path={match.path}>
          <Basic addAddress={addAddress} />
        </Route>
        <Route path={`${match.path}/price`}>
          <Price addAddress={addAddress} />
        </Route>
        <Route path={`${match.path}/address`}>
          <Address addAddress={addAddress} />
        </Route>
        <Route path={`${match.path}/photos-videos`}>
          <PhotosVideos addAddress={addAddress} />
        </Route>
      </Switch>
    </section>
  );
}

export default ListProperty;
