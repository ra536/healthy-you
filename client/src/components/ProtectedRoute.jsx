import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

const ProtectedRoute = ({ component: Component, requiredRole: requiredRole, ...rest }) => {
    const { role, status } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props => {
                // if (status == false) {
                //     return <Redirect to="/login" />
                // } else {
                //     if (requiredRole) {
                //         if (role == requiredRole) {
                //             return <Component {...props} />
                //         } else {
                //             return <Redirect to="/" />
                //         }
                //     }
                //     else {
                //         return <Component {...props} />
                //     }
                // }
                if (!status) {
                    return <Redirect to="/login" />
                } else {
                    return <Redirect to="/" />
                }
            }}
        >
        </Route>
    )
}

export default ProtectedRoute;