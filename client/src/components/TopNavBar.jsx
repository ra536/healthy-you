import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { AuthContext } from "../context/AuthContext";
import hwf_logo from "./img/hwf_high.png";
import LoginAPI from "../apis/LoginAPI";

const TopNavBar = (props) => {
  const region = props.currentRegion;
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
        setDashboard("/doctor-dashboard/" + id + "/" + region);
      } else if (role === "Writer") {
        setDashboard("/writer-dashboard/" + id + "/" + region);
      } else if (role === "Admin") {
        setDashboard("admin-dashboard/" + id + "/" + region);
      } else {
        setDashboard("/user-dashboard/" + id + "/" + region);
      }
    };
    fetchData();
  }, [id, role]);

  // Nav Paths
  const navHome = "/" + region;
  const navAbout = "/about-us/" + region;
  const navBlog = "/category/Blog/" + region;
  const navDirectory = "/results/" + region;
  const navSubscribe = "/subscribe/" + region;
  const navContact = "/contact-us/" + region;
  const navLogin = "/login/" + region;
  const navRegister = "/register/" + region;

  // Bar Paths
  const foodPath = "/category/Food/" + region;
  const nutritionPath = "/category/Nutrition/" + region;
  const healthPath = "/category/Health/" + region;
  const wellnessPath = "/category/Wellness/" + region;
  const advertisingPath = "/advertising/" + region;
  const newsPath = "/category/News/" + region;
  const exercisePath = "/category/Exercise/" + region;

  return (
    <>
      <div style={{ position: "sticky", top: "0", zIndex: "1" }}>
        <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Brand>
            <Nav.Link href={"/" + region}>
              <img
                style={{ maxWidth: "100%", height: "auto" }}
                src={hwf_logo}
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href={navHome}>Home</Nav.Link>
              <Nav.Link href={navAbout}>About</Nav.Link>
              <Nav.Link href={navBlog}>Blog</Nav.Link>
              <Nav.Link href={navDirectory}>Directory</Nav.Link>
              <Nav.Link href={navSubscribe}>Subscribe</Nav.Link>
              <Nav.Link href={navContact}>Contact</Nav.Link>
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
                  <NavDropdown.Item href={navLogin}>Login</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={navRegister}>
                    Register
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
          <br />
        </Navbar>
        <Navbar bg="primary" variant="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link style={{ color: "#fff" }} href={foodPath}>
                <b>Food</b>
              </Nav.Link>
              <Nav.Link href=""></Nav.Link>
              <Nav.Link style={{ color: "#fff" }} href={nutritionPath}>
                <b>Nutrition</b>
              </Nav.Link>
              <Nav.Link href=""></Nav.Link>
              <Nav.Link style={{ color: "#fff" }} href={healthPath}>
                <b>Health</b>
              </Nav.Link>
              <Nav.Link href=""></Nav.Link>
              <Nav.Link style={{ color: "#fff" }} href={wellnessPath}>
                <b>Wellness</b>
              </Nav.Link>
              <Nav.Link href=""></Nav.Link>
              <Nav.Link style={{ color: "#fff" }} href={advertisingPath}>
                <b>Advertising</b>
              </Nav.Link>
              <Nav.Link href=""></Nav.Link>
              <Nav.Link style={{ color: "#fff" }} href={newsPath}>
                <b>News</b>
              </Nav.Link>
              <Nav.Link href=""></Nav.Link>
              <Nav.Link style={{ color: "#fff" }} href={exercisePath}>
                <b>Exercise</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
      </div>
    </>
  );
};

export default TopNavBar;
