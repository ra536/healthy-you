import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

const ProtectedRoute = ({ component: Component, requiredRole: requiredRole, ...rest }) => {
    const { role, loggedIn } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props => {
                if (!loggedIn) {
                    return <Redirect to="/login" />
                } else {
                    if (requiredRole) {
                        if (role == requiredRole) {
                            return <Component {...props} />
                        } else {
                            return <Redirect to="/" />
                        }
                    }
                }
            }}
        >
        </Route>
    )
}

export default ProtectedRoute;