import React, { useEffect, useContext } from 'react';
import TestAPI from '../apis/TestAPI';
import InputTest from '../components/InputTest';
import { TestContext } from '../context/TestContext';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Container, Row, Image, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Kika from './Kika.png';
import JesseJeffers from './JesseJeffers.jpg';
import PinkRibbonProgram1 from './PinkRibbonProgram1.png';
import stretchstock from './stretchstock.jpg';

import Carousel from 'react-bootstrap/Carousel';
import hwf_logo from'./hwf_logo.png';
import ad_logo from'./ad_logo.jpeg';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    // Store the data retrieved from backend API into context
    const { tests, setTests } = useContext(TestContext);

    // Call our backend API to retrieve list of test objects from db
    useEffect( () => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (TestAPI.get("/"));
                console.log(response.data.data)
                setTests(response.data.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

// add image,fix carousel

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

            <Carousel>
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

            <br />
		<Container>
		
			<Row>
			<Col>
			<div align="center">
				<Image src={PinkRibbonProgram1} className="mx-auto d-block" style={{ width: '70%' }} fluid rounded />
				<h2>
				Empowering Breast Cancer Survivors through Fitness, through the first post-operative exercise program for Breast Cancer Survivors 
				<p>
				by Lealah Afif
				</p>
				</h2>
			</div>
			</Col>			
			</Row>
			<br/>
			<br/>
			<br/>
			
			<Row>
				<Col>
					<div align="center">
					<Image src={Kika} fluid rounded />
					<h4>
					Learn the story of how Kika's studio came to be, and how it manages to continue through the pandemic
					</h4>
					</div>
				</Col>
				<Col>
					<div align="center">
					<Image src={JesseJeffers} fluid rounded />
					<h4>
					Meet Jesse Jeffers, Morristown's first personal Trainer, and learn with a professional
					</h4>
					</div>
				</Col>
				<Col>
					<div align="center">
					<Image src={stretchstock} fluid rounded />
					<h4>
					As Small Businesses Close, Gym Owners and Fitness Professionals Open the Door
						to New Methods of Exercise and Advocacy
					</h4>
					</div>
				</Col>
			</Row>
		</Container>
            

        </div>
    )
}

export default Home;