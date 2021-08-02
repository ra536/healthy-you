import React, { useContext } from "react";
import LoginForm from "../components/LoginForm";
import {Redirect, useParams} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

const Login = () => {
    let { region } = useParams();
  const { loggedIn } = useContext(AuthContext);
  return loggedIn === true ? (
    <Redirect to={"/" + region} />
  ) : (
    <div>
      <TopNavBar currentRegion={region}/>
      <Container>
        <h1>Login</h1>
        <LoginForm currentRegion={region}/>
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
      <Footer currentRegion={region}/>
    </div>
  );
};

export default Login;
