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
} from "react-bootstrap";
import fivestar from "./fivestar.png";

import axios from "axios";
import TopNavBar from "../components/TopNavBar";

const Appointment = (props) => {

  return (
    <>
      <TopNavBar />
      <br />
    </>
  );
};

export default Appointment;