import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router';
import LoginForm from '../components/LoginForm'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const { status } = useContext(AuthContext)
    console.log(status)
    return status ? (
            <Redirect to='/' />
          ) :
    (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

export default Login;