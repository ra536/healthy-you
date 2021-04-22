import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Row, Col, Carousel, Card, Image, Badge, Button} from "react-bootstrap";
import ArticleAPI from "../apis/ArticleAPI";

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
import { Link } from "react-router-dom";

const Home = () => {
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
          numOfArticles: 6,
        });
        console.log(response.data.data);
        setLatestArticles(response.data.data);
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
            style={{ width: "80%", display: "inline-block" }}
          >
            <Carousel.Item>
              <Link to={"/article/" + featuredArticle.article_id}
              style={{ textDecoration: "none", color: "black" }}>
              <img src={featuredArticle.image_data} width="100%"/>
              <Carousel.Caption>
                
                
              </Carousel.Caption>
              <div backgroundColor="black">
                <h1 color="black">{featuredArticle.headline}</h1>
                <p>{featuredArticle.summary}</p>
                </div>
                <br />
              </Link>
              
              
            </Carousel.Item>
            <Carousel.Item>
              <Link to={"/article/" + featuredArticle2.article_id}
              style={{ textDecoration: "none", color: "black" }}>
              <img src={featuredArticle2.image_data} width="100%"/>
              <Carousel.Caption>
                
              </Carousel.Caption>
              <div backgroundColor="black">
                  <h1>{featuredArticle2.headline}</h1>
                  <p>{featuredArticle2.summary}</p>
                </div>
                <br />
              </Link>
            </Carousel.Item>

            <Carousel.Item>
              <Link to={"/article/" + featuredArticle3.article_id}
              style={{ textDecoration: "none", color: "black" }}>
              <img src={featuredArticle3.image_data} width="100%"/>
              <Carousel.Caption>
                
              </Carousel.Caption>
              <div backgroundColor="black">
                  <h1>{featuredArticle3.headline}</h1>
                  <p>{featuredArticle3.summary}</p>
                </div>
                <br />
              </Link>
            </Carousel.Item>
            </Carousel>
        </div>
        
        <br />

        <HealthGuide />

        <Container
          id="Latest Articles"
          style={{ width: "65%", display: "inline-block" }}
        >
          <br />
          <div align="left">
            <h2>The Latest</h2>
          </div>
          
          {latestArticles.map((article) => {
            return (
              <>
              <Row>
              <ArticleComponent
                article={article}
                type="horizontal"
              />
            </Row>

            <hr />
            </>
            );
          })}
          <Button  variant="link"  href="/latestArticles/100" block>See More</Button>
          <br />
        </Container>

        <Container
          id="Right Sidebar"
          style={{ width: "35%", display: "inline-block" }}
        >
          <br />
          <HomeSideBar />
          <br />
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
          <Button  variant="link" href="/category/Health">More Health Articles </Button>
          </div>
          
          
          <hr />
          
          <CategoryCarousel
            article={featuredArticle}
            writer={featuredAuthor}
            category="Wellness"
            
          />
          <div align="center">
          <br />
          <Button  variant="link"  href="/category/Wellness">More Wellness Articles</Button>
          </div>
          <hr />
          <CategoryCarousel
            article={featuredArticle}
            writer={featuredAuthor}
            category="Fitness"
          />
          <div align="center">
          <br />
          <Button  variant="link" href="/category/Fitness">More Fitness Articles</Button>
          </div>
          <hr />
          <CategoryCarousel
            article={featuredArticle}
            writer={featuredAuthor}
            category="Food"
          />
          <div align="center">
          <br />
          <Button  variant="link"  href="/category/Food">More Food Articles</Button>
          </div>
          <br />
        </div>

        <AdBreak />
        <br/>
      </div>
    </div>
  );
};

export default Home;
