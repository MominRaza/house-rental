import React, { Component } from "react";

import NewsItem from "../../../components/news-item";

class NewsSection extends Component {
  state = {};
  render() {
    return (
      <section className="news">
        <div>
          <h2 className="h4">News &amp; Articles</h2>
          <p>Read what's happening in Real Estate</p>
          <div className="flex">
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </div>
        </div>
      </section>
    );
  }
}

export default NewsSection;
