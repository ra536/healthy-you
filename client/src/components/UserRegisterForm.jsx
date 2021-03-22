import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import UserAPI from '../apis/UserAPI'

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(4).max(16).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")]),
    email: yup.string().email().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    birthdate: yup.string().required()
})


//Lets user input a test object into backend db
const RegisterForm = () => {

    const { register, handleSubmit, errors, setError } = useForm({
        resolver: yupResolver(schema)
    });

    const submitForm = async (data) => {
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
            setError('email', {
                type: "server",
                message: response.data.status[0].message,
            });
        }
        catch (err) {
            console.log(err)
        }
    };

    return (
        <form onSubmit={ handleSubmit(submitForm) }>
            <div>
            <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    ref={ register }
                />
                <p> { errors.email && errors.email.message} </p>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={ register }
                />
                <p> { errors.password?.message } </p>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    ref={ register }
                />
                <p> { errors.confirmPassword && "Passwords don't match" } </p>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    ref={ register }
                />
                <p> { errors.firstName?.message } </p>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    ref={ register }
                />
                <p> { errors.lastName?.message } </p>
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    ref={ register }
                />
                <p> { errors.city?.message } </p>
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    ref={ register }
                />
                <p> { errors.state?.message } </p>
                <input
                    type="text"
                    name="birthdate"
                    placeholder="Birthdate MM/DD/YYYY"
                    ref={ register }
                />
                <p> { errors.birthdate?.message } </p>
                <input type="submit" id="submit" />
            </div>
        </form>
    )
}

export default RegisterForm;


