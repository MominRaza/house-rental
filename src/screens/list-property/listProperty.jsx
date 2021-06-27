import React from "react";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import Basic from "./components/basic";
import Price from "./components/price";
import Address from "./components/address";
import PhotosVideos from "./components/photosVideos";

function ListProperty(props) {
  let match = useRouteMatch();

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
          <Basic addAddress={props.addAddress} />
        </Route>
        <Route path={`${match.path}/price`}>
          <Price />
        </Route>
        <Route path={`${match.path}/address`}>
          <Address addAddress={props.addAddress} />
        </Route>
        <Route path={`${match.path}/photos-videos`}>
          <PhotosVideos />
        </Route>
      </Switch>
    </section>
  );
}

export default ListProperty;
