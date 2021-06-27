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

  useEffect(() => {
    getNews();
  }, []);

  return <App news={news} />;
}

export default Firebase;
