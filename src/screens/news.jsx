import React, { useEffect, useState } from "react";
import "firebase/firestore";

import NewsItem from "../components/news-item";

import { firestore } from "../firebase_config";

export default function News() {
  const [news, setNews] = useState([]);

  const getNews = () => {
    firestore.collection("news").onSnapshot((querySnapshot) => {
      setNews(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="news-page">
      <h1 className="h3">News Segment</h1>
      <p className="b1">Read things happening in Real Estate</p>
      {news.map((newsItem) => (
        <div key={newsItem["id"]} className="list-item">
          <NewsItem news={newsItem} />
        </div>
      ))}
    </section>
  );
}
