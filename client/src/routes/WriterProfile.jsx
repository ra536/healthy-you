import React, { useEffect, useState } from "react";
import WriterAPI from "../apis/WriterAPI";

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

const WriterProfile = (props) => {
  let { writerID } = useParams();
  const [name, setName] = useState();
  const [cityState, setCityState] = useState();
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await WriterAPI.post(
          "/findOne",
          {
            writer_id: writerID,
          },
          {
            withCredentials: false,
          }
        );
        console.log(response.data.data);
        setName(
          response.data.data.firstName + " " + response.data.data.lastName
        );
        setCityState(response.data.data.city + ", " + response.data.data.state);
        setEmail(response.data.data.email);
      } catch (err) {
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
          <Card.Text>TODO</Card.Text>
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
              <Card.Title>Contact Information</Card.Title>
              <Card.Text>Email: {email}</Card.Text>
              <br />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>

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
    </>
  );
};

export default WriterProfile;
