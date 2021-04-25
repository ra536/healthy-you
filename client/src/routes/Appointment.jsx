import React, { useEffect, useContext, useState } from "react";
import DoctorAPI from "../apis/DoctorAPI";
import AppointmentAPI from '../apis/AppointmentAPI';
import UserAPI from '../apis/UserAPI';
import InsuranceAPI from '../apis/InsuranceAPI';
import ApptCalendar from '../components/ApptCalendar';
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
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
import Footer from "../components/Footer";


const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  reason: yup.string().required("Your reason for the appointment is required!"),
  day: yup.string().required("Enter a valid date"),
  month: yup.string().required("Enter a valid month"),
  year: yup.string().required("Enter a valid year"),
  // insurance: yup.string().required("Your insurance plan is required"),
  gender: yup.string().required("Gender is required"),
  firstTime: yup.string().required("State if you are a returning patient"),
});

const Appointment = (props) => {

  let history = useHistory();

  const { loggedIn, role, id } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const doctorID = props.location.pathname.split("/")[2];
  const [selectedApptID, setApptID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("Gender");
  const [allInsurance, setAllInsurance] = useState([]);
  const [popular, setPopular] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState("I'm paying for myself (Paying out of pocket)");
  const [usersInsurance, setUsersInsurance] = useState("I'm paying for myself (Paying out of pocket)");
  const [otherInsurance, setOtherInsurance] = useState([
    { insurance: "I'm paying for myself (Paying out of pocket)", disabled: false, fontSize: 18, color: "black" },
    { insurance: "I'll choose my insurance later", disabled: false, fontSize: 18, color: "black" }
  ])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        if (loggedIn) {
          const response = await UserAPI.post("/findOne", {
            user_id: id,
          });
          console.log(response.data.data);
          setFirstName(response.data.data.firstName)
          setLastName(response.data.data.lastName)

          const insuranceResponse = await InsuranceAPI.get("/findAll");
          // console.log(insuranceResponse.data.data);
          getPopularCarriers(insuranceResponse.data.data);
          getAllCarriers(insuranceResponse.data.data);
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

  const getPopularCarriers = (data) => {
    var temp = [{ insurance: "Popular carriers", disabled: true, fontSize: 25, color: "grey" }]
    var index = 1;
    for (var i = 0; i < data.length; i++) {
      if (data[i].popular == 1) {
        temp[index] = { insurance: data[i].insurance, disabled: false, fontSize: 18, color: "black" };
        index += 1;
      }
    }
    setPopular(temp);
  }

  const getAllCarriers = (data) => {
    var temp = [
      { insurance: "All carriers", disabled: true, fontSize: 25, color: "grey" },
      { insurance: "#", disabled: true, fontSize: 25, color: "blue" }
    ];
    var current = "#"
    var index = temp.length;
    for (var j = 0; j < data.length; j++) {
      if (data[j].insurance.charAt(0) >= '0' && data[j].insurance.charAt(0) <= '9') {
        temp[index] = { insurance: data[j].insurance, disabled: false, fontSize: 18, color: "black" }
        index += 1;
      } else {
        if (data[j].insurance.charAt(0) != current) {
          current = data[j].insurance.charAt(0);
          temp[index] = { insurance: current, disabled: true, fontSize: 25, color: "blue" }
          index += 1;
        }
        temp[index] = { insurance: data[j].insurance, disabled: false, fontSize: 18, color: "black" }
        index += 1;
      }
    }
    // console.log(temp)
    setAllInsurance(temp)
  }

  const onClickSelect = (data) => {
    console.log(data.target.value)
    setSelectedInsurance(data.target.value);
  }

  const onClickSave = () => {
    setUsersInsurance(selectedInsurance);
    handleClose();
  }

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        reason: "",
        day: "",
        month: "",
        year: "",
        // insurance: "",
        gender: "",
        firstTime: "",
      }}
      validationSchema={schema}
      onSubmit={async (data, { setErrors }) => {
        console.log(data);
        console.log(gender);
        try {
          if (loggedIn && selectedApptID != "" && new Date(parseInt(data.year), parseInt(data.month) - 1, parseInt(data.day), 0, 0, 0) != "Invalid Date") {
            console.log('yes')
            const response = await AppointmentAPI.put("/bookAppt", {
              appointment_id: selectedApptID,
              doctor_id: doctorID,
              reason: data.reason,
              user_id: id,
              first_name: data.firstName,
              last_name: data.lastName,
              dob: new Date(parseInt(data.year), parseInt(data.month) - 1, parseInt(data.day), 0, 0, 0),
              insurance: usersInsurance,
              gender: data.gender,
              seen: data.firstTime
            });
            console.log(response);
          }
        }
        catch (err) {
          console.log(err)
        }
        history.push("/doctor-profile/" + doctorID);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        isInvalid,
      }) => {
        return (
          <div>
            <TopNavBar />
            <br />
            <div align="center">
              <h3>Book an Appointment Today!</h3>
            </div>
            <br />

            <Container align="left" display="inline">
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail" xs={6}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      values={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="First name"
                      isInvalid={!!(errors.firstName && touched.firstName)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword" xs={6}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      values={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Last name"
                      isInvalid={!!(errors.lastName && touched.lastName)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail" xs={4}>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="text"
                      name="month"
                      values={values.month}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="MM"
                      isInvalid={!!(errors.month && touched.month)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.month}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword" xs={4}>
                    <Form.Label>Day</Form.Label>
                    <Form.Control
                      type="text"
                      name="day"
                      values={values.day}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="DD"
                      isInvalid={!!(errors.day && touched.day)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.day}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword" xs={4}>
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      type="text"
                      name="year"
                      values={values.year}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="YYYY"
                      isInvalid={!!(errors.year && touched.year)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.year}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <br />

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity" xs={6}>
                    <Form.Label>What's the reason for your visit?</Form.Label>
                    <Form.Control
                      type="text"
                      name="reason"
                      values={values.reason}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Reason"
                      isInvalid={!!(errors.reason && touched.reason)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.reason}
                    </Form.Control.Feedback>


                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridCity" xs={6}>
                    <Form.Label>What's your insurance plan?</Form.Label>
                    <Form.Control
                      type="button"
                      name="insurance"
                      values={values.insurance}
                      value={usersInsurance}
                      onClick={handleShow}
                      style={{ textAlign: "left" }}
                    >
                    </Form.Control>
                    <Modal show={show} onHide={handleClose} size="lg" centered>
                      <Modal.Header closeButton>
                        <Modal.Title>Choose Your Insurance Plan</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form.Group>
                          <Form.Label>What's your insurance plan?</Form.Label>
                          <Form.Control
                            as="select"
                            custom
                            htmlSize={10}
                            values={values.insurance}
                            onChange={onClickSelect}
                          >
                            {otherInsurance.map((otherInsurance, index) => {
                              return (
                                <option
                                  key={index}
                                  value={otherInsurance.insurance}
                                  disabled={otherInsurance.disabled}
                                  style={{ fontSize: otherInsurance.fontSize, color: otherInsurance.color, margin: 7 }}
                                >
                                  {otherInsurance.insurance}
                                </option>
                              );
                            })}
                            <hr />
                            {popular.map((popular, index) => {
                              return (
                                <option
                                  key={index}
                                  value={popular.insurance}
                                  disabled={popular.disabled}
                                  style={{ fontSize: popular.fontSize, color: popular.color, margin: 7 }}
                                >
                                  {popular.insurance}
                                </option>
                              );
                            })}
                            <hr />
                            {allInsurance.map((allInsurance, index) => {
                              return (
                                <option
                                  key={index}
                                  value={allInsurance.insurance}
                                  disabled={allInsurance.disabled}
                                  style={{ fontSize: allInsurance.fontSize, color: allInsurance.color, margin: 7 }}
                                >
                                  {allInsurance.insurance}
                                </option>
                              );
                            })}
                          </Form.Control>
                        </Form.Group>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={onClickSave}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Form.Group>

                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Group as={Col} controlId="gender" xs={6}>
                    <Form.Label>Sex</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      values={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!(errors.gender && touched.gender)}
                    >
                      <option value=""></option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.gender}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="firstTime">
                    <Form.Label>Has the Patient seen this Doctor before?</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      values={values.firstTime}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!(errors.firstTime && touched.firstTime)}
                    >
                      <option value=""></option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.firstTime}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <br />
              </Form>
              <Row>
                <ApptCalendar doctorID={doctorID} user_appt_selected={getApptID} />
                <Col>
                  <div style={{ margin: 20 }} align="center">
                    <Button variant="success" type="submit" size="lg" onClick={handleSubmit}>
                      Submit
                    </Button>
                    {/*href={"/doctor-profile/" + doctorID}*/}
                    <br />
                  </div>
                </Col>
              </Row>
            </Container>
            <Footer />
          </div>
        );
      }}
    </Formik>
  );
};

export default Appointment;
