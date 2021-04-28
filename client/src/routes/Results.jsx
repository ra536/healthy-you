import React, { useEffect, useContext, useState } from "react";
import SearchAPI from "../apis/SearchAPI";
import FeaturedAPI from "../apis/FeaturedAPI";
import SearchBar from "../components/SearchBar";
import { AppContext } from "../context/AppContext";
import queryString from "query-string";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Accordion,
  Button,
  Card,
  ListGroup,
  ButtonGroup,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import magazine from "../components/magazines/magazine.jpg";
import newMag from "./newMag.JPG";
import doctorPhoto from "./file.jpg";
import adLong from "../components/ads/ad300.jpg";
import TopNavBar from "../components/TopNavBar";

import fivestar from "./stars/FiveStar.png";
import fourhstar from "./stars/FourHStar.png";
import fourstar from "./stars/FourStar.png";
import threehstar from "./stars/ThreeHStar.png";
import threestar from "./stars/ThreeStar.png";
import twohstar from "./stars/TwoHStar.png";
import twostar from "./stars/TwoStar.png";
import onehstar from "./stars/OneHStar.png";
import onestar from "./stars/OneStar.png";
import hstar from "./stars/HStar.png";
import star from "./stars/Star.png";
import AdAPI from "../apis/AdAPI";
import Footer from "../components/Footer";

