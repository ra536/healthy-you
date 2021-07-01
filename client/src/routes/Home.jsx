import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Row, Col, Carousel, Card, Image, Badge, Button } from "react-bootstrap";
import ArticleAPI from "../apis/ArticleAPI";
import FeaturedAPI from "../apis/FeaturedAPI";

// bootstrap styles library (gives automatic styling)
import "bootstrap/dist/css/bootstrap.css";
import TopNavBar from "../components/TopNavBar";
import ArticleComponent from "../components/ArticleComponent";
import HealthGuide from "../components/HealthGuide";
import HomeSideBar from "../components/HomeSideBar";
import TopFeaturedAds from "../components/TopFeaturedAds";
import AdBreak from "../components/AdBreak";
import CategoryCarousel from "../components/CategoryCarousel";
import food_pic from "./food_pic_front.jpg";
import food_pic2 from "./food_pic_front.jpg";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {   ///// Look up how to set parameter default
  let { region } = useParams();
  console.log(region);
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
        console.log(response.data.data);
        setFeaturedArticle(response.data.data);
        setFeaturedAuthor(
          response.data.writer.firstName + " " + response.data.writer.lastName
        );
      } catch (err) {
        console.log(err);
      }
      console.log(food_pic);
      try {
        const response = await ArticleAPI.get("/random");
        console.log(response.data.data);
        setFeaturedArticle2(response.data.data);
        setFeaturedAuthor2(
          response.data.writer.firstName + " " + response.data.writer.lastName
        );
      } catch (err) {
        console.log(err);
      }
      try {
        const response = await ArticleAPI.get("/random");
        console.log(response.data.data);
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
        });
        console.log(response.data.data);
        setLatestArticles(response.data.data);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await FeaturedAPI.post("/findFeaturedArticles", {

        });
        console.log(response.data.data);
        setFeaturedArticles(response.data.data);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await ArticleAPI.post("/mostViewed", {
          numOfArticles: 3,
        });
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log("am I logged in?", loggedIn);
  console.log("what's my role?", role);

  return (
    <div>
      <div>
        {/* { loggedIn ? 
                        <Logout/>
                        :
                        <>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </>
                    } */}
        <TopNavBar />
        <TopFeaturedAds />
        <div align="center" display="inline">
          <Carousel
            interval={10000}
            indicators={false}
            style={{ width: "80%", display: "inline-block" }}
          >
            {featuredArticles.map((article) => {
              console.log(article);
              return (
                <Carousel.Item>
                  <Link to={"/article/" + article.article_id}
                    style={{ textDecoration: "none", color: "black" }}>
                    <img src={article.image_data} width="100%" />
                    <div>
                      <h1 color="black">{article.headline}</h1>
                      <p>{article.summary}</p>
                    </div>
                    <br />
                  </Link>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </div>

        <br />

        <HealthGuide />

        <Container>
          <Row>
            <Col xs={12} md={8}>

              <br />
              <div align="left">
                <h2>The Latest</h2>
              </div>

              {latestArticles.map((article) => {
                return (
                  <>
                    <Container>
                      <Row>
                        <ArticleComponent
                          article={article}
                          type="horizontal"
                        />
                      </Row>
                    </Container>

                    <hr />
                  </>
                );
              })}
              <Button variant="link" href="/latestArticles/100" block>See More</Button>
              <br />
            </Col>
            <Col xs={6} md={4}>


              <br />
              <HomeSideBar />
              <br />
            </Col>
          </Row>
        </Container>

        <AdBreak />

        <br />
        <div style={{ backgroundColor: "#F8F8F8" }}>
          <CategoryCarousel
            article={featuredArticle}
            writer={featuredAuthor}
            category="Health"
          />
          <div align="center">
            <br />
            <Button variant="link" href="/category/Health">More Health Articles </Button>
          </div>


          <hr />

          <CategoryCarousel
            article={featuredArticle}
            writer={featuredAuthor}
            category="Wellness"

          />
          <div align="center">
            <br />
            <Button variant="link" href="/category/Wellness">More Wellness Articles</Button>
          </div>
          <hr />
          <CategoryCarousel
            article={featuredArticle}
            writer={featuredAuthor}
            category="Fitness"
          />
          <div align="center">
            <br />
            <Button variant="link" href="/category/Fitness">More Fitness Articles</Button>
          </div>
          <hr />
          <CategoryCarousel
            article={featuredArticle}
            writer={featuredAuthor}
            category="Food"
          />
          <div align="center">
            <br />
            <Button variant="link" href="/category/Food">More Food Articles</Button>
          </div>
          <br />
        </div>

        <AdBreak number={2} />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
