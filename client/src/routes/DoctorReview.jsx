import React, { useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Container, Row, Image, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import drfarhad from './drfarhad.jpg';
import fivestar from './fivestar.jpg';
import Accordion from 'react-bootstrap/Accordion'
import ListGroup from 'react-bootstrap/ListGroup'


const DoctorReview = () => {
	return (
	<>
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
	<Row>
                <Col>
				<br>
				</br>
                    <Image src={drfarhad} className="mx-auto d-block" roundedCircle />
				<br>
				</br>
                </Col>

                <Col>
                    <Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>Dr. Farhad Rafizadeh, MD</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Morristown, NJ</Card.Subtitle>
                        <Card.Text>
							Dr. Farhad Rafizadeh is a board certified plastic surgeon and a member of the American Society of Aesthetic Plastic Surgery. Dr. Rafizadeh has been performing plastic and reconstructive surgery since 1984.
                        </Card.Text>
						<ListGroup>
							<ListGroup.Item>Bedside Manner:<Image src={fivestar} className="mx-auto d-block" style={{ width: '45%' }} /></ListGroup.Item>
							<ListGroup.Item>Average wait time:<Image src={fivestar} className="mx-auto d-block" style={{ width: '45%' }} /></ListGroup.Item>
							<ListGroup.Item>Availability:<Image src={fivestar} className="mx-auto d-block" style={{ width: '45%' }} /></ListGroup.Item>
						</ListGroup>
						<br>
						</br>
						<Card.Title>Contact Information: </Card.Title>

						<ListGroup.Item> <Card.Text className="mx-auto d-block" style={{ width: '75%' }}>        
							Phone:111-111-1111 
							
							<br>
							</br>
							Fax: 222-222-2222
							<br>
							</br>
							Email: Farhad@gmail.com
							<br>
							</br>
							Locations: Morristown, Newark, Harrison
                        </Card.Text>
						</ListGroup.Item>
                    </Card.Body>
                    
                    </Card>
                </Col>	

    </Row>
<br>
</br>
	
<Row>
<Col>
<Card>				
	<h3>
	<br>
	</br>
	<div align="center">
	Overall Rating:
	<br>
	</br>
	5.0
	</div>
	<Image src={fivestar} className="mx-auto d-block" style={{ width: '15%' }} />
	</h3>


</Card>

<Card>
  <Card.Body>
    <blockquote className="blockquote mb-0 text-center">
      <p>
        {' '}
        Doctor Farhad really helped me to achieve a natural look after my surgery. I would highly recommend him for anyone that is interested in plastic surgery.{' '}
      </p>
      <footer className="blockquote-footer">
        Karen K. <cite title="Source Title"></cite>
      </footer>
    </blockquote>
  </Card.Body>
<Accordion>
  <Card>  
    <Card.Header className="text-center">
      <Accordion.Toggle as={Button} variant="link" eventKey="0" >
        More Reviews
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body> 
	  <blockquote className="blockquote mb-0 text-center">
      <p>
        {' '}
        Doctor Farhad really helped me to regain my beauty after my surgery. He was really understanding and catered to me. The staff was also very friendly.{' '}
      </p>
      <footer className="blockquote-footer text-center">
        Cynthia C. <cite title="Source Title"></cite>
      </footer>
    </blockquote> 
	<br>
	</br>
	<br>
	</br>
	<blockquote className="blockquote mb-0 text-center">
      <p>
        {' '}
        I needed to find a reliable doctor for my cosmetic surgery, my friends recommended Dr. Farhad, and I can not recommend him enough! Procedure was swift and my appointment was quick.{' '}
      </p>
      <footer className="blockquote-footer text-center">
        Jessica J.<cite title="Source Title"></cite>
      </footer>
    </blockquote>
	</Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>
</Card>
</Col>
</Row>
	<Row>
	<br>
	</br>
	<Col>
	<div align="center">
	<Button variant="primary" size="lg" block>Book Appointment Now</Button>
	</div>
	</Col>
	</Row>
	</>

	)
}

export default DoctorReview