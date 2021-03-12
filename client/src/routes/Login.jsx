import React, { useState } from "react";
import LoginAPI from '../apis/LoginAPI';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Login.css";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = async (e, value) => {
        e.preventDefault();
        try {
            if(email.includes("@")){
                const response = await LoginAPI.get("/", {
                    userEmail: email,
                    practicePassword: password
                    });
                console.log(response.data.data)
            }
            else{
                const response = await LoginAPI.get("/", {
                    practiceUserName: email,
                    practicePassword: password
                    });
                console.log("got here 2")
                console.log(response.data.data)
            }
               
        }
       catch (err) {
        console.log(err)
    }
    setPassword("");
  };

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg">
          <Form.Label>Email or Username</Form.Label>
          <Form.Control
            placeholder="Enter email or username"
            autoFocus
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

