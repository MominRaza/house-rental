import React from "react";
import { matchPath, useLocation } from "react-router";

function SingleNews(props) {
  const match = matchPath(useLocation().pathname, { path: "/news/:id" });
  const singleNews = props.news.find((news) => {
    return news.id.toString() === match.params["id"];
  });

  return (
    <section className="single-news">
      <h1 className="h3">{singleNews["title"]}</h1>
      <img src={"../" + singleNews["imageUrl"]} alt={singleNews["title"]} />
      <p dangerouslySetInnerHTML={{ __html: singleNews["news"] }}></p>
    </section>
  );
}

export default SingleNews;
