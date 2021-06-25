import React, { Component } from "react";

import NewsItem from "../components/news-item";

class News extends Component {
  state = {};
  render() {
    return (
      <section className="news">
        <h1 className="h3">News and Articles</h1>
        <p className="b1">Read what's happening in Real Estate</p>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </section>
    );
  }
}

export default News;
