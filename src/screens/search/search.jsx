import React from "react";
import { useLocation } from "react-router-dom";
import DoSearch from "./DoSearch";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  let query = useQuery();

  return <DoSearch location={query.get("location")} />;
}
