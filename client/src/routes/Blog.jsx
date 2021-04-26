import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleAPI from "../apis/ArticleAPI";
import { Container, Row, Col, Card, Form, FormControl, Button, Image } from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone";
import TopNavBar from "../components/TopNavBar";
import ad300 from "../components/ads/ad300.jpg";
import SocialShareButtons from "../components/SocialShareButtons";
import ArticleComponent from "../components/ArticleComponent";
import "bootstrap/dist/css/bootstrap.css";
import blogPage from "./BlogPage.jpg";
import AdAPI from "../apis/AdAPI";
import Footer from "../components/Footer";

const Blog = (props) => {
    const [articles, setArticles] = useState([]);

    const [ads, setAds] = useState([]);
    const [ad1, setAd1] = useState({ ad_image: ad300, type: "300x600", ad_link: "/" });

    const link =
        "https://healthy-you-project.herokuapp.com/article/87918716-f71f-4548-aea3-ad0496d44c9a";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ArticleAPI.post("/category", {
                    category: "Blog"
                })

                console.log("response:", response.data.data)
                // const articleJson = response.data.data;
                // const jsonLength = Object.keys(articleJson).length;

                // for(var i = 0; i < jsonLength; i++){
                //     setHeadlineList( prevArray => [...prevArray, articleJson[i].headline])
                //     setCategoryList( prevArray => [...prevArray, articleJson[i].category]) 
                //     setSummaryList( prevArray => [...prevArray, articleJson[i].summary]) 
                // }
                setArticles(response.data.data)

            } catch (error) {
                console.log(error)
            }

            try {
                const response = await AdAPI.post("/getAdsBySize", { size: "300x600" });
                setAds(response.data.data);
                if (typeof (response.data.data[0]) == "object") {
                    setAd1(response.data.data[0]);
                }
                console.log(response.data.data);
                console.log(response.data.data[0].ad_image);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        // Return different webpage, depending on the validity of the ID provided
        <>
            <TopNavBar />
            <div align="center">
                <h1>Blog</h1>
                <Image src={blogPage} width="75%"></Image>
            </div>
            <br />

            <Container>
                <Row>
                    <Col xs={12} md={8}>

                        {articles.map((article) => {

                            return (
                                <>
                                    <hr />
                                    <Container>
                                        <Row>
                                            <ArticleComponent article={article} writer="Anonymous Writer" type="horizontal" />
                                            {/* {getAuthorName(article.writer_id)} */}
                                        </Row>
                                    </Container>
                                </>
                            )

                        })}

                    </Col>

                    <Col xs={6} md={4}>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" />
                            <Button variant="outline-success">Search</Button>
                        </Form>




                        <br />
                        <br />
                        <h1>Recent Posts</h1>
                        <br />
                        <h2>Dental Care Basics</h2>
                        <p>Think you know everything about proper brushing and flossing techniques? Understand the basics and what you can do to promote oral health.</p>
                        <br />
                        <h2>Fat Loss Done Right</h2>
                        <p>Whether you’re looking to improve your overall health or simply slim down for summer, burning off excess fat can be quite challenging.</p>
                        <br />
                        <h2>Hyperthyroid</h2>
                        <p>Hyperthyroidism is the production of too much thyroxine hormone. It can increase metabolism.
Symptoms include unexpected weight loss, rapid or irregular heartbeat, sweating, and irritability, although the elderly often experience no symptoms.</p>
                        <br />
                        <img src={ad1.ad_image} alt="ad300" width={300} height={600} mode='fit' />
                        <br />
                    </Col>
</Row>
                    </Container>
                <br />
                <Footer />
        </>
    );
};

export default Blog;