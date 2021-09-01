import React, { useContext } from "react";
import { Route, Redirect, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ requiredRoles, component: Component, ...rest }) => {
  const { loggedIn, role } = useContext(AuthContext);
  let { region } = useParams();
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
                  return <Redirect to={"/" + region} />;
                }
              } else {
                return <Component {...props} />;
              }
            }
          } else {
            return <Redirect to={"/login/" + region} />;
          }
        }
      }}
    ></Route>
  );
};

export default ProtectedRoute;
