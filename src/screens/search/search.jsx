import React, { useState, useEffect } from "react";
import "firebase/firestore";

import Result from "./components/result";
import Filter from "./components/filter";

import { firestore } from "../../firebase_config";

export default function Search() {
  const [properties, setProperties] = useState([]);

  const getProperties = () => {
    firestore.collection("properties").onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setProperties(documents);
    });
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      <Filter />
      <div className="list results">
        {properties.map((property) => (
          <Result key={property["id"]} property={property} />
        ))}
      </div>
    </>
  );
}
