import React, { useEffect, useState } from "react";
import { firestore } from "../firebase_config";
import { useAuth } from "../hooks/AuthContext";
import Result from "./search/components/result";

export default function Favourites() {
  const [properties, setProperties] = useState([]);
  const { user } = useAuth();

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
    <section className="favorite">
      <h1 className="h3">My Favourites</h1>
      <div className="list results">
        {
          // eslint-disable-next-line
          properties.map((property) => {
            if (user.favourites.includes(property.id)) {
              return <Result key={property["id"]} property={property} />;
            }
          })
        }
      </div>
    </section>
  );
}
