import React, { useContext } from 'react';
import UserRegistrationForm from '../components/UserRegistrationForm'
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const { loggedIn } = useContext(AuthContext);
    return loggedIn == true ?
        (
            <Redirect to="/" />
        )
        :
        (
            <div>
                <h1>Login</h1>
                <UserRegistrationForm />
            </div>
        )
}

export default Register;