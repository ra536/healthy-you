import React, { useContext } from "react";
import RegistrationForm from "../components/RegistrationForm";
import {Redirect, useParams} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import TopNavBar from "../components/TopNavBar";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

const Registration = () => {
    let { region } = useParams();
  const { loggedIn } = useContext(AuthContext);
  return loggedIn === true ? (
    <Redirect to="/" />
  ) : (
    <div>
      <TopNavBar currentRegion={region}/>
      <Container>
        <h1>Register</h1>
        <RegistrationForm />
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer currentRegion={region}/>
    </div>
  );
};

export default Registration;
