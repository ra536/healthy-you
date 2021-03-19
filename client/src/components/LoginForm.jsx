import React, { useState } from "react";
import LoginAPI from '../apis/LoginAPI';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect, Link } from 'react-router-dom'



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [isDoctor, setIsDoctor] = useState(false);
    const [isUser, setIsUser] = useState(false);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = async (e, value) => {
      let endpoint = "/" + email + " " + password;
      e.preventDefault();
      try {
          const response = await LoginAPI.get(endpoint, {
            userEmail: email,
            practicePassword: password
            });
          // console.log(typeof response.data.data)
          console.log(response.data.data)
          if(response.data.data){
            setLoggedIn(true);
          }

          else{
            //return error on screen/ incremented times attempted
          }

            if (response.data.data.role === "User"){
            setIsUser(true)
            }

            else{
            setIsDoctor(true)
            }
        }
       catch (err) {
        console.log(err)
    }
    setPassword("");
  };

  return loggedIn && isUser ? (
    <Redirect to='/' />
  ) : loggedIn && isDoctor ? (
    <Redirect to='/doctorid/doctor-dashboard' />
  ) : (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg">
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Enter email"
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <p>
            New Account? <a href="/register">Register here</a>
        </p>
      </Form>
    </div>
  );
}

export default Login;