import React from "react";
import { useLocation } from "react-router-dom";
import DoSearch from "./DoSearch";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  let query = useQuery();

  return (
    <DoSearch
      location={query.get("location")}
      search={query.get("search")}
      want={query.get("want")}
      type={query.get("type")}
      status={query.get("status")}
      bhk={query.get("bhk")}
      price={query.get("price")}
    />
  );
}
