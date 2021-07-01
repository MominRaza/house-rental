import React, { useState, useEffect } from "react";

import Result from "./components/result";
import Filter from "./components/filter";

import { firestore } from "../../firebase_config";

export default function DoSearch(props) {
  const [properties, setProperties] = useState([]);
  const [bhk, setBhk] = useState();

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
    if (props.bhk === "3  BHK") {
      setBhk("3+ BHK");
    } else {
      setBhk(props.bhk);
    }
  }, [props.bhk]);

  return (
    <>
      <Filter />
      <div className="list results">
        {
          // eslint-disable-next-line
          properties.map((property) => {
            if (
              (!props.location || props.location === property.city) &&
              (!props.want || props.want === property.want) &&
              (!props.type || props.type === property.propertyType) &&
              (!props.status || props.status === property.constructionStatus) &&
              (!bhk || bhk === property.bhk)
            ) {
              return <Result key={property["id"]} property={property} />;
            }
          })
        }
      </div>
    </>
  );
}
