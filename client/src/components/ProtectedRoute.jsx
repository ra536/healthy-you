import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ component: Component, requiredRole: requiredRole, ...rest }) => {
    const { role } = useAuth()

    return (
        <Route
            {...rest}
            render={props => {
                if (role == requiredRole) {
                    return <Component {...props}/>
                } else {
                    <Redirect to="/" />
                }
            }}
        >

        </Route>
    )
}