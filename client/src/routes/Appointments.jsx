import React, { useEffect, useContext} from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Container, Row, Image, Col, DropdownButton, Dropdown} from 'react-bootstrap';
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
    <br />
        <div align= "center">
            <h3>Book an Appointment Today!</h3>
        </div>
        <br />

        <Container align= "left" display="inline">
        <Form >
            <Form.Row>
                
                <Form.Group as={Col} controlId="formGridEmail" xs={6} >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword" xs={6}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="last" placeholder="" />
                </Form.Group>

            </Form.Row>
            <br />
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail" xs={4}>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="name" placeholder="MM" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword" xs={4}>
                <Form.Label>Day</Form.Label>
                <Form.Control type="last" placeholder="DD" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword" xs={4}>
                <Form.Label>Year</Form.Label>
                <Form.Control type="last" placeholder="YYYY" />
                </Form.Group>
            </Form.Row>

            <br />
            
            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity" xs={6}>
                <Form.Label>What's the reason for your visit?</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity" xs={6}>
                <Form.Label>What's your insurance plan?</Form.Label>
                <Form.Control />
                </Form.Group>
            </Form.Row>
            <br />
            <Form.Row>

            <Form.Group as={Col} controlId="formGridPassword" xs={4}  >
                <Form.Label>Sex</Form.Label>
                <DropdownButton id="dropdown-basic-button" title="Gender" bg="dark" variant="dark" expand="lg">
                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                </DropdownButton>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" xs={4}>
                <Form.Label>Has the Patient seen this Doctor before?</Form.Label>
                <DropdownButton id="dropdown-basic-button" title="Y/N" bg="dark" variant="dark" expand="lg">
                <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
                <Dropdown.Item href="#/action-2">No</Dropdown.Item>
            </DropdownButton>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Choose Available Timing:</Form.Label>
            <br />
            <input type="date"></input>
            <input type="time" id="appt" name="appt"
            min="09:00" max="18:00" required></input>
            </Form.Group>
            </Form.Row>
            
            <br />
            
            <div align="center">
            <Button variant="primary" type="submit" bg="dark" variant="dark" block>
                Submit
            </Button>
            <br />
            </div>
        </Form>
        </Container>
    </div>
        
    )
    
}

export default Appointments;