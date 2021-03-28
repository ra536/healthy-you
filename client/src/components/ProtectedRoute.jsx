import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, requiredRole: requiredRole, loggedIn: loggedIn, role: role, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props => {
                if (loggedIn) {
                    return <Redirect to="/login" />
                } else {
                    if (requiredRole && (role == requiredRole)) {
                        return <Component { ...rest } />
                    } else {
                        return <Redirect to="/" />
                    }
                }
            }}
        >
        </Route>
    )
}

export default ProtectedRoute;