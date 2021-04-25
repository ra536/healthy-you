import React, { useContext } from "react";
import RegistrationForm from "../components/RegistrationForm";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import TopNavBar from "../components/TopNavBar";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

const Registration = () => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn === true ? (
    <Redirect to="/" />
  ) : (
    <div>
      <TopNavBar />
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
      <Footer />
    </div>
  );
};

export default Registration;
