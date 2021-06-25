import React, { Component } from "react";
import { Link } from "react-router-dom";

import news1 from "../images/news1.jpg";

class NewsItem extends Component {
  state = {};
  render() {
    return (
      <Link to="#" className="flex-item card">
        <img src={news1} alt="The pros and cons of buying agricultural land" />
        <h3>The pros and cons of buying agricultural land</h3>
        <p>
          A number of urban investors are investing in agricultural land, owing
          to the slump in urban realty and the promise of greater long-term
          returns. We examine the benefits and risks, for those who wish to buy
          agricultural land.
        </p>
      </Link>
    );
  }
}

export default NewsItem;
