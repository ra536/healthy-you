import React, { useEffect, useContext } from 'react';
import LoginForm from '../components/LoginForm'
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    return !props.loggedIn ?
        (
            <Redirect to="/" />
        )
        :
        (
            <div>
                <h1>Login</h1>
                <LoginForm />
            </div>
        )
}

export default Login;