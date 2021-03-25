import React, { useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Image, Col} from 'react-bootstrap';
import hwf_logo from'./hwf_logo.png';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import doctorPhoto from './doctorPhoto.jpg';
import { Card, Accordion, Carousel, ListGroup,ButtonGroup } from 'react-bootstrap';
import ad_logo from'./ad_logo.jpeg';
import adLong from './ad300.jpg';
import mag from './magazine.jpg';
import fit from './fitnesspic3.jpg';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
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
            <br/>
                <div align = "center">
                <h1 align = "center"> Doctor Directory</h1>
                <Card align = "center" style ={{ width: '50%' }}>
                    <Card.Body>
                        A comprehensive resource guide including our annual Top Doctors list as well as other medical professionals in the Morris area.
                    </Card.Body>
                </Card>
                </div>
                <div>
                <Container align = "center">
                    <Card style ={{ width: '50%' }} >
                        <Card.Body>
                            <h3>
                                Doctor Finder
                            </h3>
                        </Card.Body>
                    </Card>
                    <Form style ={{ width: '25%' }}>
                        <Form.Control type="email" placeholder="Search For Doctors" rounded align = "center"/>
                    </Form>
                </Container>
                </div>
                <div align = "center">
                <Form style ={{ width: '50%' }}>
                <Accordion align = "center">
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
                            <Card.Body align = "center">Insert information for the locations</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                </Form>
                </div>
                <br/>
                <Container fluid = "md"> 
                <Row align = "left">
                    <Col align = "left">
                        <div align = "center">
                        <br/>
                            <Card>
                                <h3>
                                    Featured Doctors
                                </h3>
                            </Card>
                        </div>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>
                                    <br/>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>
                                    <br/>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>



                                    













                    <br/>
                    <div align = "center">
                        <Card>
                            <h3>
                                All Doctor Listings
                            </h3>
                        </Card>
                    </div>
                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>










                    </Col>
                    

                    
                    <Col align = "center">
                        <br/><br/>
                        <h3>
                            Follow us on our social media
                        </h3>
                        <SocialIcon url="https://www.facebook.com/hwfmg/"/>{' '}
                        <SocialIcon url="https://twitter.com/HWFMagazine1/"/>{' '}
                        <SocialIcon url="https://www.instagram.com/healthwellnessfitnessmag/"/>{' '}
                        <SocialIcon url="https://www.linkedin.com/company/health-wellness-&-fitness"/>


                        <br/><br/>
                        <br/>
                        <div align = "center">
                            <h3>
                                Magazine
                            </h3>
                           </div>
                        <div align = "center" style = {{width: '50%'}} >
                        <Card>
                            <ButtonGroup vertical>

                            
                            <Card.Img variant="top" src={mag}/>
                            <br/>
                            <Button>Subscribe</Button>
                            <Button>Gifts</Button>
                            <Button>Digital Subscription</Button>
                            <Button>Manage Account</Button>
                            <Button>Table of Contents</Button>
                            
                            
                            </ButtonGroup>
                        </Card>

                        </div>
                        <br/>
                        <Card.Img variant="top" src={adLong} style = {{width: '50%'}}/>
                        <br/><br/>

                        <br/><br/>
                        <div align = "center" style = {{width: '50%'}}>
                            <Card>
                                <h3>
                                    Featured Listings
                                </h3>
                            </Card>
                        </div>

                        <Card.Img variant="top" src={doctorPhoto} style = {{width: '50%'}}/>
                        <div style = {{width: '50%'}}>
                        <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>

                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                         </div>
                        <Form style = {{width: '50%'}}>
                            <Form.Control type="email" placeholder="Search For Doctors" rounded/>
                        </Form>
                        <div style = {{width: '50%'}}>
                        <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Specialty
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Location
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                        </div>
                        <br/><br/>
                        <Card.Img variant="top" src={fit} style = {{width: '75%'}}/>
                        
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