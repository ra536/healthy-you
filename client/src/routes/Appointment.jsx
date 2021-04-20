import React, { useEffect, useContext, useState } from "react";
import DoctorAPI from "../apis/DoctorAPI";
import AppointmentAPI from '../apis/AppointmentAPI';
import UserAPI from '../apis/UserAPI';
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
  const [reason, setReason] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [insurance, setInsurance] = useState("");
  const [gender, setGender] = useState("Gender");
  const [seen, setSeen] = useState("Y/N");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        if(loggedIn){
          const response = await UserAPI.post("/findOne", {
            user_id: id,
          });
          console.log(response.data.data);
          setFirstName(response.data.data.firstName)
          setLastName(response.data.data.lastName)
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const getApptID = async (appt_id) => {
    console.log(appt_id);
    setApptID(appt_id);
  }
  
  const submitAppt = async () => {
    if(loggedIn && selectedApptID != "" && new Date(parseInt(year), parseInt(month)-1, parseInt(day), 0, 0,0) != "Invalid Date" && gender != "Gender" && seen != "Y/N"){
        alert("success")
        try {
          const response = await AppointmentAPI.put("/bookAppt", {
            appointment_id: selectedApptID,
            doctor_id: doctorID,
            reason: reason,
            user_id: id,
            first_name: firstName,
            last_name: lastName,
            dob: new Date(parseInt(year), parseInt(month)-1, parseInt(day), 0, 0,0),
            insurance: insurance,
            gender: gender,
            seen: seen
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
              <Form.Control type="name" value={firstName} onChange={(e) => {setFirstName(e.target.value); console.log(e.target.value)}}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" xs={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="last" value={lastName} onChange={(e) => {setLastName(e.target.value); console.log(e.target.value)}}/>
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail" xs={4}>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="name" placeholder="MM" onChange={(e) => {setMonth(e.target.value)}}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" xs={4}>
              <Form.Label>Day</Form.Label>
              <Form.Control type="last" placeholder="DD" onChange={(e) => {setDay(e.target.value)}}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" xs={4}>
              <Form.Label>Year</Form.Label>
              <Form.Control type="last" placeholder="YYYY" onChange={(e) => {setYear(e.target.value)}}/>
            </Form.Group>
          </Form.Row>

          <br />

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity" xs={6}>
              <Form.Label>What's the reason for your visit?</Form.Label>
              <Form.Control onChange={(e) => {setReason(e.target.value); console.log(e.target.value)}}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity" xs={6}>
              <Form.Label>What's your insurance plan?</Form.Label>
              <Form.Control onChange={(e) => {setInsurance(e.target.value); console.log(e.target.value)}}/>
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword" xs={6}>
              <Form.Label>Sex</Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                title={gender}
                variant="success"
                expand="lg"
              >
                <Dropdown.Item href="" onClick={() => setGender("Male")}>Male</Dropdown.Item>
                <Dropdown.Item href="" onClick={() => setGender("Female")}>Female</Dropdown.Item>
              </DropdownButton>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Has the Patient seen this Doctor before?</Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                title={seen}
                variant="success"
                expand="lg"
              >
                <Dropdown.Item href="" onClick={() => setSeen("Yes")}>Yes</Dropdown.Item>
                <Dropdown.Item href="" onClick={() => setSeen("No")}>No</Dropdown.Item>
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
