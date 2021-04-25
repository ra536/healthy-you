import React, { useContext } from "react";
import LoginForm from "../components/LoginForm";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

const Login = () => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn === true ? (
    <Redirect to="/" />
  ) : (
    <div>
      <TopNavBar />
      <Container>
        <h1>Login</h1>
        <LoginForm />
      </Container>
      <br />
      <br />
      <br />
      <br />
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

export default Login;
