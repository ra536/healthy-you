import React, { useEffect, useContext } from 'react';
import TestAPI from '../apis/TestAPI';
import InputTest from '../components/InputTest';
import { TestContext } from '../context/TestContext';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Container,Row,Col, Media,Card} from 'react-bootstrap';
import strech from './strech.jpeg';
import cleanjuice from './cleanjuice.jpeg';
import Health from './Health.png';
import wellness from './wellness.jpeg';

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
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <br />




            <Container>
                <div align= "center">
                    <h2>Health Guide</h2>
                    
                </div>
                 <Row>
                     <Col>
                        <Button
                            variant="outline-dark"size="sm" block
                            >
                        Doctor
                        </Button>
                    </Col>
                    <Col> 
                        <Button
                             variant="outline-dark"size="sm" block
                     >
                         Dentist
                         </Button>
                    </Col>
                 </Row>
                 <br/>
                 <Row>
                    <Col>
                        <Button
                            variant="outline-dark"size="sm" block
                    >
                        Chiropractor
                        </Button>
                    </Col>
                     <Col>            
                    <Button
                        variant="outline-dark"size="sm" block
                    >
                    More...
                    </Button></Col>
                </Row>

            </Container>
            <br />


            <Container>
            <div align= "left">
                    <h3>The Latest</h3>       
            </div>

            <br />
                 <Row>
                     <Col>
                        <img src={strech} alt="strech"width={330} height={210} mode='fit' /> 
                    </Col>
             
                    <Col>
                        <Card style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title>Strech</Card.Title>
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

                    <Col>3 of 3</Col>
                 </Row>
                 
                 <br />

                 <Row>
                     <Col>
                        <img src={cleanjuice} alt="cleanjuice"width={330} height={210} mode='fit' /> 
                    </Col>
             
                    <Col>
                        <Card style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title>Clean Juice is Good for the Soul</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Food</Card.Subtitle>
                            <Card.Text>
                            I chatted with Leilah and David Tyree about their new business adventure, "Tyree Nation," (comprised of seven childen)
                            </Card.Text>
                            <Card.Link href="#">Read More...</Card.Link>
                            <Card.Link href="#">Share article...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Author Name | March 12, 2021</small>
                        </Card.Footer>
                        </Card>
                    </Col>

                    <Col>3 of 3</Col>
                 </Row>

                 <br />

                 <Row>
                     <Col>
                        <img src={Health} alt="Health"width={330} height={210} mode='fit' /> 
                    </Col>
             
                    <Col>
                        <Card style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title>Thank You Health Care Heroes</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Health</Card.Subtitle>
                            <Card.Text>
                            2020 has been a year of controversy and dramatic change due to the Covid-19 pandemic. 
                            </Card.Text>
                            <Card.Link href="#">Read More...</Card.Link>
                            <Card.Link href="#">Share article...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Author Name | March 12, 2021</small>
                        </Card.Footer>
                        </Card>
                    </Col>

                    <Col>3 of 3</Col>
                 </Row>

                 <br />

                <Row>
                    <Col>
                    <img src={wellness} alt="wellness"width={330} height={210} mode='fit' /> 
                </Col>

                <Col>
                    <Card style={{ width: '23rem' }}>
                    <Card.Body>
                        <Card.Title>Obesity & Cancer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Wellness</Card.Subtitle>
                        <Card.Text>
                        Did you know that 2 out of every 3 adults in the United States is overweight or obese? While we may live...
                        </Card.Text>
                        <Card.Link href="#">Read More...</Card.Link>
                        <Card.Link href="#">Share article...</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Author Name | March 12, 2021</small>
                    </Card.Footer>
                    </Card>
                </Col>

                <Col>3 of 3</Col>
                </Row>
 
            </Container>



            <Container>
                <h1>Home</h1>
                <InputTest />
                <br />
                <br />
                <h2>Results:</h2>
                <div>
                    {tests && tests.map(tests => {
                        return (
                            <ListGroup key={tests.test_id}>
                                <ListGroup.Item>
                                    { tests.test_id }
                                    <br/>
                                    { tests.content }
                                </ListGroup.Item>
                            </ListGroup>
                        )
                    })}
                </div>
            </Container>
            
        </div>
    )
}

export default Home;