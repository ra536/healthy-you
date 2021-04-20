import React from "react";
import { Row, Col, Media, Card, Button, ButtonGroup, Form, FormControl, Container} from "react-bootstrap";
import ad300 from "../components/ads/ad300.jpg";



import "bootstrap/dist/css/bootstrap.css";


const BlogSideBar = (props) => {
    return(
        <>
       
        <Container>
                        <Row>
                            <Col>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <br />
                            </Col>
                        </Row>
                        
                        
                        <Row>
                            <Col>
                                <br />
                                <br />
                                <h1>Recent Posts</h1>
                                <br />
                                <h2>Dental Care Basics</h2>
                                <p>Think you know everything about proper brushing and flossing techniques? Understand the basics and what you can do to promote oral health.</p>
                                <br />
                                <h2>Fat Loss Done Right</h2>
                                <p>Whether you’re looking to improve your overall health or simply slim down for summer, burning off excess fat can be quite challenging.</p>
                                <br />
                                <h2>Hyperthyroid</h2>
                                <p>Hyperthyroidism is the production of too much thyroxine hormone. It can increase metabolism.
                                Symptoms include unexpected weight loss, rapid or irregular heartbeat, sweating, and irritability, although the elderly often experience no symptoms.</p>
                                <br />
                                <img src={ad300} alt="ad300" width={250} mode='fit' />

                            </Col>
                            
                        </Row>



                    </Container>
                    



        </>












































































    );
};
export default BlogSideBar;