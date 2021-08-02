import React, { useEffect, useState } from "react";
import TopNavBar from "../components/TopNavBar";
import SubscriberAPI from "../apis/SubscriberAPI";
import { Formik } from "formik";
import { Form, Button, Container } from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";
import * as yup from "yup";

const Subscribe = () =>{
    let { region } = useParams();
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
    });

    let history = useHistory();
    return(
        <>
        <TopNavBar currentRegion={region}/>
        <div align="center">
        <h1>Subscribe</h1>
        </div>
        <Container>
        <Formik
            initialValues={{
                email: "",
                firstName: "",
                lastName: "",
            }}
            validationSchema={schema}
            onSubmit={async (data, { setErrors }) => {
                try {
                    const response = await SubscriberAPI.post("/", {
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName,
                    });
                    console.log(response.data)
                    if (response.data.status === "success"){
                        alert("You have successfully subscribed")
                        history.push("/");
                    }

                    else{
                        setErrors({ email: response.data.status[0].message });
                    }
                } catch (error) {
                    console.log(error)
                }
            }}
            >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
                isInvalid,
              }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formEmail">
                      <Form.Label> Email </Form.Label>
                      <Form.Control
                        type="text"
                        name="email"
                        values={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your email!"
                        isInvalid={!!(errors.email && touched.email)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback><br />
                    <Form.Group controlId="formFirstName">
                      <Form.Label> First Name </Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        values={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your first name!"
                        isInvalid={!!(errors.firstName && touched.firstName)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                      <Form.Label> Last Name </Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        values={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your last name!"
                        isInvalid={!!(errors.lastName && touched.lastName)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                    
                    </Form.Group>
                    <br />
                    <Button type="submit" block>Submit</Button>
                  </Form>
                );
              }}
            </Formik>
            </Container>
        </>

    );
}

export default Subscribe;