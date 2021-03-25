import React, { useContext, useState } from 'react'
import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap'
import UserAPI from '../apis/UserAPI'

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(16).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")]).required(),
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
            validationSchema={ schema }
            onSubmit={ async (data, { setErrors }) => {
                console.log(data);
                try {
                    const response = await UserAPI.post("/create", {
                        password: data.password,
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        city: data.city,
                        state: data.state,
                        birthdate: data.birthdate
                    })
                    setErrors({ email: response.data.status[0].message})
                    console.log(response.data.status[0].message)
                }
                catch (err) {
                    console.log(err)
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
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group controlId="formEmail">
                            <Form.Label> Email </Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                values={ values.email }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                placeholder="Enter your email!"
                                isInvalid={ !!(errors.email && touched.email) }
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.email }
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label> Password </Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                values={ values.password }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                placeholder="Enter your password!"
                                isInvalid={ !!(errors.password && touched.password) }
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.password }
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label> Confirm your password </Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                values={ values.confirmPassword }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                placeholder="Confirm your password!"
                                isInvalid={ !!(errors.confirmPassword && touched.confirmPassword) }
                            />
                            <Form.Control.Feedback type="invalid">
                                Passwords do not match!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formFirstName">
                            <Form.Label> First Name </Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                values={ values.firstName }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                placeholder="Enter your first name!"
                                isInvalid={ !!(errors.firstName && touched.firstName) }
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.firstName }
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formLastName">
                            <Form.Label> Last Name </Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                values={ values.lastName }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                placeholder="Enter your last name!"
                                isInvalid={ !!(errors.lastName && touched.lastName) }
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.lastName }
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formCity">
                            <Form.Label> City </Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                values={ values.city }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                placeholder="Enter your city!"
                                isInvalid={ !!(errors.city && touched.city) }
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.city }
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formState">
                            <Form.Label> State </Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                values={ values.state }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                placeholder="Enter your state!"
                                isInvalid={ !!(errors.state && touched.state) }
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.state }
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBirthdate">
                            <Form.Label> Birthdate </Form.Label>
                            <Form.Control
                                type="text"
                                name="birthdate"
                                values={ values.birthdate }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                placeholder="Enter your birthdate! (MM/DD/YYYY)"
                                isInvalid={ !!(errors.birthdate && touched.birthdate) }
                            />
                            <Form.Control.Feedback type="invalid">
                                { errors.birthdate }
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


