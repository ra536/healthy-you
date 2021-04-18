import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ArticleAPI from "../apis/ArticleAPI";
import { ListGroup, Container, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import ArticleComponent from "../components/ArticleComponent";
import TopNavBar from "../components/TopNavBar";

const LatestArticles = () => {
    let { count } = useParams();

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ArticleAPI.post("/latest",{
                    numOfArticles: count,
                });
                
                console.log("response:", response.data.data);

                setArticles(response.data.data);
                
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, []);

    return(
        <>
        <TopNavBar />
        <Container>
            <div align="center">
            <h1> Latest Articles </h1>
            </div>
            <br />

            {articles.map((article) => {
            return (
                <>
                <hr />
                <Row>
                    <ArticleComponent
                    article={article}
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

export default LatestArticles;