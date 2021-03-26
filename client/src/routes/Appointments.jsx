import React, { useEffect, useContext, useState} from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Container, Row, Image, Col, DropdownButton, Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import hwf_logo from'./hwf_logo.png';
import TopNavBar from './TopNavBar';
import Modal from 'react-bootstrap/Modal'



 
const Appointments = () => {
    // Store the data retrieved from backend API into context


    // Call our backend API to retrieve list of test objects from db
 
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return ( 
        <div>
        <TopNavBar/>
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

           

            <Form.Group as={Col} controlId="formGridPassword" xs={6}  >
                <Form.Label>Sex</Form.Label>
                <DropdownButton id="dropdown-basic-button" title="Gender" variant="success" expand="lg">
                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                </DropdownButton>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" >
                <Form.Label>Has the Patient seen this Doctor before?</Form.Label>
                <DropdownButton id="dropdown-basic-button" title="Y/N" variant="success" expand="lg">
                <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
                <Dropdown.Item href="#/action-2">No</Dropdown.Item>
            </DropdownButton>
            </Form.Group>

            </Form.Row>
            
            <br />
            
        </Form>

        <Row>
        <>
        <Col>
        <Button variant="success" type="submit" size="sm" block block onClick={handleShow}>
        Next Availability is Tue, Mar 15
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book your Appointment time!</Modal.Title>
          </Modal.Header>


          <Modal.Body>
          <div align="center">
              <h6>Choose a time and location that works with you:</h6>              
            </div>
            <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic" size="sm" block>
                    Location...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">123 Main St, Newark NJ 09435</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">123 Martin Luther King Jr Dr, Newark NJ 09435</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">123 John F Kennedy Blvd, Newark NJ 09435</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>




            <h6>Mon, Mar 15</h6>
            <Row></Row>
          <Button variant="success" type="submit"  size="sm">
                11:30 PM
          </Button>
          &nbsp; &nbsp;
          <Button variant="success" type="submit"  size="sm">
                12:30 PM
          </Button>
          &nbsp; &nbsp;
          <Button variant="success" type="submit"  size="sm">
                1:00 PM
          </Button>
        

            <h6>Tue, Mar 16</h6>
            <Row></Row>
            <Button variant="success" type="submit"  size="sm">
                12:00 PM
          </Button>
          &nbsp; &nbsp;
          <Button variant="success" type="submit"  size="sm">
                12:30 PM
          </Button>
          &nbsp; &nbsp;
          <Button variant="success" type="submit"  size="sm">
                1:00 PM
          </Button>
          &nbsp; &nbsp;
          <Button variant="success" type="submit"  size="sm">
                2:00 PM
          </Button>

          
            <h6>Wed, Mar 17</h6>
            <Row></Row>
            <Button variant="success" type="submit"  size="sm">
                10:00 AM
          </Button>
          &nbsp; &nbsp;
          <Button variant="success" type="submit"  size="sm">
                3:00 PM
          </Button>

          <h6>Thu, Mar 18</h6>
            <Row></Row>
            <Button variant="success" type="submit"  size="sm">
                8:00 AM
          </Button>
          
          <h6>Fri, Mar 19</h6>
            <Row></Row>
            <Button variant="success" type="submit"  size="sm">
                11:00 AM
          </Button>
          &nbsp; &nbsp;
          <Button variant="success" type="submit"  size="sm">
                1:30 PM
          </Button>
          &nbsp; &nbsp;
          <Button variant="success" type="submit"  size="sm">
                3:00 PM
          </Button>
          &nbsp; &nbsp;
          <Button variant="success" type="submit"  size="sm">
                3:30 PM
          </Button>
          &nbsp; &nbsp;
          <Button variant="success" type="submit"  size="sm">
                More
          </Button> 

        
          <h6>Sat, Mar 20</h6>
          <Button variant="secondary" type="submit"  size="sm">
                No Availability
          </Button>

          <h6>Sun, Mar 21</h6>
          <Button variant="secondary" type="submit"  size="sm">
                No Availability
          </Button>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </Col>
      </>
      <Col>
        <div align="center">
            <Button variant="success" type="submit"  size="sm" block>
                Submit
            </Button>
            <br />
            </div>
        </Col>
     
      </Row>
        </Container>
    </div>
        
    )
    
}

export default Appointments;