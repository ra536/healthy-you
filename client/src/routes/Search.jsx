import React, { useEffect, useState } from "react";
//import SearchAPI from '../apis/SearchAPI'
import { useHistory } from "react-router-dom";
import SpecialtyAPI from "../apis/SpecialtyAPI";
import TopNavBar from "../components/TopNavBar";
import SearchBar from '../components/SearchBar';
import { Container } from "react-bootstrap";
import {
  Accordion,
  Button,
  Card,
  ListGroup,
  ButtonGroup,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import magazine from "../components/magazines/magazine.jpg";
import doctorPhoto from "./file.jpg";
import adLong from "../components/ads/ad300.jpg";

const Search = () => {

  return (
    <div>
      <TopNavBar />
      <Container>
        <SearchBar/>
      </Container>
    </div>
  );
};

export default Search;
