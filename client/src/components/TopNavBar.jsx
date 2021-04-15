import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { AuthContext } from "../context/AuthContext";
import hwf_logo from "./img/hwf_logo.png";
import LoginAPI from "../apis/LoginAPI";

const TopNavBar = () => {
  const { id, role, loggedIn, setLoggedIn, setRole, setId } = useContext(
    AuthContext
  );
  const [dashboard, setDashboard] = useState(null);
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

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      if (role === "Doctor") {
        setDashboard("/doctor-dashboard/" + id);
      } else if (role === "Writer") {
        setDashboard("/writer-dashboard/" + id);
      } else if (role === "Admin") {
        setDashboard("admin-dashboard/" + id);
      } else {
        setDashboard("/user-dashboard/" + id);
      }
    };
    fetchData();
  }, [id, role]);

  return (
    <>
      <div style={{ position: "sticky", top: "0", zIndex: "1" }}>
        <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Brand>
            <Nav.Link href="/">
              <Image vertical-align="top" height="50px" src={hwf_logo} />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/category/Blog">Blog</Nav.Link>
              <Nav.Link href="/results">Directory</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              {loggedIn ? (
                <NavDropdown
                  title="Account"
                  alignRight
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href={dashboard}>
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleClick}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  title="Account"
                  alignRight
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
          <br />
        </Navbar>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/category/Food">Food</Nav.Link>
              <Nav.Link href="/category/Nutrition">Nutrition</Nav.Link>
              <Nav.Link href="/category/Health">Health</Nav.Link>
              <Nav.Link href="/category/Language">Language</Nav.Link>
              <Nav.Link href="/category/Covid-19">Covid-19</Nav.Link>
              <Nav.Link href="/category/News">News</Nav.Link>
              <Nav.Link href="/category/Exercise">Exercise</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <br />
      </div>
    </>
  );
};

export default TopNavBar;
