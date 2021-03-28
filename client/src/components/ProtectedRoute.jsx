import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, requiredRole: requiredRole, loggedIn: loggedIn, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props => {
                if (loggedIn) {
                    <Redirect to="/login" />
                }
                return <Component {...props} />
            }}
        >
        </Route>
    )
}

export default ProtectedRoute;