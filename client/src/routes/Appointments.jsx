import React, { useEffect, useContext } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Container, Row, Image, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import hwf_logo from'./hwf_logo.png';

const Appointments = () => {
    // Store the data retrieved from backend API into context


    // Call our backend API to retrieve list of test objects from db
 


    return ( 
        <div>
        <div align="center">
        <h1>MORRIS</h1>
    </div>

    <Container>
         <Row>
            <Col>

                <Image src={hwf_logo} style={{ width: '100%' }}fluid/>

            </Col>
         </Row>
    </Container>
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
                <Nav.Link href="#link">Home</Nav.Link>
                <Nav.Link href="#home">Food</Nav.Link>
                <Nav.Link href="#link">Nutrition</Nav.Link>
                <Nav.Link href="#link">Health</Nav.Link>
                <Nav.Link href="#link">Blog</Nav.Link>
                <Nav.Link href="#home">Language</Nav.Link>
                <Nav.Link href="#link">Covid 19</Nav.Link>
                <Nav.Link href="#home">News</Nav.Link>
                <Nav.Link href="#link">Exercise</Nav.Link>
                <Nav.Link href="#home">Directory</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
        <h1>
            Appointment page
        </h1>
        </div>
    )
}

export default Appointments;