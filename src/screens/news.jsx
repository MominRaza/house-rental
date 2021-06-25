import React, { Component } from "react";

import NewsItem from "../components/news-item";

class News extends Component {
  state = {
    news: [
      {
        id: 1,
        title: "The pros and cons of buying agricultural land 1",
        details:
          "A number of urban investors are investing in agricultural land, owing to the slump in urban realty and the promise of greater long-term returns. We examine the benefits and risks, for those who wish to buy agricultural land.",
        news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates vitae error, incidunt earum et eaque, culpa tempore fugiat debitis quibusdam vero magni, dicta ipsum harum omnis deleniti ad? Nemo voluptate magni neque dolorum perferendis necessitatibus laboriosam nam facere provident quos deleniti quas beatae qui est dolore ipsum, expedita ducimus.",
        imageUrl: "images/news1.jpg",
      },
      {
        id: 2,
        title: "The pros and cons of buying agricultural land 2",
        details:
          "A number of urban investors are investing in agricultural land, owing to the slump in urban realty and the promise of greater long-term returns. We examine the benefits and risks, for those who wish to buy agricultural land.",
        news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates vitae error, incidunt earum et eaque, culpa tempore fugiat debitis quibusdam vero magni, dicta ipsum harum omnis deleniti ad? Nemo voluptate magni neque dolorum perferendis necessitatibus laboriosam nam facere provident quos deleniti quas beatae qui est dolore ipsum, expedita ducimus.",
        imageUrl: "images/news2.jpg",
      },
      {
        id: 3,
        title: "The pros and cons of buying agricultural land 3",
        details:
          "A number of urban investors are investing in agricultural land, owing to the slump in urban realty and the promise of greater long-term returns. We examine the benefits and risks, for those who wish to buy agricultural land.",
        news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates vitae error, incidunt earum et eaque, culpa tempore fugiat debitis quibusdam vero magni, dicta ipsum harum omnis deleniti ad? Nemo voluptate magni neque dolorum perferendis necessitatibus laboriosam nam facere provident quos deleniti quas beatae qui est dolore ipsum, expedita ducimus.",
        imageUrl: "images/news3.jpg",
      },
      {
        id: 4,
        title: "The pros and cons of buying agricultural land 4",
        details:
          "A number of urban investors are investing in agricultural land, owing to the slump in urban realty and the promise of greater long-term returns. We examine the benefits and risks, for those who wish to buy agricultural land.",
        news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates vitae error, incidunt earum et eaque, culpa tempore fugiat debitis quibusdam vero magni, dicta ipsum harum omnis deleniti ad? Nemo voluptate magni neque dolorum perferendis necessitatibus laboriosam nam facere provident quos deleniti quas beatae qui est dolore ipsum, expedita ducimus.",
        imageUrl: "images/news4.jpg",
      },
      {
        id: 5,
        title: "The pros and cons of buying agricultural land 5",
        details:
          "A number of urban investors are investing in agricultural land, owing to the slump in urban realty and the promise of greater long-term returns. We examine the benefits and risks, for those who wish to buy agricultural land.",
        news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates vitae error, incidunt earum et eaque, culpa tempore fugiat debitis quibusdam vero magni, dicta ipsum harum omnis deleniti ad? Nemo voluptate magni neque dolorum perferendis necessitatibus laboriosam nam facere provident quos deleniti quas beatae qui est dolore ipsum, expedita ducimus.",
        imageUrl: "images/news5.jpg",
      },
      {
        id: 6,
        title: "The pros and cons of buying agricultural land 6",
        details:
          "A number of urban investors are investing in agricultural land, owing to the slump in urban realty and the promise of greater long-term returns. We examine the benefits and risks, for those who wish to buy agricultural land.",
        news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates vitae error, incidunt earum et eaque, culpa tempore fugiat debitis quibusdam vero magni, dicta ipsum harum omnis deleniti ad? Nemo voluptate magni neque dolorum perferendis necessitatibus laboriosam nam facere provident quos deleniti quas beatae qui est dolore ipsum, expedita ducimus.",
        imageUrl: "images/news6.jpg",
      },
    ],
  };
  render() {
    return (
      <section className="news">
        <h1 className="h3">News and Articles</h1>
        <p className="b1">Read what's happening in Real Estate</p>
        {this.state.news.map((newsItem) => (
          <NewsItem news={newsItem} />
        ))}
      </section>
    );
  }
}

export default News;
