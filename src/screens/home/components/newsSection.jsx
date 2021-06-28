import React, { useEffect, useState } from "react";
import "firebase/firestore";

import NewsItem from "../../../components/news-item";

import { firestore } from "../../../firebase_config";

export default function NewsSection() {
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
    <section className="news">
      <div>
        <h2 className="h4">News Segment</h2>
        <p>Read things happening in Real Estate</p>
        <div className="flex">
          {news.map((newsItem) => (
            <NewsItem key={newsItem["id"]} news={newsItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
