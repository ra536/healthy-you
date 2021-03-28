import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, requiredRole: requiredRole, loggedIn: loggedIn, ...rest }) => {
    const { role } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={(props) => {
                if (loggedIn == false) {
                    return <Redirect to="/login" />
                } else {
                    // if (requiredRole && (role == requiredRole)) {
                    //     return <Component { ...rest } />
                    // } else {
                    //     return <Redirect to="/" />
                    // }
                    // return <Component { ...rest } />
                    if (requiredRole) {
                        if (requiredRole == role) {
                            return <Component { ...rest } />
                        } else {
                            return <Redirect to="/" />
                        }
                    } else {
                        return <Component { ...rest } />
                    }
                }
            }}
        >
        </Route>
    )
}

export default ProtectedRoute;