import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewsItem extends Component {
  state = {};
  render() {
    const news = this.props.news.data;
    return (
      <Link to={"/news/" + this.props.news.id} className="flex-item card">
        <img src={news["imageUrl"]} alt={news["title"]} />
        <h3>{news["title"]}</h3>
        <p>{news["details"]}</p>
      </Link>
    );
  }
}

export default NewsItem;
