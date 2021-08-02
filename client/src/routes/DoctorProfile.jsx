import React, { useEffect, useState } from "react";
import DoctorAPI from "../apis/DoctorAPI";
import PracticeAPI from "../apis/PracticeAPI";
import ReviewAPI from "../apis/ReviewAPI";

import { useParams } from "react-router-dom";
import {
  Container,
  Image,
  Row,
  Col,
  Card,
  Button,
  Accordion,
  ListGroup,
} from "react-bootstrap";
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

import Moment from "react-moment";
import "moment-timezone";


import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

import doctor_image from "./defaults/Doctors.jpg";
import dentist_image from "./defaults/Dentist.jpg";
import chiropractor_image from "./defaults/Chiropractors.jpg";
import acupuncture_image from "./defaults/Acupuncture.jpg";
import personal_trainer_image from "./defaults/PersonalTrainers.jpg"

const DoctorProfile = (props) => {
  let { doctorID, region } = useParams();
  const [name, setName] = useState();
  const [cityState, setCityState] = useState();
  const [specialties, setSpecialties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [locations, setLocations] = useState([]);
  const [profilePicture, setProfilePicture] = useState();
  const [rating, setRating] = useState("");
  const [bedside, setBedside] = useState("");
  const [waitTime, setWaitTime] = useState("");
  const [availability, setAvailability] = useState("");
  const [numRatings, setNumRatings] = useState("");
  const [bio, setBio] = useState("");

  const [reviews, setReviews] = useState([]);

  const determineStars = (rating) => {
    //alert(rating);
    if(rating > 4.75){
      return fivestar;
    } else if (rating > 4.25 && rating <= 4.75){
      return fourhstar;
    } else if (rating > 3.75 && rating <= 4.25){
      return fourstar;
    } else if (rating > 3.25 && rating <= 3.75){
      return threehstar;
    } else if (rating > 2.75 && rating <= 3.25){
      return threestar;
    } else if (rating > 2.25 && rating <= 2.75){
      return twohstar;
    } else if (rating > 1.75 && rating <= 2.25){
      return twostar;
    } else if (rating > 1.25 && rating <= 1.75){
      return onehstar;
    } else if (rating > 0.75 && rating <= 1.25){
      return onestar;
    } else if (rating > 0.25 && rating <= 0.75){
      return hstar;
    } else {
      return star;
    }
  }

  const determineProfile = (picture) => {
    if (picture != null){
      return picture;
    }

    if (categories?.includes("Chiropractors")){
      return chiropractor_image;
    }

    if (categories?.includes("Acupuncture")){
      return acupuncture_image;
    }

    if (categories?.includes("Gym") || categories?.includes("Personal Trainers")){
      return personal_trainer_image;
    }

    if (categories?.includes("Dentist")){
      return dentist_image;
    }

    return doctor_image;
  }

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await DoctorAPI.post(
          "/findOne",
          {
            doctor_id: doctorID,
          },
          {
            withCredentials: false,
          }
        );
        setName(response.data.data.doctor_name);
        setCityState(response.data.data.city + ", " + response.data.data.state);
        setSpecialties(response.data.data.specialty);
        setCategories(response.data.data.category);
        setPhone(response.data.data.phone);
        setEmail(response.data.data.email);
        setProfilePicture(response.data.data.profile_picture);
        setBio(response.data.data.bio);
        setRating(response.data.data.rating);
        setBedside(response.data.data.bedside);
        setWaitTime(response.data.data.wait_time);
        setAvailability(response.data.data.availability);
        setNumRatings(response.data.data.num_ratings);
      } catch (err) {
        console.log(err);
      }
      try {
        const practiceResponse = await PracticeAPI.post(
          "/findAll",
          {
            doctor_id: doctorID,
          },
          {
            withCredentials: false,
          }
        );
        setLocations(practiceResponse.data.data);
      } catch (err) {
        console.log(err);
      }
      try {
        const allReviews = await ReviewAPI.post(
          "/findAllForDoctor",
          {
            doctor_id: doctorID,
          },
          {
            withCredentials: false,
          }
        );
        setReviews(allReviews.data.data);
      } catch (err){
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <TopNavBar currentRegion={region}/>
      <br />
      <Container>
      <Row>
        <Col>
          <br></br>
          <Image
            src={determineProfile(profilePicture)}
            className="mx-auto d-block"
            style={{ width: "50%" }}
            rounded
          />
          <br></br>
		            <Col md={8}>
            <br />

            
          </Col>
	<Row>
	          <Col md={8}>
            <br />
            <div align="center">
              <h3>
                Overall Rating:
                <br />
                {Number(rating).toFixed(1)}
              </h3>
            </div>
            <Image
              src={determineStars(rating)}
              className="mx-auto d-block"
              style={{ width: "50%" }}
            />
          </Col>
          <Col>
            <br />
            <div align="center">
              Bedside Manner: {Number(bedside).toFixed(1)}
              <Image
                src={determineStars(bedside)}
                className="mx-auto d-block"
                style={{ width: "40%" }}
              />
              <br />
              Average wait time: {Number(waitTime).toFixed(1)}
              <Image
                src={determineStars(waitTime)}
                className="mx-auto d-block"
                style={{ width: "40%" }}
              />
              <br />
              Availability: {Number(availability).toFixed(1)}
              <Image
                src={determineStars(availability)}
                className="mx-auto d-block"
                style={{ width: "40%" }}
              />
              <br />
            </div>
          </Col>
		</Row>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <hr />
              <br></br>
              <Card.Title>Categories</Card.Title>
              {categories.map((categories, index) => {
                return (
                  <ListGroup key={index}>
                    <ListGroup.Item>{categories}</ListGroup.Item>
                  </ListGroup>
                );
              })}
              <br />
              <Card.Title>Specialties</Card.Title>
              {specialties.map((specialties, index) => {
                return (
                  <ListGroup key={index}>
                    <ListGroup.Item>{specialties}</ListGroup.Item>
                  </ListGroup>
                );
              })}
              <br />
              <Card.Title>About Me</Card.Title>
              <ListGroup>
                {bio != null ? <ListGroup.Item>{bio}</ListGroup.Item> : <></>}
              </ListGroup>
              <br></br>
              <Card.Title>Locations</Card.Title>
              {locations.map((locations, index) => {
                return (
                  <ListGroup key={index}>
                    <ListGroup.Item>
                      {locations.name}
                      <br></br>
                      {locations.location}
                      <br></br>
                      <a href={locations.website}>{locations.website}</a>
                      <br></br>
                      {locations.phone}
                    </ListGroup.Item>
                  </ListGroup>
                );
              })}
              <br />
              <Card.Title>Appointments</Card.Title>
              <Button size="lg" block href={"/book-appointment/" + doctorID + "/" + region}>
                Book now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
      <br></br>


      <Container>
        <Card>
          <Accordion>
            <Card>
              <Card.Header className="text-center">
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Read Reviews ({numRatings == null ? 0 : numRatings})
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {reviews.map((review) => {
                    return (
                      <blockquote className="blockquote mb-0 text-center">
                      <Container>
                        <Row>
                          <Col>
                          <span>Overall rating:</span>
                            <Image
                                src={determineStars(review.overall_rating)}
                                className="mx-auto d-block"
                                style={{ height: "2em" }}
                              />
                          </Col>
                          <Col>
                            <span>Bedside manner:</span>
                            <Image
                                src={determineStars(review.bedside_manner)}
                                className="mx-auto d-block"
                                style={{ height: "2em" }}
                              />
                          </Col>
                          <Col><span>Wait Time:</span>
                            <Image
                                src={determineStars(review.wait_time)}
                                className="mx-auto d-block"
                                style={{ height: "2em" }}
                              />
                          </Col>
                          <Col>
                            <span>Availability:</span>
                            <Image
                                src={determineStars(review.availability)}
                                className="mx-auto d-block"
                                style={{ height: "2em" }}
                              />
                          </Col>
                        </Row>
                      </Container>
                      
                        <br/>
                      <p>
                        {" "}
                        "{review.full_review}"{" "}
                      </p>
                      <footer className="blockquote-footer text-center">
                        {review.name} (<Moment format="MM/DD/YYYY">{review.publication_date}</Moment>)
                      </footer>
                      <hr />
                    </blockquote>
                    );
                  })}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card>
        {/* REVIEWS: TODO */}
      </Container>

      <Row>
        <br></br>
        <Col>
          <div align="center">
            <br />
            <br />
          </div>
        </Col>
      </Row>
      <Footer currentRegion={region}/>
    </>
  );
};

export default DoctorProfile;