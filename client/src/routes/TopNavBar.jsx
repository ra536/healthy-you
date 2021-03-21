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
                    <Nav.Link href="/">
                        <Image width="30px" src={hwf_logo_small} fluid/>  
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">
                            <b>Home</b>
                        </Nav.Link>
                        <Nav.Link href="#food">
                            <b>Food</b>
                        </Nav.Link>
                        <Nav.Link href="#nutrition">
                            <b>Nutrition</b>
                        </Nav.Link>
                        <Nav.Link href="#health">
                            <b>Health</b>
                        </Nav.Link>
                        <Nav.Link href="#blog">
                            <b>Blog</b>
                        </Nav.Link>
                        <Nav.Link href="#language">
                            <b>Language</b>
                        </Nav.Link>
                        <Nav.Link href="#covid-19">
                            <b>Covid-19</b>
                        </Nav.Link>
                        <Nav.Link href="#news">
                            <b>News</b>
                        </Nav.Link>
                        <Nav.Link href="#exercise">
                            <b>Exercise</b>
                        </Nav.Link>
                        <Nav.Link href="#directory">
                            <b>Directory</b>
                        </Nav.Link>
                        <Nav.Link href="#contact-us">
                            <b>Contact Us</b>
                        </Nav.Link>
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