import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Container,
  Row,
  Col,
  Form,
  Jumbotron,
  Carousel,
  Card,
  Image,
  Badge,
  Button,
} from "react-bootstrap";
import ArticleAPI from "../apis/ArticleAPI";
import FeaturedAPI from "../apis/FeaturedAPI";
import { useHistory } from "react-router-dom";

// bootstrap styles library (gives automatic styling)
import "bootstrap/dist/css/bootstrap.css";
import TopNavBar from "../components/TopNavBar";
import ArticleComponent from "../components/ArticleComponent";
import HealthGuide from "../components/HealthGuide";
import AdvertisingSideBar from "../components/AdvertisingSideBar";
import TopFeaturedAds from "../components/TopFeaturedAds";
import AdBreak from "../components/AdBreak";
import CategoryCarousel from "../components/CategoryCarousel";
import food_pic from "./food_pic_front.jpg";
import food_pic2 from "./food_pic_front.jpg";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Advertising = () => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/advertising/order");
  };
  ///// Look up how to set parameter default
  let { region } = useParams(); //Redirect to default if region is null
  // Store the data retrieved from backend API into context
  const { loggedIn, role } = useContext(AuthContext);
  //const { featuredArticles, setFeaturedArticles } = useContext(ArticleContext);
  const [featuredArticle, setFeaturedArticle] = useState("");
  const [featuredAuthor, setFeaturedAuthor] = useState("");

  const [featuredArticle2, setFeaturedArticle2] = useState("");
  const [featuredAuthor2, setFeaturedAuthor2] = useState("");

  const [featuredArticle3, setFeaturedArticle3] = useState("");
  const [featuredAuthor3, setFeaturedAuthor3] = useState("");

  const [latestArticles, setLatestArticles] = useState([]);

  const [featuredArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await ArticleAPI.get("/random");
        setFeaturedArticle(response.data.data);
        setFeaturedAuthor(
          response.data.writer.firstName + " " + response.data.writer.lastName
        );
      } catch (err) {
        console.log(err);
      }
      try {
        const response = await ArticleAPI.get("/random");
        setFeaturedArticle2(response.data.data);
        setFeaturedAuthor2(
          response.data.writer.firstName + " " + response.data.writer.lastName
        );
      } catch (err) {
        console.log(err);
      }
      try {
        const response = await ArticleAPI.get("/random");
        setFeaturedArticle3(response.data.data);
        setFeaturedAuthor3(
          response.data.writer.firstName + " " + response.data.writer.lastName
        );
      } catch (err) {
        console.log(err);
      }
      try {
        const response = await ArticleAPI.post("/latest", {
          numOfArticles: 8,
          currentRegion: region,
        });
        setLatestArticles(response.data.data);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await FeaturedAPI.post("/findFeaturedArticles", {});
        setFeaturedArticles(response.data.data);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await ArticleAPI.post("/mostViewed", {
          numOfArticles: 3,
          region: region,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <TopNavBar currentRegion={region} />
        <TopFeaturedAds currentRegion={region} />
        {/* <div align="center" display="inline">
          <Carousel
            interval={10000}
            indicators={false}
            style={{ width: "80%", display: "inline-block" }}
          >
            {featuredArticles.map((article, index) => {
              return (
                <Carousel.Item key={index}>
                  <Link
                    to={"/article/" + article.article_id + "/" + region}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <img src={article.image_data} width="100%" />
                    <div>
                      <h1 color="black">{article.headline}</h1>
                      <p>{article.summary}</p>
                    </div>
                    <br />
                  </Link>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div> */}
        <Container>
          <Row>
            <Col xs={12} md={8}>
              TODO
              <Jumbotron fluid className="text-center">
                <Container>
                  <h1>Start an order here!</h1>
                  <br />
                  <Form className="justify-content-center">
                    <Button onClick={handleSubmit} variant="outline-primary">
                      Order
                    </Button>
                  </Form>
                </Container>
              </Jumbotron>
            </Col>
            <Col xs={6} md={4}>
              <br />
              <AdvertisingSideBar currentRegion={region} />
              <br />
            </Col>
          </Row>
        </Container>
        <Footer currentRegion={region} />
      </div>
    </div>
  );
};

export default Advertising;
