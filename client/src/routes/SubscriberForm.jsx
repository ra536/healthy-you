import React, { useEffect, useState } from "react";
import TopNavBar from "../components/TopNavBar";
import SubscriberAPI from "../apis/SubscriberAPI";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import * as yup from "yup";

const Subscribe = () =>{
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
    });
    return(
        <>
        <TopNavBar/>
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
                        alert("you have sucessfully subscribed")
                    }

                    else{
                        setErrors({ email: response.data.status[0].message });
                        console.log(response.data.status[0].message);
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
                    <Button type="submit">Submit</Button>
                  </Form>
                );
              }}
            </Formik>
        </>

    );
}

export default Subscribe;