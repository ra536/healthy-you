import React, { useState, createContext } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = (props) => {
  const [allReviews, setAllReviews] = useState([]);

  return (
    <AdminContext.Provider
      value={{
        allReviews,
        setAllReviews,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};