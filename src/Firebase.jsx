import React, { useEffect, useState } from "react";
import App from "./App";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDqJ-H3NokIlduGW6KgrszrteTuJi8S4QE",
  authDomain: "house-rental-2d711.firebaseapp.com",
  projectId: "house-rental-2d711",
  storageBucket: "house-rental-2d711.appspot.com",
  messagingSenderId: "703732108055",
  appId: "1:703732108055:web:4d40f536e511e631d9c552",
});

// const auth = firebase.auth();
const firestore = firebase.firestore();

function Firebase() {
  const [news, setNews] = useState([]);
  const [properties, setProperties] = useState([]);

  function getNews() {
    const newsRef = firestore.collection("news");
    newsRef.onSnapshot((querySnapshot) => {
      const news = [];
      querySnapshot.forEach((doc) => {
        news.push(doc.data());
      });
      setNews(news);
    });
  }
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
    getNews();
    getProperties();
  }, []);

  return <App news={news} properties={properties} addAddress={addAddress} />;
}

export default Firebase;
