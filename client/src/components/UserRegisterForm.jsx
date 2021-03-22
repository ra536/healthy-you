import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import RegisterAPI from '../apis/RegisterAPI'

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(4).max(16).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password", null)]),
    email: yup.string().email().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    birthdate: yup.string().required()
})


//Lets user input a test object into backend db
const RegisterForm = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setlastName] = useState("");
    // const [city, setCity] = useState("");
    // const [state, setState] = useState("");
    // const [email, setEmail] = useState("");
    // const [birthdate, setBirthdate] = useState("");

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const response = await RegisterAPI.post("/", {
    //             username: username,
    //             password: password,
    //             firstName: firstName,
    //             lastName: lastName,
    //             city: city,
    //             state: state,
    //             email: email,
    //             birthdate: birthdate
    //         })
    //         console.log(response.data.data)
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }

    return (
        <form>
            <div>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    //onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    //onChange={e => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    //onChange={e => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    //onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    //onChange={e => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    //onChange={e => setlastName(e.target.value)}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    //onChange={e => setCity(e.target.value)}
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    //onChange={e => setState(e.target.value)}
                />
                <input
                    type="text"
                    name="birthdate"
                    placeholder="Birthdate"
                    //onChange={e => setBirthdate(e.target.value)}
                />
                <input type="submit" id="submit" />
            </div>
        </form>
    )
}

export default RegisterForm;


