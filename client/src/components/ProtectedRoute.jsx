import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ requiredRoles, component: Component, ...rest }) => {
  const { loggedIn, role } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn === null) {
          return "Loading...";
        } else {
          if (loggedIn) {
            if (role === null) {
              return "Loading...";
            } else {
              if (typeof requiredRoles != "undefined") {
                if (requiredRoles.includes(role)) {
                  return <Component {...props} />;
                } else {
                  return <Redirect to="/" />;
                }
              } else {
                return <Component {...props} />;
              }
            }
          } else {
            return <Redirect to="/login" />;
          }
        }
      }}
    ></Route>
  );
};

export default ProtectedRoute;
