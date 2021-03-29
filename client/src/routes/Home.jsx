import React, { useEffect, useContext } from 'react';
import TestAPI from '../apis/TestAPI';
import InputTest from '../components/InputTest';
import { AppContext } from '../context/AppContext';
import { AuthContext } from '../context/AuthContext';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Logout } from '../components/LogoutButton';

// bootstrap styles library (gives automatic styling)
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    // Store the data retrieved from backend API into context
    const { tests, setTests } = useContext(AppContext);
    const { loggedIn, role} = useContext(AuthContext)

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

    console.log("am I logged in?", loggedIn)
    console.log("what's my role?", role)

    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="#home">
                    React-Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>

                    { loggedIn ? 
                        <Logout/>
                        :
                        <>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </>
                    }

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