import React, { Component } from "react";

import NewsItem from "../components/news-item";

class News extends Component {
  state = {};
  render() {
    return (
      <section className="news-page">
<<<<<<< HEAD
        <h1 className="h3">News Segment</h1>
        <p className="b1">Read things happening in Real Estate</p>
        {this.state.news.map((newsItem) => (
=======
        <h1 className="h3">News and Articles</h1>
        <p className="b1">Read what's happening in Real Estate</p>
        {this.props.news.map((newsItem) => (
>>>>>>> cacd12268f2a2133430f4532061a7a0316f96f21
          <div className="list-item">
            <NewsItem news={newsItem} />
          </div>
        ))}
      </section>
    );
  }
}

export default News;
