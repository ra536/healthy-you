import React from "react";
import logo from "./img/logo.png";
import pnj from "./img/pnj.png";
import pnj_logo from "./img/PNJ_DIGITAL.jpg";
import { Container, Col, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const Footer = (props) => {

    // Add Region functionality to the Footer.
    const region = props.currentRegion;
    const home = "/" + region;
    const aboutUsPath = "/about-us/" + region;
    const blogPath = "/category/Blog/" + region;
    const healthGuidePath = "/results/" + region;
    const subscribePath = "/subscribe/" + region;
    const contactUsPath = "/contact-us/" + region;
    const foodPath = "/category/Food/" + region;
    const nutritionPath = "/category/Nutrition/" + region;
    const healthPath = "/category/Health/" + region;
    const wellnessPath = "/category/Wellness/" + region;
    const covidPath = "/category/Covid-19/" + region;
    const newsPath = "/category/News/" + region;
    const exercisePath = "/category/Exercise/" + region;


    return (
        <>
            <div style={{ backgroundColor: '#333' }}>
                <br /><br />
                <Container>
                    <Row>

                        <Col>
                            <Link
                                to={home}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p style={{ color: 'white' }}>
                                    Home
                                </p>
                            </Link>
                            <Link
                                to={aboutUsPath}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p style={{ color: 'white' }}>
                                    About Us
                                </p>
                            </Link>
                            <Link
                                to={blogPath}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p style={{ color: 'white' }}>
                                    Blog
                                </p>
                            </Link>
                            <Link
                                to={healthGuidePath}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p style={{ color: 'white' }}>
                                    Health Guide
                                </p>
                            </Link>
                            <Link
                                to={subscribePath}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p style={{ color: 'white' }}>
                                    Subscribe
                                </p>
                            </Link>
                            <Link
                                to={contactUsPath}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p style={{ color: 'white' }}>
                                    Contact Us
                                </p>
                            </Link>
                        </Col>



                        <Col>
                            <Link
                                to={foodPath}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p style={{ color: 'white' }}>
                                    Food
                                </p>
                            </Link>
                            <Link
                                to={nutritionPath}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p style={{ color: 'white' }}>
                                    Nutrition
                                </p>
                            </Link>
                            <Link
                                to={healthPath}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p style={{ color: 'white' }}>
                                    Health
                                </p>
                            </Link>
                            <Link
                                to={wellnessPath}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p style={{ color: 'white' }}>
                                    Wellness
                                </p>
                            </Link>
                            <Link
                                to={covidPath}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p style={{ color: 'white' }}>
                                    Covid-19
                                </p>
                            </Link>
                            <Link
                                to={newsPath}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p style={{ color: 'white' }}>
                                    News
                                </p>
                            </Link>
                            <Link
                                to={exercisePath}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p style={{ color: 'white' }}>
                                    Exercise
                                </p>
                            </Link>
                        </Col>

                        <Col>
                            <img src={logo} alt="logo" width="80%" mode="fit" /><br />
                            <p style={{ color: 'white' }}>
                                <u>Address:</u><br />
                                211 Warren Street<br />
                                Newark, NJ 07103
                            </p>

                            <p style={{ color: 'white' }}>

                            </p>

                            <p style={{ color: 'white' }}>
                                <u>Phone:</u><br />877-426-0005
                            </p>

                            <p style={{ color: 'white' }}>
                                <u>Email:</u><br />contact@gmfmediagroup.com
                            </p>
                            <SocialIcon fgColor='white' url="https://www.facebook.com/hwfmg/" />{" "}
                            <SocialIcon fgColor='white' url="https://twitter.com/HWFMagazine1/" />{" "}
                            <SocialIcon fgColor='white' url="https://www.instagram.com/healthwellnessfitnessmag/" />{" "}
                            <SocialIcon fgColor='white' url="https://www.linkedin.com/company/health-wellness-&-fitness" />
                        </Col>

                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <p style={{ color: 'white' }}>
                                &#169; 2021 GMF MEDIA GROUP, LLC
                            </p>
                        </Col>
                        <Col>
                            <span style={{ color: 'white' }}>
                                WEB SITE DESIGN: <a href="http://www.pnjdigital.com">PNJ DIGITAL</a>
                            </span>
                            <img src={pnj_logo} alt="logo" width="100%" />
                        </Col>


                    </Row>

                </Container>

                <br />

            </div>
        </>
    );
};

export default Footer;