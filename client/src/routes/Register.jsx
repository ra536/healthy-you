import React, { Component, useState } from "react";
import TestAPI from '../apis/TestAPI';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Login.css";
const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [doctor, setDoctor] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0 && name.length > 0 && userName.length > 0 && doctor.length > 0 && address.length > 0 && phoneNumber.length > 0;
    }

    const handleSubmit = async (e, value) => {
        e.preventDefault();
        try {

            // console.log("email?", email);
            // console.log("password?", password)
            // const response = await TestAPI.post("/", {
            //     praticeName: name,
            //     practiceUserName: userName,
            //     userEmail: email,
            //     practicePassword: password,
            //     practiceDoctor: doctor,
            //     address: address,
            //     phoneNumber: phoneNumber
            //     });
            // console("got here")
            // console.log(response.data.data)    
        }
       catch (err) {
        console.log(err)
    }
    // setPassword("");
  };
        return (
            <div className="Register">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg">
                <Form.Label>Name of Practice</Form.Label>
                <Form.Control
                    placeholder="Enter enter practice name"
                    autoFocus
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                </Form.Group>

                <Form.Group size="lg">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    placeholder="Enter enter account username"
                    autoFocus
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                </Form.Group>


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

                <Form.Group size="lg">
                <Form.Label>Primary doctor</Form.Label>
                <Form.Control
                    placeholder="Enter primary doctor's name"
                    autoFocus
                    value={ doctor }
                    onChange={e => setDoctor(e.target.value)}
                />
                </Form.Group>

                <Form.Group size="lg">
                <Form.Label>Enter Address (Street, City, State, ZIP code)</Form.Label>
                <Form.Control
                    placeholder="Enter address (Street, City, State, ZIP code)"
                    autoFocus
                    value={ address }
                    onChange={e => setAddress(e.target.value)}
                />
                </Form.Group>

                <Form.Group size="lg">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    placeholder="Enter primary doctor's name"
                    autoFocus
                    value={ phoneNumber }
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                </Form.Group>


                <Button block size="lg" type="submit" disabled={!validateForm()}>
                Register
                </Button>
                <p>
                    Already have an account? <a href="/login">Log in</a>
                </p>
            </Form>
            </div>
        );
}

export default Register;