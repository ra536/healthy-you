import React, { useContext } from 'react';
import RegistrationForm from '../components/RegistrationForm'
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Registration = () => {
    const { loggedIn } = useContext(AuthContext);
    return loggedIn === true ?
        (
            <Redirect to="/" />
        )
        :
        (
            <div>
                <h1>Login</h1>
                <RegistrationForm />
            </div>
        )
}

export default Registration;