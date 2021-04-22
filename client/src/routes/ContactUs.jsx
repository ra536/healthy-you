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
import Form from 'react-bootstrap/Form'

import Moment from "react-moment";
import "moment-timezone";

// import axios from "axios";
import TopNavBar from "../components/TopNavBar";

const ContactUs = (props) => {


  
  return (
    <>
	<TopNavBar/>
	<Container>
		  <Row>

	  <Col>
	  <div align="center">
	  
	  	  <h1>
		  Contact Us
		  </h1>
		</div>  
	  <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name"/>
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridSubject">
      <Form.Label>Subject</Form.Label>
      <Form.Control />
    </Form.Group>

  </Form.Row>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
<br>
</br>
  <Button variant="primary" type="submit" block>
    Submit
  </Button>
</Form>
	</Col>
	
	  </Row>
	  </Container>
    </>
  );
};

export default ContactUs;
