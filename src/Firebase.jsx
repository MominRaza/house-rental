import React from "react";
import App from "./App";

import "firebase/firestore";

import { firestore } from "./firebase_config";

function Firebase() {
  function addAddress(newAddress) {
    const propertiesRef = firestore.collection("properties");
    propertiesRef
      .doc()
      .set(newAddress)
      .catch((err) => {
        console.error(err);
      });
  }

  return <App addAddress={addAddress} />;
}

export default Firebase;
