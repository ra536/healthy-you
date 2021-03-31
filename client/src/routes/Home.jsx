import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { AuthContext } from '../context/AuthContext';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Logout } from '../components/LogoutButton';
import { ArticleContext } from '../context/ArticleContext';
import ArticleAPI from '../apis/ArticleAPI'
import { Link } from 'react-router-dom';

// bootstrap styles library (gives automatic styling)
import 'bootstrap/dist/css/bootstrap.css';
import TopNavBar from '../components/TopNavBar';
import ArticleComponent from '../components/ArticleComponent';
import HealthGuide from '../components/HealthGuide';

const Home = () => {
    // Store the data retrieved from backend API into context
    const { loggedIn, role } = useContext(AuthContext);
    //const { featuredArticles, setFeaturedArticles } = useContext(ArticleContext);
    const [featuredArticle, setFeaturedArticle] = useState("");
    const [featuredAuthor, setFeaturedAuthor] = useState("");

    useEffect(() => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await ArticleAPI.get("/random");
                console.log(response.data.data)
                setFeaturedArticle(response.data.data)
                setFeaturedAuthor(response.data.writer.firstName + " " + response.data.writer.lastName);
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
            <Container id="article-highlights">

                <Row>
                    <Col>
                        <ArticleComponent article={featuredArticle} writer={featuredAuthor} type="featured-large"/>
                    </Col>
                </Row>
                <br />
                <br />

                <Row>
                    <Col>
                        <ArticleComponent article={featuredArticle} writer={featuredAuthor} type="featured-small"/>
                    </Col>

                    <Col>
                        <ArticleComponent article={featuredArticle} writer={featuredAuthor} type="featured-small"/>
                    </Col>
                    <Col>
                        <ArticleComponent article={featuredArticle} writer={featuredAuthor} type="featured-small"/>
                    </Col>
                </Row>
            </Container>
            <br />
            
            <HealthGuide />
            
            
            <br/><br/>
            <div align="center">
                <iframe allowfullscreen height='200' scrolling='no' frameborder='0' style={{ border: 'none' }} src='https://www.wevideo.com/api/4/media/1921444596/embed' allowfullscreen></iframe>
            </div>
            <Container>

            </Container>

        </div>
    )
}

export default Home;