import React, { useContext, useState } from 'react'
import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap'
import UserAPI from '../apis/UserAPI'

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(16).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")]),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required("You must enter your state"),
    birthdate: yup.string().required()
})


//Lets user input a test object into backend db
const RegisterForm = () => {
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                firstName: "",
                lastName: "",
                city: "",
                state: "",
                birthdate: ""
            }}
            onSubmit={(data) => console.log(data)}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values
            }) => {
                return (
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group controlId="formEmail">
                        <Form.Label> Email </Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            values={ values.email }
                            onChange={ handleChange }
                            onBlue={ handleBlur }
                            placeholder="Enter your email!"
                        />
                        <Form.Control.Feedback>
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default RegisterForm;


