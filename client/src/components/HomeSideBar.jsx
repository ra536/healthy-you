import React, {useState, useEffect} from "react";
import { Row, Col, Media, Card, Button, ButtonGroup} from "react-bootstrap";
import ad250 from "./ads/ad250.jpg";
import newMag from "./newMag.JPG";
import magazine from "./magazines/magazine.jpg";
import "bootstrap/dist/css/bootstrap.css";
import ArticleAPI from "../apis/ArticleAPI";
import FeaturedAPI from "../apis/FeaturedAPI";
import { Link } from "react-router-dom";
import AdAPI from "../apis/AdAPI";

const HomeSideBar = (props) => {

  const [featuredDoctors, setFeaturedDoctors] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);
  const [ads, setAds] = useState([]);
  const [ad1, setAd1] = useState({ ad_image: ad250, type: "250x250", ad_link: "/"});
  const [ad2, setAd2] = useState({ ad_image: ad250, type: "250x250", ad_link: "/"});

   useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await FeaturedAPI.post("/findFeaturedDoctors", {});
        console.log(response.data.data)
        setFeaturedDoctors(response.data.data);
      } catch (err) {
        console.log(err);
      }
      try {
        const response = await ArticleAPI.post("/mostViewed", {
          numOfArticles: 3,
        });
        console.log(response.data.data);
        setPopularArticles(response.data.data);
      } catch (err) {
        console.log(err);
      }
      try {
        const response = await AdAPI.post("/getAdsBySize", { size: "250x250"});
        setAds(response.data.data);
        setAd1(response.data.data[0]);
        setAd2(response.data.data[1]);
        console.log(response.data.data);
        console.log(response.data.data[0].ad_image);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
     <Card border="" style={{ width: '18rem' }}>
    <Card.Body>
      <Row>
        <Col>
        <div>
          <iframe
            title="Title"
            allowFullScreen
            height="200"
            width= "250"
            scrolling="no"
            frameBorder="0"
            style={{ border: "none" }}
            src="https://www.wevideo.com/api/4/media/1921444596/embed"
          >
          </iframe>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <a href={ad1.ad_link}>
          <img src={ad1.ad_image} alt="ad250" width={250} height={250} mode="fit" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
        <hr />
        <h3>Magazine</h3>
        <hr />

                <Card.Img variant="top" src={newMag} />
                <div align="center">
                <Button variant="link" size="md" href ="https://issuu.com/healthwellnessfitness">
                  Subscribe
                </Button>
                <Button variant="link" size="md" href="https://issuu.com/healthwellnessfitness/docs/1-56-compressed">
                  Read Issue
                </Button>
                <hr />
                </div>



        </Col>
      </Row>
      <Row>
        <Col> 
        <hr />
          <h3>Popular Articles</h3>
          <hr />
          <ul className="list-unstyled">
            {popularArticles.map((article) => {
              return (
                <>
                <Link to={"/article/" + article.article_id} style={{ textDecoration: "none", color: "black" }}>
                <h6>{article.headline}</h6>
                </Link>
                <hr />
                </>
              );
            })}
          </ul> 
        </Col>
      </Row>
      <Row>
        <Col>
        <hr />
          <h3>Featured Doctors</h3>
          <hr />
          <ul className="list-unstyled">
            {featuredDoctors.map((doctor) => {
              return (
                <>
                <Link to={"/doctor-profile/" + doctor.doctor_id} style={{ textDecoration: "none", color: "black" }}>
                <Media as="li">
              <img
                width={64}
                className="mr-3"
                src={doctor.profile_picture}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h6>{doctor.doctor_name}</h6>
                <p>{doctor.specialty}</p>
              </Media.Body>
            </Media>
            </Link>
            <hr />
                </>
              );
            })}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
        <a href={ad2.ad_link}>
          <img src={ad2.ad_image} alt="ad250" width={250} height={250} mode="fit" />
          </a>
        </Col>
      </Row>

      </Card.Body>
  </Card>
    </>
  );
};

export default HomeSideBar;
