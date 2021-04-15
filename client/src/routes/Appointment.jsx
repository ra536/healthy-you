import React, { useEffect, useContext, useState } from "react";
import DoctorAPI from "../apis/DoctorAPI";

import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import {
  Container,
  Table,
  Image,
  Row,
  Col,
  Card,
  ListGroup,
} from "react-bootstrap";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Accordion,
  Modal,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import fivestar from "./fivestar.png";

import axios from "axios";
import TopNavBar from "../components/TopNavBar";

const Appointment = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <TopNavBar />
      <br />
      <div align="center">
        <h3>Book an Appointment Today!</h3>
      </div>
      <br />

      <Container align="left" display="inline">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail" xs={6}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" placeholder="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" xs={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="last" placeholder="" />
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail" xs={4}>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="name" placeholder="MM" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" xs={4}>
              <Form.Label>Day</Form.Label>
              <Form.Control type="last" placeholder="DD" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" xs={4}>
              <Form.Label>Year</Form.Label>
              <Form.Control type="last" placeholder="YYYY" />
            </Form.Group>
          </Form.Row>

          <br />

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity" xs={6}>
              <Form.Label>What's the reason for your visit?</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity" xs={6}>
              <Form.Label>What's your insurance plan?</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword" xs={6}>
              <Form.Label>Sex</Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                title="Gender"
                variant="success"
                expand="lg"
              >
                <Dropdown.Item href="">Male</Dropdown.Item>
                <Dropdown.Item href="">Female</Dropdown.Item>
              </DropdownButton>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Has the Patient seen this Doctor before?</Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                title="Y/N"
                variant="success"
                expand="lg"
              >
                <Dropdown.Item href="">Yes</Dropdown.Item>
                <Dropdown.Item href="">No</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Form.Row>

          <br />
        </Form>

        <Row>
          <>
            <Col>
              <Button
                variant="success"
                type="submit"
                size="lg"
                block
                block
                onClick={handleShow}
              >
                Choose Date and Time
              </Button>
              Next Availability: Thursday, April 8
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Book your Appointment time!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <div align="center">
                    <h6>Choose a time and location that works with you:</h6>
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="dark"
                      id="dropdown-basic"
                      size="sm"
                      block
                    >
                      Location...
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="">
                        123 Main St, Newark NJ 09435
                      </Dropdown.Item>
                      <Dropdown.Item href="">
                        123 Martin Luther King Jr Dr, Newark NJ 09435
                      </Dropdown.Item>
                      <Dropdown.Item href="">
                        123 John F Kennedy Blvd, Newark NJ 09435
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <br />
                  <h6>Monday, April 5</h6>
                  <Row></Row>
                  <Button variant="success" type="submit" size="sm">
                    11:30 PM
                  </Button>
                  &nbsp; &nbsp;
                  <Button variant="success" type="submit" size="sm">
                    12:30 PM
                  </Button>
                  &nbsp; &nbsp;
                  <Button variant="success" type="submit" size="sm">
                    1:00 PM
                  </Button>
                  <br />
                  <br />
                  <h6>Tuesday, April 6</h6>
                  <Row></Row>
                  <Button variant="success" type="submit" size="sm">
                    12:00 PM
                  </Button>
                  &nbsp; &nbsp;
                  <Button variant="success" type="submit" size="sm">
                    12:30 PM
                  </Button>
                  &nbsp; &nbsp;
                  <Button variant="success" type="submit" size="sm">
                    1:00 PM
                  </Button>
                  &nbsp; &nbsp;
                  <Button variant="success" type="submit" size="sm">
                    2:00 PM
                  </Button>
                  <br />
                  <br />
                  <h6>Wednesday, April 7</h6>
                  <Row></Row>
                  <Button variant="success" type="submit" size="sm">
                    10:00 AM
                  </Button>
                  &nbsp; &nbsp;
                  <Button variant="success" type="submit" size="sm">
                    3:00 PM
                  </Button>
                  <br />
                  <br />
                  <h6>Thursday, April 8</h6>
                  <Row></Row>
                  <Button variant="success" type="submit" size="sm">
                    8:00 AM
                  </Button>
                  <br />
                  <br />
                  <h6>Friday, April 9</h6>
                  <Row></Row>
                  <Button variant="success" type="submit" size="sm">
                    11:00 AM
                  </Button>
                  &nbsp; &nbsp;
                  <Button variant="success" type="submit" size="sm">
                    1:30 PM
                  </Button>
                  &nbsp; &nbsp;
                  <Button variant="success" type="submit" size="sm">
                    3:00 PM
                  </Button>
                  &nbsp; &nbsp;
                  <Button variant="success" type="submit" size="sm">
                    3:30 PM
                  </Button>
                  &nbsp; &nbsp;
                  <Button variant="success" type="submit" size="sm">
                    More
                  </Button>
                  <br />
                  <br />
                  <h6>Saturday, April 10</h6>
                  <Button variant="secondary" type="submit" size="sm">
                    No Availability
                  </Button>
                  <br />
                  <br />
                  <h6>Sunday, April 11</h6>
                  <Button variant="secondary" type="submit" size="sm">
                    No Availability
                  </Button>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="success" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </>
          <Col>
            <div align="center">
              <Button variant="success" type="submit" size="lg" block disabled>
                Submit
              </Button>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Appointment;
