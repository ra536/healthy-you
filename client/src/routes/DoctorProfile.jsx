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
import fivestar from "./fivestar.png";

// import axios from "axios";
import TopNavBar from "../components/TopNavBar";

const DoctorProfile = (props) => {
  let { doctorID } = useParams();
  const [name, setName] = useState();
  const [cityState, setCityState] = useState();
  const [specialties, setSpecialties] = useState([]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [locations, setLocations] = useState([]);
  const [profilePicture, setProfilePicture] = useState();
  const [rating, setRating] = useState("");
  const [bio, setBio] = useState("");

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
        // console.log(response.data.data);
        setName(response.data.data.doctor_name);
        setCityState(response.data.data.city + ", " + response.data.data.state);
        setSpecialties(response.data.data.specialty);
        setPhone(response.data.data.phone);
        setEmail(response.data.data.email);
        setProfilePicture(response.data.data.profile_picture);
        setBio(response.data.data.bio);
        setRating(response.data.data.rating);
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
        console.log(practiceResponse.data.data);
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
        );
        console.log(allReviews);
      } catch (err){
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <TopNavBar />
      <br />
      <Row>
        <Col>
          <br></br>
          <Image
            src={profilePicture}
            className="mx-auto d-block"
            style={{ width: "50%" }}
            roundedCircle
          />
          <br></br>
        </Col>

        <Col>
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {cityState}
              </Card.Subtitle>
              <br></br>
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
              <Card.Text>{bio}</Card.Text>
              <br></br>
              <Card.Title>Contact Information</Card.Title>
              <Card.Text>
                Phone: {phone}
                <br></br>
                Email: {email}
                <br></br>
              </Card.Text>
              <br />
              <Card.Title>Locations</Card.Title>
              {locations.map((locations, index) => {
                return (
                  <ListGroup key={index}>
                    <ListGroup.Item>
                      {locations.name}
                      <br></br>
                      {locations.location}
                      <br></br>
                      {locations.website}
                      <br></br>
                      {locations.phone}
                    </ListGroup.Item>
                  </ListGroup>
                );
              })}
              <br />
              <Card.Title>Appointments</Card.Title>
              <Button size="lg" block href="/book-appointment">
                Book now
              </Button>
              <br />
              <div align="center">Next availability: Thursday, April 8</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Container>
        <Row>
          <Col md={8}>
            <br />
            <div align="center">
              <h3>
                Overall Rating:
                <br />
                {/* {rating} TODO */}
                5.0
              </h3>
            </div>
            <Image
              src={fivestar}
              className="mx-auto d-block"
              style={{ width: "50%" }}
            />
          </Col>
          <Col>
            <br />
            <div align="center">
              Bedside Manner:
              <Image
                src={fivestar}
                className="mx-auto d-block"
                style={{ width: "30%" }}
              />
              <br />
              Average wait time:
              <Image
                src={fivestar}
                className="mx-auto d-block"
                style={{ width: "30%" }}
              />
              <br />
              Availability:
              <Image
                src={fivestar}
                className="mx-auto d-block"
                style={{ width: "30%" }}
              />
              <br />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Card>
          <Card.Body>
            <blockquote className="blockquote mb-0 text-center">
              <p>
                {" "}
                "Doctor Farhad really helped me to achieve a natural look after
                my surgery. I would highly recommend him for anyone that is
                interested in plastic surgery."{" "}
              </p>
              <footer className="blockquote-footer">
                Karen K. <cite title="Source Title"></cite>
              </footer>
            </blockquote>
          </Card.Body>
          <Accordion>
            <Card>
              <Card.Header className="text-center">
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  More Reviews
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <blockquote className="blockquote mb-0 text-center">
                    <p>
                      {" "}
                      "Doctor Farhad really helped me to regain my beauty after
                      my surgery. He was really understanding and catered to me.
                      The staff was also very friendly."{" "}
                    </p>
                    <footer className="blockquote-footer text-center">
                      Cynthia C. <cite title="Source Title"></cite>
                    </footer>
                  </blockquote>
                  <br></br>
                  <br></br>
                  <blockquote className="blockquote mb-0 text-center">
                    <p>
                      {" "}
                      "I needed to find a reliable doctor for my cosmetic
                      surgery, my friends recommended Dr. Farhad, and I can not
                      recommend him enough! Procedure was swift and my
                      appointment was quick."{" "}
                    </p>
                    <footer className="blockquote-footer text-center">
                      Jessica J.<cite title="Source Title"></cite>
                    </footer>
                  </blockquote>
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
            <Button variant="primary" size="lg" href="/book-appointment">
              Book Appointment Now
            </Button>
            <br />
            <br />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DoctorProfile;
