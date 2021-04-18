import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Row, Col } from "react-bootstrap";
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

const Home = () => {
  // Store the data retrieved from backend API into context
  const { loggedIn, role } = useContext(AuthContext);
  //const { featuredArticles, setFeaturedArticles } = useContext(ArticleContext);
  const [featuredArticle, setFeaturedArticle] = useState("");
  const [featuredAuthor, setFeaturedAuthor] = useState("");

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
        <Container id="article-highlights">
          <Row>
            <Col>
              <ArticleComponent
                article={featuredArticle}
                writer={featuredAuthor}
                type="featured-large"
              />
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col>
              <ArticleComponent
                article={featuredArticle}
                writer={featuredAuthor}
                type="featured-small"
              />
            </Col>

            <Col>
              <ArticleComponent
                article={featuredArticle}
                writer={featuredAuthor}
                type="featured-small"
              />
            </Col>
            <Col>
              <ArticleComponent
                article={featuredArticle}
                writer={featuredAuthor}
                type="featured-small"
              />
            </Col>
          </Row>
        </Container>
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

          <Row>
            <ArticleComponent
              article={featuredArticle}
              writer={featuredAuthor}
              type="horizontal"
            />
          </Row>

          <hr />

          <Row>
            <ArticleComponent
              article={featuredArticle}
              writer={featuredAuthor}
              type="horizontal"
            />
          </Row>

          <hr />

          <Row>
            <ArticleComponent
              article={featuredArticle}
              writer={featuredAuthor}
              type="horizontal"
            />
          </Row>

          <hr />

          <Row>
            <ArticleComponent
              article={featuredArticle}
              writer={featuredAuthor}
              type="horizontal"
            />
          </Row>

          <hr />

          <Row>
            <ArticleComponent
              article={featuredArticle}
              writer={featuredAuthor}
              type="horizontal"
            />
          </Row>

          <br />
        </Container>

        <Container
          id="Right Sidebar"
          style={{ width: "35%", display: "inline-block" }}
        >
          <br />
          <HomeSideBar />
          <br />
          <br />
          <br />
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
          <hr />
          <CategoryCarousel
            article={featuredArticle}
            writer={featuredAuthor}
            category="Wellness"
          />
          <hr />
          <CategoryCarousel
            article={featuredArticle}
            writer={featuredAuthor}
            category="Fitness"
          />
          <hr />
          <CategoryCarousel
            article={featuredArticle}
            writer={featuredAuthor}
            category="Food"
          />
        </div>

        <AdBreak />
        <div align="center">
          <iframe
            title="Title"
            allowFullScreen
            height="200"
            scrolling="no"
            frameBorder="0"
            style={{ border: "none" }}
            src="https://www.wevideo.com/api/4/media/1921444596/embed"
          >
            {" "}
          </iframe>
        </div>
        <Container></Container>
      </div>
    </div>
  );
};

export default Home;
