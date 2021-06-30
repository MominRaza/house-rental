import React, { useEffect, useState } from "react";
import "firebase/firestore";

import NewsItem from "../components/news-item";

import { firestore } from "../firebase_config";

export default function News() {
  const [news, setNews] = useState([]);

  const getNews = () => {
    firestore.collection("news").onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setNews(documents);
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="news-page center">
      <h1 className="h3">News Segment</h1>
      <p className="b1">Read things happening in Real Estate</p>
      {news.map((newsItem) => (
        <div key={newsItem["id"]} className="list-item left">
          <NewsItem news={newsItem} />
        </div>
      ))}
    </section>
  );
}
