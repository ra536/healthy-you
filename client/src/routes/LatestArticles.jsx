import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ArticleAPI from "../apis/ArticleAPI";
import { ListGroup, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import ArticleComponent from "../components/ArticleComponent";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

const LatestArticles = () => {
    let { count, region } = useParams();

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
				
				// Display the parameters gathered in the url.
				console.log(count);
				console.log(region);
				
                const response = await ArticleAPI.post("/latest",{
                    numOfArticles: count,
					currentRegion: region,
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
        <TopNavBar currentRegion={region}/>
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
        <br />
        <br />
        <br />
        <Footer currentRegion={region}/>
        </>
    );

};

export default LatestArticles;