import React, { Component } from "react";

import NewsItem from "../components/news-item";

class News extends Component {
  state = {};
  render() {
    return (
      <section className="news-page">
        <h1 className="h3">News and Articles</h1>
        <p className="b1">Read what's happening in Real Estate</p>
        {this.props.news.map((newsItem) => (
          <div className="list-item">
            <NewsItem news={newsItem} />
          </div>
        ))}
      </section>
    );
  }
}

export default News;
