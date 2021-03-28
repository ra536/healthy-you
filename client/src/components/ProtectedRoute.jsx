import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'
import LoginAPI from '../apis/LoginAPI'

const ProtectedRoute = ({ component: Component, requiredRole: requiredRole, ...rest }) => {
    const { role, loggedIn } = useContext(AuthContext);

    useEffect(() => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (LoginAPI.get("/user", {
                    withCredentials: true
                }));
                console.log(response)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    return (
        <Route
            {...rest}
            render={props => {
                return <Component {...props} />
            }}
        >
        </Route>
    )
}

export default ProtectedRoute;