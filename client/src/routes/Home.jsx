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


// bootstrap styles library (gives automatic styling)
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

    return (
        <div>
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
		<Container>
		
			<Row>
			<Col>
			<div align="center">
				<Image src={Kika} className="mx-auto d-block" style={{ width: '70%' }} fluid rounded />
				<h1>
				this is a test for heading 1
				</h1>
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
					this is a test for heading 1
					</h4>
					</div>
				</Col>
				<Col>
					<Image src={JesseJeffers} fluid rounded />
					<h1>
					
					</h1>
				</Col>
				<Col>
					<Image src={Kika} fluid rounded />
					<h1>
					
					</h1>
				</Col>
			</Row>
		</Container>
            
            
        </div>
    )
}

export default Home;