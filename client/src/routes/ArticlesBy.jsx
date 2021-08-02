import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ArticleAPI from "../apis/ArticleAPI";
import { ListGroup, Container, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import ArticleComponent from "../components/ArticleComponent";
import TopNavBar from "../components/TopNavBar";


const Author = () => {
    let { id, count, region } = useParams();

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ArticleAPI.post("/author",{
                    article_id: id,
                    numOfArticles: count,
                    region: region
                });

                setArticles(response.data.data);
                
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, []);


return(
    <>
      <TopNavBar currentRegion={region}/>
      <Container>
        <div align="center">
          <h1>{id} </h1>
        </div>
        <br />

        {articles.map((article) => {
          return (
            <>
              <hr />
              <Row>
                <ArticleComponent
                  article={article}
                  currentRegion={region}
                  writer="Anonymous Writer"
                  type="horizontal"
                />
                {/* {getAuthorName(article.writer_id)} */}
              </Row>
            </>
          );
        })}
      </Container>
    </>
);

};

export default Author;