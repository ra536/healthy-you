import React, { useEffect, useContext } from 'react';
import TestAPI from '../apis/TestAPI';
import InputTest from '../components/InputTest';
import { TestContext } from '../context/TestContext';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
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


        </div>
    )
}

export default Home;