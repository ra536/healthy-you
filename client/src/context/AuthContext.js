import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [role, setRole] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        role,
        setRole,
        loggedIn,
        setLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
