import React from "react";
import { Link } from "react-router-dom";
import { Image, Col } from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone";
import "bootstrap/dist/css/bootstrap.css";
import SocialShareButtons from "./SocialShareButtons";
require("dotenv").config();

const ArticleComponent = (props) => {
  const componentType = props.type;
  const articleInfo = props.article;
  const writerInfo = props.writer;
  const link =
    "https://healthy-you-project.herokuapp.com/article/87918716-f71f-4548-aea3-ad0496d44c9a";

  if (componentType === "featured-large") {
    return (
      <Link
        to={"/article/" + articleInfo.article_id}
        style={{ textDecoration: "none", color: "black" }}
      >
        <span textAlign="left">
          <br />
          <Image
            src={articleInfo.image_data}
            className="mx-auto d-block"
            style={{ width: "70%" }}
            fluid
            rounded
          />
          <span style={{ color: "blue" }}>{articleInfo.category}</span>
          <h2>{articleInfo.headline}</h2>
          <p>{articleInfo.summary}</p>
          
        </span>
      </Link>
    );
  }
  if (componentType === "featured-small") {
    return (
      <Link
        to={"/article/" + articleInfo.article_id}
        style={{ textDecoration: "none", color: "black" }}
      >
        <span align="center">
          <Image src={articleInfo.image_data} fluid rounded />
          <span style={{ color: "blue" }}>{articleInfo.category}</span>
          <h4>{articleInfo.headline}</h4>
          <p>{articleInfo.summary}</p>
          
        </span>
      </Link>
    );
  }
  if (componentType === "horizontal") {
    return (
      <>
        <Col md="auto">
          <Link
            to={"/article/" + articleInfo.article_id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Image
              src={articleInfo.image_data}
              alt="strech"
              width={330}
              height={210}
              mode="fit"
              rounded
            />
          </Link>
        </Col>

        <Col>
          <Link
            to={"/article/" + articleInfo.article_id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <a href="/">{articleInfo.category}</a>
            <h4>{articleInfo.headline}</h4>

            {articleInfo.summary}

            <br />
            <small className="text-muted">
              {writerInfo} |{" "}
              <Moment format="dddd MMMM Do, YYYY">
                {articleInfo.createdAt}
              </Moment>
            </small>
            <br />
            
          </Link>
        </Col>
      </>
    );
  }
  if (componentType === "carousel") {
    return (
      <>
        <Link
          to={"/article/" + articleInfo.article_id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Image
            rounded
            src={articleInfo.image_data}
            alt="healthpic2"
            width={250}
            mode="fit"
          />
          <br />
          <span style={{ color: "blue" }}>{articleInfo.category}</span>
          <h4>{articleInfo.headline}</h4>
          <p>{articleInfo.summary}</p>
        </Link>
      </>
    );
  }
  return <></>;
};

export default ArticleComponent;
