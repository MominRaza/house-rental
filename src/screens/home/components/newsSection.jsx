import React, { Component } from "react";

import NewsItem from "../../../components/news-item";

class NewsSection extends Component {
  state = {};
  render() {
    return (
      <section className="news">
        <div>
          <h2 className="h4">News Segment</h2>
          <p>Read things happening in Real Estate</p>
          <div className="flex">
            {this.props.news.map((newsItem) => (
              <NewsItem news={newsItem} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default NewsSection;
