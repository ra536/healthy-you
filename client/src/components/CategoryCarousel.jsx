import React from "react";
import { Container, Row, Col, Badge} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import ArticleComponent from "./ArticleComponent";
import SocialShareButtons from "./SocialShareButtons";

const CategoryCarousel = (props) => {
  // const articleInfo = props.article;
  // const writerInfo = props.writer;
  const category = props.category;
  const link =
    "https://healthy-you-project.herokuapp.com/article/87918716-f71f-4548-aea3-ad0496d44c9a";

  return (
    <Container id="health">
      <br />
      <div align="center">
      <Badge variant="primary">
        <h2>&nbsp;{category}&nbsp;</h2>
      </Badge>
        
      </div>
      <br />
      <Row>
        <Col>
          <ArticleComponent
            article={props.article}
            writer={props.writer}
            type="carousel"
          />
        </Col>

        <Col>
          <ArticleComponent
            article={props.article}
            writer={props.writer}
            type="carousel"
          />
        </Col>

        <Col>
          <ArticleComponent
            article={props.article}
            writer={props.writer}
            type="carousel"
          />
        </Col>
      </Row>

      <br />
    </Container>
  );
};

export default CategoryCarousel;
