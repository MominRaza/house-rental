import React, { useEffect, useState } from "react";
import App from "./App";

import "firebase/firestore";

import { firestore } from "./firebase_config";

function Firebase() {
  const [properties, setProperties] = useState([]);

  function getProperties() {
    const propertiesRef = firestore.collection("properties");
    propertiesRef.onSnapshot((querySnapshot) => {
      const properties = [];
      querySnapshot.forEach((doc) => {
        properties.push(doc.data());
      });
      setProperties(properties);
    });
  }
  function addAddress(newAddress) {
    const propertiesRef = firestore.collection("properties");
    propertiesRef
      .doc()
      .set(newAddress)
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getProperties();
  }, []);

  return <App properties={properties} addAddress={addAddress} />;
}

export default Firebase;
