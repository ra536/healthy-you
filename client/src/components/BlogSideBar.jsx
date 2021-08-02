import React, { useState, useEffect } from "react";
import { Row, Col, Media, Card, Button, ButtonGroup, Form, FormControl, Container } from "react-bootstrap";
import ad300 from "../components/ads/ad300.jpg";
import AdAPI from "../apis/AdAPI";
import ArticleAPI from "../apis/ArticleAPI";
import { Link } from "react-router-dom";
import newMag from "./newMag.JPG"


import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const BlogSideBar = (props) => {
    const [ads, setAds] = useState([]);
    const [popular, setPopular] = useState([]);
    const [recent, setRecent] = useState([]);
    const category = props.category;
    const region = props.currentRegion;
    const [filterText, setFilterText] = useState("");
    const homePath = "/" + region;
    const [ad1, setAd1] = useState({ ad_image: ad300, type: "300x600", ad_link: homePath })
    let { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await AdAPI.post("/getAdsBySize", {
                    size: "300x600",
                    region: region
                });
                setAds(response.data.data);
                if (typeof (response.data.data[0]) == "object") {
                    setAd1(response.data.data[0]);
                }
            } catch (err) {
                console.log(err);
            }

            try {
                const response = await ArticleAPI.post("/mostViewedCategory", {
                    numOfArticles: 3,
                    category: category,
                    region: region
                });
                setPopular(response.data.data);
            } catch (err){
                console.log(err);
            }

            try {
                const response = await ArticleAPI.post("/latestCategory", {
                    numOfArticles: 3,
                    category: category,
                    region: region
                })
                setRecent(response.data.data);
            } catch (err){
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const handleChange = (data) => {
        setFilterText(data.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if(id == null) id = "Blog"
          history.push({
            pathname: "/category/" + id + "/" + region + "/",
            search:
              "s=" + 
              filterText +
              "&page=1"
          });
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <>

            <Card border="" >
                <Card.Body>
            <Form inline>
            <Form.Control
                    placeholder="Search"
                    type="text"
                    name="s"
                    values={filterText}
                    onChange={handleChange}
                />
                <Button variant="outline-success" onClick={handleSubmit} block>Search</Button>
            </Form>

<hr />
                <Card.Img variant="top" src={newMag} />
                <div align="center">
                <Button variant="link" size="md" href={"/subscribe/" + region} >
                  Subscribe
                </Button>
                <Button variant="link" size="md" href="https://issuu.com/healthwellnessfitness/docs/1-56-compressed">
                  Read Issue
                </Button>
                </div>

            <hr />
            <h3>Popular Posts</h3>
            <hr />
            {popular.map((article) => {
                return (
                    <>
                    <Link to={"/article/" + article.article_id + "/" + region} style={{ textDecoration: "none", color: "black" }}>
                    <h6>{article.headline}</h6>
                    </Link>
                    <hr />
                    </>
                );
            })}
            <hr />
            <h3>Recent Posts</h3>
            <hr />
            {recent.map((article) => {
                return (
                    <>
                    <Link to={"/article/" + article.article_id + "/" + region} style={{ textDecoration: "none", color: "black" }}>
                    <h6>{article.headline}</h6>
                    </Link>
                    <hr />
                    </>
                );
            })}
            <a href={ad1.ad_link}>
                <img src={ad1.ad_image} alt="ad300" style={{ maxWidth:"100%", height: "auto"}}/>
            </a>
            <br />
            </Card.Body>
            </Card>
        </>

    );
};
export default BlogSideBar;