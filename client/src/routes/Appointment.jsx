import React, { useEffect, useContext, useState } from "react";
import DoctorAPI from "../apis/DoctorAPI";
import AppointmentAPI from '../apis/AppointmentAPI';
import ApptCalendar from '../components/ApptCalendar';
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
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

  let history = useHistory();

  const { loggedIn, role, id } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const doctorID = props.location.pathname.split("/")[2];
  const [selectedApptID, setApptID] = useState("");
  // const [startDT, setStartDT] = useState("");
  // const [endDT, setEndDT] = useState("");
  // const [duration, setDurationInMin] = useState("");
  const [reason, setReason] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const formatDT = (dt) => {
    dt = new Date(dt);
    return (Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(dt));
  }

  const getApptID = async (appt_id) => {
    console.log(appt_id);
    setApptID(appt_id);
    // try {
    //   const response = await (AppointmentAPI.post("/getApptInfo", {
    //       appointment_id: appt_id
    //   }));
    //   setStartDT(formatDT(response.data.data[0].start_time));
    //   setEndDT(formatDT(response.data.data[0].end_time));
      
    //   var diff = new Date(response.data.data[0].end_time) - new Date(response.data.data[0].start_time); //in ms
    //   diff = diff/1000;
    //   diff = diff/60;
    //   diff = Math.abs(Math.round(diff));
    //   console.log(diff);
    //   setDurationInMin(diff + " Minutes");
    // }
    // catch (err) {
    //     console.log(err)
    // }
  }

  const handleReasonChange = (data) => {
    setReason(data.target.value);
  }

  const submitAppt = async () => {
    if(loggedIn && selectedApptID != ""){
      alert("success")
      try {
        const response = await AppointmentAPI.put("/bookAppt", {
          appointment_id: selectedApptID,
          doctor_id: doctorID,
          reason: reason,
          user_id: id
        }
        );
        console.log(response);
      }
      catch (err) {
          console.log(err)
      }
      history.push("/doctor-profile/" + doctorID);
    }
  }

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
              <Form.Control onChange={handleReasonChange}/>
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
          <ApptCalendar doctorID={doctorID} user_appt_selected={getApptID}/>
          <Col>
            <div style={{margin:20}} align="center">
              <Button variant="success" type="submit" size="lg" onClick={submitAppt} >
                Submit
              </Button>
              {/*href={"/doctor-profile/" + doctorID}*/}
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Appointment;