const Results = (props) => {
  const { results, setResults } = useContext(AppContext);

  const [featuredDoctor, setFeaturedDoctor] = useState("");
  const [featuredDoctors, setFeaturedDoctors] = useState([]);
  const [ads, setAds] = useState([]);
  const [ad1, setAd1] = useState({
    ad_image: adLong,
    type: "300x600",
    ad_link: "/",
  });

  const determineStars = (rating) => {
    //alert(rating);
    if (rating > 4.75) {
      return fivestar;
    } else if (rating > 4.25 && rating <= 4.75) {
      return fourhstar;
    } else if (rating > 3.75 && rating <= 4.25) {
      return fourstar;
    } else if (rating > 3.25 && rating <= 3.75) {
      return threehstar;
    } else if (rating > 2.75 && rating <= 3.25) {
      return threestar;
    } else if (rating > 2.25 && rating <= 2.75) {
      return twohstar;
    } else if (rating > 1.75 && rating <= 2.25) {
      return twostar;
    } else if (rating > 1.25 && rating <= 1.75) {
      return onehstar;
    } else if (rating > 0.75 && rating <= 1.25) {
      return onestar;
    } else if (rating > 0.25 && rating <= 0.75) {
      return hstar;
    } else {
      return star;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        var whereClause = {};
        const search = props.location.search;
        const params = queryString.parse(search);
        console.log(params);

        if (params.practice == null) {
          whereClause["practice"] = "";
        } else {
          whereClause["practice"] = params.practice;
        }

        if (params.location == null) {
          whereClause["location"] = "";
        } else {
          whereClause["location"] = params.location;
        }

        if (params.category == null) {
          whereClause["category"] = "";
        } else {
          whereClause["category"] = params.category;
        }

        if (params.specialty == null) {
          whereClause["specialty"] = "";
        } else {
          whereClause["specialty"] = params.specialty;
        }

        console.log(whereClause);

        const response = await SearchAPI.post(
          "/search",
          whereClause
          // {
          //     practice: params.practice,
          //     doctor_name: params.doctor,
          //     location: params.location,
          //     rating: params.rating,
          //     specialty: params.specialty
          // }
        );
        setResults(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await FeaturedAPI.post("/findFeaturedDoctorsPractices");
        setFeaturedDoctor(
          response.data.data[
            Math.floor(Math.random() * response.data.data.length)
          ]
        );
        // console.log(Math.floor(Math.random() * response.data.data.length)); always 0 if only 1 doctor
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await AdAPI.post("/getAdsBySize", { size: "300x600" });
        setAds(response.data.data);
        if (typeof response.data.data[0] == "object") {
          setAd1(response.data.data[0]);
        }
        console.log(response.data.data);
        console.log(response.data.data[0].ad_image);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await FeaturedAPI.post("/findFeaturedDoctorsPractices");
        console.log(response.data.data);
        setFeaturedDoctors(response.data.data);
      } catch (err){
        console.log(err);
      }
    };
    fetchData();
  }, [props.location.search, setResults]);

  return (
    <div>
      <TopNavBar />
      <Container>
        <br />
        <h1 align="center">Health Guide</h1>
        <SearchBar />
        <br />
        <Row align="left">
          <Col align="left">
            <div align="left">
              <h3>Featured Doctors</h3>
            </div>
            {featuredDoctors.map((featuredDoctor) => {
              return (
              
              <ListGroup.Item>
                <Container fluid="md">
                  <Row>
                    <Col md={4}>
                    <Link
              to={"/doctor-profile/" + featuredDoctor.doctor_id}
              style={{ textDecoration: "none", color: "black" }}
            >
                      <Image
                        variant="top"
                        src={featuredDoctor.profile_picture}
                        width="100%"
                      />
                      </Link>
                    </Col>
                    <Col>
                      <h5>{featuredDoctor.doctor_name}</h5>
                      <hr />

                      <h6>
                            {featuredDoctor.category.map((category, i) => <a href={"/results/?practice=&specialty=&location=&category=" + category}>{category}</a>)}{" "}
                            {featuredDoctor.specialty
                              .map((specialty, i) => <a href={"/results/?practice=&specialty=" + specialty + "&location=&category="}>{specialty}</a>)}{" "}
                          </h6>
                          <h6>
                            {featuredDoctor.practices
                              .map((practices, i) => `${practices.name} - ${practices.location}`)
                              .join(", ")}{" "}
                          </h6>
                          <Image
                        src={determineStars(featuredDoctor.rating)}
                        className=""
                        style={{ width: "40%" }}
                      />
                      <br />
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            
            );
            })}

            <br />
            <div align="left">
              <h3>Search Results</h3>
            </div>
            {results.map((results, index) => {
              return (
                
                  <ListGroup.Item>
                    <Container fluid="md">
                      <Row>
                        <Col md={4}>
                        <Link
                  to={"/doctor-profile/" + results.doctor_id}
                  style={{ textDecoration: "none", color: "black" }}
                >
                          <Image
                            variant="top"
                            src={results.profile_picture}
                            width={"100%"}
                          />
                          </Link>
                        </Col>
                        <Col>
                          <h5>{results.doctor_name}</h5>
                          <hr />
                          <h6>
                            {results.category.map((category, i) => <a href={"/results/?practice=&specialty=&location=&category=" + category}>{category}</a>)}{" "}
                            {results.specialty
                              .map((specialty, i) => <a href={"/results/?practice=&specialty=" + specialty + "&location=&category="}>{specialty}</a>)}{" "}
                          </h6>
                          <h6>
                            {results.practices
                              .map((practices, i) => `${practices.name} - ${practices.location}`)
                              .join(", ")}{" "}
                          </h6>
                          <Image
                            src={determineStars(results.rating)}
                            className=""
                            style={{ width: "40%" }}
                          />
                          <br />

                        </Col>
                      </Row>
                    </Container>
                  </ListGroup.Item>
                
              );
            })}
          </Col>

          <Col align="center">
            <Card border="">
              <Card.Body>
            <h3>Follow us</h3>
            <SocialIcon url="https://www.facebook.com/hwfmg/" />{" "}
            <SocialIcon url="https://twitter.com/HWFMagazine1/" />{" "}
            <SocialIcon url="https://www.instagram.com/healthwellnessfitnessmag/" />{" "}
            <SocialIcon url="https://www.linkedin.com/company/health-wellness-&-fitness" />
            <hr />

            <h3>Doctor Finder</h3>

            <div style={{ width: "80%" }}>
              
                <ListGroup.Item>
                  <h6>Featured Listing</h6>
                  <hr />
                  <Container>
                    <Row>
                      <Col align="right">
                      <Link
                to={"/doctor-profile/" + featuredDoctor.doctor_id}
                style={{ textDecoration: "none", color: "black" }}
              >
                        <Image src={featuredDoctor.profile_picture} width ="50%"/>
                        </Link>
                      </Col>
                      <Col align="left">
                        <h6>{featuredDoctor.doctor_name}</h6>
                        <h6>
                            {featuredDoctor.category?.map((category, i) => <a href={"/results/?practice=&specialty=&location=&category=" + category}>{category}</a>)}{" "}
                            {featuredDoctor.specialty?.map((specialty, i) => <a href={"/results/?practice=&specialty=" + specialty + "&location=&category="}>{specialty}</a>)}{" "}
                          </h6>
                          <h6>
                            {featuredDoctor.practices
                              ?.map((practices, i) => `${practices.name} - ${practices.location}`)
                              .join(", ")}{" "}
                          </h6>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              
            </div>
            <br />
            <hr />
            <div style={{ width: "100%" }}>
              <SearchBar />

            </div>
            <br />
            <hr />
            <Container>
            <Col md={8}>
            <div align="center">
              <Image variant="top" src={newMag} width={"75%"} />

              <Button
                variant="link"
                size="md"
                href="/subscribe"
              >
                Subscribe
              </Button>

              <Button
                variant="link"
                size="md"
                href="https://issuu.com/healthwellnessfitness/docs/1-56-compressed"
              >
                Read Issue
              </Button>
            </div>
            </Col>
            <hr />
            <a href={ad1.ad_link}>
              <img src={ad1.ad_image} width={300} height={600} />
            </a>
            </Container>
            </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
      <br />
      <Footer />
    </div>
  );
};

export default Results;
