import React, { Component } from "react";
import { Link } from "react-router-dom";

import news1 from "../../../images/news1.jpg";
import news2 from "../../../images/news2.jpg";
import news3 from "../../../images/news3.jpg";
import news4 from "../../../images/news4.jpg";
import news5 from "../../../images/news5.jpg";
import news6 from "../../../images/news6.jpg";

class NewsSection extends Component {
  state = {};
  render() {
    return (
      <section className="news">
        <div>
          <h2 className="h4">News &amp; Articles</h2>
          <p>Read what's happening in Real Estate</p>
          <div className="flex">
            <Link to="#" className="flex-item card">
              <img
                src={news1}
                alt="The pros and cons of buying agricultural land"
              />
              <h3>The pros and cons of buying agricultural land</h3>
              <p>
                A number of urban investors are investing in agricultural land,
                owing to the slump in urban realty and the promise of greater
                long-term returns. We examine the benefits and risks, for those
                who wish to buy agricultural land.
              </p>
            </Link>
            <Link to="#" className="flex-item card">
              <img
                src={news2}
                alt="The pros and cons of buying agricultural land"
              />
              <h3>The pros and cons of buying agricultural land</h3>
              <p>
                A number of urban investors are investing in agricultural land,
                owing to the slump in urban realty and the promise of greater
                long-term returns. We examine the benefits and risks, for those
                who wish to buy agricultural land.
              </p>
            </Link>
            <Link to="#" className="flex-item card">
              <img
                src={news3}
                alt="The pros and cons of buying agricultural land"
              />
              <h3>The pros and cons of buying agricultural land</h3>
              <p>
                A number of urban investors are investing in agricultural land,
                owing to the slump in urban realty and the promise of greater
                long-term returns. We examine the benefits and risks, for those
                who wish to buy agricultural land.
              </p>
            </Link>
            <Link to="#" className="flex-item card">
              <img
                src={news4}
                alt="The pros and cons of buying agricultural land"
              />
              <h3>The pros and cons of buying agricultural land</h3>
              <p>
                A number of urban investors are investing in agricultural land,
                owing to the slump in urban realty and the promise of greater
                long-term returns. We examine the benefits and risks, for those
                who wish to buy agricultural land.
              </p>
            </Link>
            <Link to="#" className="flex-item card">
              <img
                src={news5}
                alt="The pros and cons of buying agricultural land"
              />
              <h3>The pros and cons of buying agricultural land</h3>
              <p>
                A number of urban investors are investing in agricultural land,
                owing to the slump in urban realty and the promise of greater
                long-term returns. We examine the benefits and risks, for those
                who wish to buy agricultural land.
              </p>
            </Link>
            <Link to="#" className="flex-item card">
              <img
                src={news6}
                alt="The pros and cons of buying agricultural land"
              />
              <h3>The pros and cons of buying agricultural land</h3>
              <p>
                A number of urban investors are investing in agricultural land,
                owing to the slump in urban realty and the promise of greater
                long-term returns. We examine the benefits and risks, for those
                who wish to buy agricultural land.
              </p>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default NewsSection;
