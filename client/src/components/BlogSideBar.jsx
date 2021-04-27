import React, { useState, useEffect } from "react";
import { Row, Col, Media, Card, Button, ButtonGroup, Form, FormControl, Container } from "react-bootstrap";
import ad300 from "../components/ads/ad300.jpg";
import AdAPI from "../apis/AdAPI";
import ArticleAPI from "../apis/ArticleAPI";
import { Link } from "react-router-dom";



import "bootstrap/dist/css/bootstrap.css";


const BlogSideBar = (props) => {

    const [ads, setAds] = useState([]);
    const [ad1, setAd1] = useState({ ad_image: ad300, type: "300x600", ad_link: "/" })
    const [popular, setPopular] = useState([]);
    const [recent, setRecent] = useState([]);
    const category = props.category;

    useEffect(() => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
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

            try {
                const response = await ArticleAPI.post("/mostViewedCategory", {
                    numOfArticles: 3,
                    category: category,
                });
                setPopular(response.data.data);
            } catch (err){
                console.log(err);
            }

            try {
                const response = await ArticleAPI.post("/latestCategory", {
                    numOfArticles: 3,
                    category: category
                })
                setRecent(response.data.data);
            } catch (err){
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>


            <Form inline>
                <FormControl type="text" placeholder="Search" />
                <Button variant="outline-success">Search</Button>
            </Form>


            <br />
            <br />
            <hr />
            <h3>Popular Posts</h3>
            <hr />
            {popular.map((article) => {
                return (
                    <>
                    <Link to={"/article/" + article.article_id} style={{ textDecoration: "none", color: "black" }}>
                    <h6>{article.headline}</h6>
                    </Link>
                    <hr />
                    </>
                );
            })}
            <hr />
            <h3>Recent Posts</h3>
            <hr />
            {popular.map((article) => {
                return (
                    <>
                    <Link to={"/article/" + article.article_id} style={{ textDecoration: "none", color: "black" }}>
                    <h6>{article.headline}</h6>
                    </Link>
                    <hr />
                    </>
                );
            })}
            <a href={ad1.ad_link}>
                <img src={ad1.ad_image} alt="ad300" width={300} height={600} />
            </a>
            <br />



        </>

    );
};
export default BlogSideBar;