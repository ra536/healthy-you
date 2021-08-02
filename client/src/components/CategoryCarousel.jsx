import React, { useState, useEffect } from "react";
import { Container, Row, Col, Badge} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import ArticleComponent from "./ArticleComponent";
import SocialShareButtons from "./SocialShareButtons";
import ArticleAPI from "../apis/ArticleAPI";

const CategoryCarousel = (props) => {
  // const articleInfo = props.article;
  // const writerInfo = props.writer;
  const category = props.category;
  const region = props.carouselRegion
  const link =
    "https://healthy-you-project.herokuapp.com/article/87918716-f71f-4548-aea3-ad0496d44c9a/" + region;

  const [articles, setArticles] = useState([]);

  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ArticleAPI.post("/numCategory",{
                    category: category,
                    num: 3,
                    currentRegion: region
                });
                
                console.log("response:", response.data.data);

                setArticles(response.data.data);
                
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, []);
  
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
        {articles.map((article) => {
          return (
            <Col>
              <ArticleComponent
                article={article}
                currentRegion={region}
                type="carousel"
              />
            </Col>
          );
        })}
      </Row>

      <br />
    </Container>
  );
};

export default CategoryCarousel;
