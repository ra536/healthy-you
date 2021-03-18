import React, { useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Image, Col} from 'react-bootstrap';
import hwf_logo from'./hwf_logo.png';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import doctorPhoto from './doctorPhoto.jpg';
import { Card, Accordion, Carousel, ListGroup,ButtonGroup } from 'react-bootstrap';
import ad_logo from'./ad_logo.jpeg';
import adLong from './ad_banner.jpeg';
import TopNavBar from './TopNavBar';
const DoctorProfile = () => {
        return (
            <div>
                <TopNavBar />

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
                            <Card.Body align = "center">Insert information for the locations</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Container fluid = "md"> 
                <Row align = "left">
                    <Col align = "left">
                    
                    <Accordion>

                        <Card  fluid>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <h1>
                                        Featured Doctors
                                    </h1>
                                    [See All]
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">

                                <ListGroup>
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
                                </ListGroup>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
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
                        <Card.Img variant="top" src={adLong} style = {{width: '50%'}}/>
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
                <br/>
                <br/>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            </div>









    )
};





































export default DoctorProfile;