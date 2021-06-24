import React from "react";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import Basic from "./components/basic";
import Price from "./components/price";
import Address from "./components/address";
import PhotosVideos from "./components/photosVideos";

function ListProperty() {
  let match = useRouteMatch();

  return (
    <section className="list-property">
      <h1>List Property</h1>
      <div className="tab">
        <NavLink
          exact
          to={match.url}
          className="tab-item"
          activeClassName="selected"
        >
          Basic Information
        </NavLink>
        <NavLink
          to={`${match.url}/price`}
          className="tab-item"
          activeClassName="selected"
        >
          Price
        </NavLink>
        <NavLink
          to={`${match.url}/address`}
          className="tab-item"
          activeClassName="selected"
        >
          Address
        </NavLink>
        <NavLink
          to={`${match.url}/photos-videos`}
          className="tab-item"
          activeClassName="selected"
        >
          Photos/Videos
        </NavLink>
      </div>

      <Switch>
        <Route exact path={match.path}>
          <Basic />
        </Route>
        <Route path={`${match.path}/price`}>
          <Price />
        </Route>
        <Route path={`${match.path}/address`}>
          <Address />
        </Route>
        <Route path={`${match.path}/photos-videos`}>
          <PhotosVideos />
        </Route>
      </Switch>
    </section>
  );
}

export default ListProperty;
