import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import hwf_logo from'./hwf_logo.png';
import hwf_logo_small from'./hwf_logo_small.png';

const TopNavBar = () => {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>
                    <Image width="30px" src={hwf_logo_small} fluid/>  
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#food">Food</Nav.Link>
                        <Nav.Link href="#nutrition">Nutrition</Nav.Link>
                        <Nav.Link href="#health">Health</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#language">Language</Nav.Link>
                        <Nav.Link href="#covid-19">Covid-19</Nav.Link>
                        <Nav.Link href="#news">News</Nav.Link>
                        <Nav.Link href="#exercise">Exercise</Nav.Link>
                        <Nav.Link href="#directory">Directory</Nav.Link>
                        <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Image vertical-align="top" width="30%" src={hwf_logo} fluid/>
            </Navbar>
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default TopNavBar;