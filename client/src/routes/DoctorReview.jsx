import React, { useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Container, Row, Image, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import drfarhad from './drfarhad.jpg';
import fivestar from './fivestar.jpg';
import Accordion from 'react-bootstrap/Accordion'


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
                    <Image src={drfarhad} className="mx-auto d-block" style={{ width: '50%' }} fluid roundedCircle />
                </Col>

                <Col>
                    <Card style={{ width: '23rem' }}>
                    <Card.Body>
                        <Card.Title>Dr. Farhad Rafizadeh, MD</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Morristown, NJ</Card.Subtitle>
                        <Card.Text>
                        Dr. Farhad Rafizadeh is a board certified plastic surgeon and a member of the American Society of Aesthetic Plastic Surgery. Dr. Rafizadeh has been performing plastic and reconstructive surgery since 1984.
                        </Card.Text>
                        
                    </Card.Body>
                    
                    </Card>
                </Col>
				
                </Row>
				<Card>
				
	<h3>

	<br>
	</br>
	<div align="center">
	Overall Rating: 5.0
	</div>
	<br>
	</br>
	<Image src={fivestar} className="mx-auto d-block" style={{ width: '25%' }} />
	</h3>
	
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Doctor Farhad really helped me to achieve a natural look after my surgery. I would highly reccomend him for anyone that is interested in plastic surgery.{' '}
      </p>
      <footer className="blockquote-footer">
        Karen K. <cite title="Source Title"></cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
<Row>
<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        More Reviews
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body> 
	  <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Doctor Farhad really helped me to regain my beauty after my surgery. He was really understanding and catered to me. The staff was also very friendly.{' '}
      </p>
      <footer className="blockquote-footer">
        Cynthia C. <cite title="Source Title"></cite>
      </footer>
    </blockquote> 
	<br>
	</br>
	<br>
	</br>
	<blockquote className="blockquote mb-0">
      <p>
        {' '}
        I needed to find a reliable doctor for my cosmetic surgery, my friends recommended Dr. Farhad, and I can not recommend him enough! Procedure was swift and my appointment was quick.{' '}
      </p>
      <footer className="blockquote-footer">
        Jessica J.<cite title="Source Title"></cite>
      </footer>
    </blockquote>
	</Card.Body>
    </Accordion.Collapse>
  </Card>


</Accordion>
</Row>
	<Row>
	<br>
	</br>
	<Col>
	<div align="center">
	<Button variant="primary" size="lg">Book Appointment Now</Button>
	</div>
	</Col>
	</Row>
	</>

	)
}

export default DoctorReview