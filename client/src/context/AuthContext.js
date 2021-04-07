import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [role, setRole] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const [id, setId] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        role,
        setRole,
        loggedIn,
        setLoggedIn,
        id,
        setId,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
