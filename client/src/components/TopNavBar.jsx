import React from "react";
import { Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import hwf_logo from "./img/hwf_logo.png";
// import hwf_logo_small from'./img/hwf_logo_small.png';

const TopNavBar = () => {
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
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="/search">Directory</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              <NavDropdown
                title="Account"
                alignRight
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  My Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
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
