import React, { useEffect, useState } from "react";
import { matchPath, useLocation } from "react-router";
import "firebase/firestore";

import { firestore } from "../firebase_config";

export default function SingleNews() {
  const match = matchPath(useLocation().pathname, { path: "/news/:id" });

  const [news, setNews] = useState([]);

  const getNews = () => {
    firestore
      .collection("news")
      .doc(match.params["id"])
      .onSnapshot((querySnapshot) => {
        setNews(querySnapshot.data());
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="single-news">
      <h1 className="h4">{news["title"]}</h1>
      <div className="card rd-4">
        <img src={"../" + news["imageUrl"]} alt={news["title"]} />
        <p
          className="b1"
          dangerouslySetInnerHTML={{ __html: news["news"] }}
        ></p>
      </div>
    </section>
  );
}