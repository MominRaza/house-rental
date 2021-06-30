import React, { useState, useEffect } from "react";

import Result from "./components/result";
import Filter from "./components/filter";

import { firestore } from "../../firebase_config";

export default function DoSearch(props) {
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
        {
          // eslint-disable-next-line
          properties.map((property) => {
            if (!props.location) {
              return <Result key={property["id"]} property={property} />;
            }
            if (props.location === property.city) {
              return <Result key={property["id"]} property={property} />;
            }
          })
        }
      </div>
    </>
  );
}
