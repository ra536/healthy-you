import React, { useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Image, Col} from 'react-bootstrap';
import hwf_logo from'./hwf_logo.png';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import doctorPhoto from './doctorPhoto.jpg';
import { Card, Accordion, Carousel, ListGroup,ButtonGroup } from 'react-bootstrap';
import ad_logo from'./ad_logo.jpeg';

const Setup = () => {
        return (
            <div>
                <div align = "center">
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
         
            <Carousel controls ="false">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ad_logo}
                alt="First slide"
                />
 
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ad_logo}
                alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ad_logo}
                alt="Third slide"
                />
            
            </Carousel.Item>
            </Carousel>

                <h1 align = "center"> Doctor Directory</h1>
                <Card align = "center">
                    <Card.Body h1>Enter information about doctor dirrectory.</Card.Body>
                </Card>
                <Container align = "center">
                    <Card>
                        <Card.Body>DOCTOR FINDER</Card.Body>
                    </Card>
                    <Form style ={{ width: '50%' }}>
                        <Form.Control type="email" placeholder="Search For Doctors" rounded align = "center" />
                    </Form>
                </Container>


                <Accordion>
                    <Card>
                        <Card.Header align = "center">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Specialty
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0" >
                            <Card.Body align = "center">Insert information for doctor specialty </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header align = "center">
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Location
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body align = "center">Inset information for the locations</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Container fluid = "md"> 
                <Row align = "left">
                    <Col align = "left">
                    
                    <Card>
                        <h1>
                            Featured Doctors
                        </h1>
                    </Card>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                <Button variant="secondary" size="sm">
                                                    Doctor Name
                                                    </Button> 

                                                    <Button variant="secondary" size="sm">
                                                    Phone number
                                                    </Button>
                                                    <br/><br/><br/>
                                                    <Button variant="primary" size="lg">
                                                    Next Availabile Appoinentment
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                <Button variant="secondary" size="sm">
                                                    Doctor Name
                                                    </Button> 

                                                    <Button variant="secondary" size="sm">
                                                    Phone number
                                                    </Button>
                                                    <br/><br/><br/>
                                                    <Button variant="primary" size="lg">
                                                    Next Availabile Appoinentment
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                <Button variant="secondary" size="sm">
                                                    Doctor Name
                                                    </Button> 

                                                    <Button variant="secondary" size="sm">
                                                    Phone number
                                                    </Button>
                                                    <br/><br/><br/>
                                                    <Button variant="primary" size="lg">
                                                    Next Availabile Appoinentment
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>













                    <br/><br/><br/>
                    <Card>
                        <h1>
                            All Doctor Listings
                        </h1>
                    </Card>
                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                <h1>
                                                    Doctor Name<br/><br/>Doctor Number<br/><br/>Specialty
                                                </h1>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                <h1>
                                                    Doctor Name<br/><br/>Doctor Number<br/><br/>Specialty
                                                </h1>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                <h1>
                                                    Doctor Name<br/><br/>Doctor Number<br/><br/>Specialty
                                                </h1>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                <h1>
                                                    Doctor Name<br/><br/>Doctor Number<br/><br/>Specialty
                                                </h1>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                <h1>
                                                    Doctor Name<br/><br/>Doctor Number<br/><br/>Specialty
                                                </h1>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                <h1>
                                                    Doctor Name<br/><br/>Doctor Number<br/><br/>Specialty
                                                </h1>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                <h1>
                                                    Doctor Name<br/><br/>Doctor Number<br/><br/>Specialty
                                                </h1>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                <h1>
                                                    Doctor Name<br/><br/>Doctor Number<br/><br/>Specialty
                                                </h1>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                <h1>
                                                    Doctor Name<br/><br/>Doctor Number<br/><br/>Specialty
                                                </h1>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                <h1>
                                                    Doctor Name<br/><br/>Doctor Number<br/><br/>Specialty
                                                </h1>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                <h1>
                                                    Doctor Name<br/><br/>Doctor Number<br/><br/>Specialty
                                                </h1>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>                        
                    
              
                    
                    </Col>
                    

                    
                    <Col align = "center">
                        <br/>
                        
                        <h1>
                            Featured Listing
                        </h1>
                        <Card.Img variant="top" src={doctorPhoto} style = {{width: '50%'}}/>
                        <Card.Text>
                            Doctor Information
                            <br />
                        </Card.Text>
                        <Form style = {{width: '50%'}}>
                            <Form.Control type="email" placeholder="Search For Doctors" rounded/>
                        </Form>
                        <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Specialty
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Insert information for doctor specialty </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Location
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Inset information for the locations</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </Col>
                </Row>
                </Container>
                <br/><br/>
                <div align = "center">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">1</Button>
                    <Button variant="secondary">2</Button>
                    <Button variant="secondary">3</Button>
                    <Button variant= "secondary">...</Button>
                    <Button variant= "secondary">More</Button>
                </ButtonGroup>
                </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            </div>









    )
};





































export default Setup;