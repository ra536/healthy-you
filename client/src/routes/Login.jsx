import React, { useContext } from 'react';
import LoginForm from '../components/LoginForm'
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { loggedIn } = useContext(AuthContext);
    return loggedIn === true ?
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