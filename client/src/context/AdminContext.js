import React, { useState, createContext } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = (props) => {
  const [allReviews, setAllReviews] = useState([]);

  const addReviews = (review) => {
    setAllReviews([...allReviews, review]);
  };

  return (
    <AdminContext.Provider
      value={{
        allReviews,
        setAllReviews,
        addReviews,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};
