import React, { useEffect, useContext } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Container, Row, Image, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import hwf_logo from'./hwf_logo.png';
import placeholder from './placeholder.jpg';
import ad300 from './ad300.jpg';

const Blog = () => {
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
        <div align= "center">
            <h1>Blog Page</h1>
        </div>
        <Container>
         <Row>
            <Col>
                <div align = "center">
            <img src={placeholder} alt="placeholder"width={728} height={400} mode='fit'/>
            </div>  
                        
            </Col>
         </Row>
         <br/>
    </Container>

    

    <br/>

    

    <br/>



<div>
        <div display = 'inline'>
      
        <Container style={{ width: "65%", display: "inline-block"}}>
            <Row>
                <Col>
        <Card>
                        <Card.Body>
                            <Card.Title>Blog Post 1</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Fitness</Card.Subtitle>
                            <Card.Text>
                            As Small Businesses Close, Gym Owners and Fitness Profressionals Open the Door to New Methods of Excercise and Advocacy
                            </Card.Text>
                            <Card.Link href="#">Read More...</Card.Link>
                            <Card.Link href="#">Share article...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                         <small className="text-muted">Author Name | March 12, 2021</small>
                         </Card.Footer>
                        </Card>

                        <br/>

                        <Card>
                        <Card.Body>
                            <Card.Title>Blog Post 2</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Fitness</Card.Subtitle>
                            <Card.Text>
                            As Small Businesses Close, Gym Owners and Fitness Profressionals Open the Door to New Methods of Excercise and Advocacy
                            </Card.Text>
                            <Card.Link href="#">Read More...</Card.Link>
                            <Card.Link href="#">Share article...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                         <small className="text-muted">Author Name | March 12, 2021</small>
                         </Card.Footer>
                        </Card>

                        <br/>

                        <Card>
                        <Card.Body>
                            <Card.Title>Blog Post 3</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Fitness</Card.Subtitle>
                            <Card.Text>
                            As Small Businesses Close, Gym Owners and Fitness Profressionals Open the Door to New Methods of Excercise and Advocacy
                            </Card.Text>
                            <Card.Link href="#">Read More...</Card.Link>
                            <Card.Link href="#">Share article...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                         <small className="text-muted">Author Name | March 12, 2021</small>
                         </Card.Footer>
                        </Card>

                        <br/>

                        <Card>
                        <Card.Body>
                            <Card.Title>Blog Post 4</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Fitness</Card.Subtitle>
                            <Card.Text>
                            As Small Businesses Close, Gym Owners and Fitness Profressionals Open the Door to New Methods of Excercise and Advocacy
                            </Card.Text>
                            <Card.Link href="#">Read More...</Card.Link>
                            <Card.Link href="#">Share article...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                         <small className="text-muted">Author Name | March 12, 2021</small>
                         </Card.Footer>
                        </Card>

                        <br/>

                        <Card>
                        <Card.Body>
                            <Card.Title>Blog Post 5</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Fitness</Card.Subtitle>
                            <Card.Text>
                            As Small Businesses Close, Gym Owners and Fitness Profressionals Open the Door to New Methods of Excercise and Advocacy
                            </Card.Text>
                            <Card.Link href="#">Read More...</Card.Link>
                            <Card.Link href="#">Share article...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                         <small className="text-muted">Author Name | March 12, 2021</small>
                         </Card.Footer>
                        </Card>

                        </Col>
                        
                        </Row>
               
        </Container>

        <Container style={{ width: "35%", display: "inline-block"}}>
        <Row>
            <Col>
        <Form inline>
            <FormControl type="text" placeholder="Search" />
            <Button variant="outline-success">Search</Button>
            
        </Form>
    <br/>
    <br/>
            <h1>Recent Post</h1>
        <br/>
            <h2>Dental Care Basics</h2>
                <p>Think you know everything about proper brushing and flossing techniques? Understand the basics and what you can do to promote oral health.</p>
        <br/>
            <h2>Fat Loss Done Right</h2>
                <p>Whether you’re looking to improve your overall health or simply slim down for summer, burning off excess fat can be quite challenging.</p>
        <br/>
            <h2>Hyperthyroid</h2>
                <p>Hyperthyroidism is the production of too much thyroxine hormone. It can increase metabolism.
Symptoms include unexpected weight loss, rapid or irregular heartbeat, sweating, and irritability, although the elderly often experience no symptoms.</p>
        <br/>
            <img src={ad300} alt="ad300"width={250} mode='fit' />
            </Col>
        </Row>

        

        

        </Container>
               

        </div>
    
       
            </div>

 

    </div>



    )


}

export default Blog;