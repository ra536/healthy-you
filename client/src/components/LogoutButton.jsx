import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import LoginAPI from "../apis/LoginAPI";

const LogoutButton = () => {
  const { setLoggedIn, setRole, setId } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginAPI.get("/logout", {
        withCredentials: true,
      });
      console.log(response);
      setLoggedIn(false);
      setRole(null);
      setId(null);
    } catch (err) {
      console.log(err);
    }
  };

  return <Button onClick={handleClick}>Logout</Button>;
};

export default LogoutButton;
