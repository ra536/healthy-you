import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { AuthContext } from '../context/AuthContext';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Logout } from '../components/LogoutButton';

// bootstrap styles library (gives automatic styling)
import 'bootstrap/dist/css/bootstrap.css';
import TopNavBar from '../components/TopNavBar';

const Home = () => {
    // Store the data retrieved from backend API into context
    const { loggedIn, role} = useContext(AuthContext)

    console.log("am I logged in?", loggedIn)
    console.log("what's my role?", role)

    return (
        <div>
            {/* { loggedIn ? 
                        <Logout/>
                        :
                        <>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </>
                    } */ }
            <TopNavBar />
            <br />
            <Container>
            
            </Container>
            <div align="center">
            <iframe allowfullscreen height='200' scrolling='no' frameborder='0' style={{border: 'none'}} src='https://www.wevideo.com/api/4/media/1921444596/embed' allowfullscreen></iframe>
            </div>
            <Container>
                
            </Container>
            
        </div>
    )
}

export default Home;