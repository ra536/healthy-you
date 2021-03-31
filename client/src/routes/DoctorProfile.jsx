import React, { useEffect, useContext, useState } from 'react';
import DoctorAPI from '../apis/DoctorAPI'

import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { Container, Table, Image, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Accordion } from 'react-bootstrap';
import fivestar from './fivestar.png';

import axios from 'axios';
import TopNavBar from '../components/TopNavBar';

const DoctorProfile = (props) => {
    let { doctorID } = useParams();
    const [rating, setRating] = useState();
    const [name, setName] = useState();
    const [profilePicture, setProfilePicture] = useState();
    const [bio, setBio] = useState("");
    const [phone, setPhone] = useState("");
    const [newImage, setNewImage] = useState(""); // image link
    const [updatedName, setUpdatedName] = useState("");
    const [updatedPhone, setUpdatedPhone] = useState("");
    const [updatedBio, setUpdatedBio] = useState("");
    const [email, setEmail] = useState("")

    const { specialties, setSpecialties } = useContext(AppContext);

    useEffect(() => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (DoctorAPI.post("/findDoctor",
                    {
                        doctor_id: doctorID
                    },
                    {
                        withCredentials: false
                    }
                ));
                console.log(response.data)
                setRating(response.data.data[0].rating)
                // setName(response.data.data[0].firstName + response.data.data[0].lastName)
                setName(response.data.data[0].doctor_name)
                setUpdatedName(response.data.data[0].doctor_name)
                setProfilePicture(response.data.data[0].profile_picture)
                setSpecialties(response.data.data[0].specialty)
                setBio(response.data.data[0].bio)
                setEmail(response.data.data[0].email)
                setPhone(response.data.data[0].phone)
                setUpdatedBio(response.data.data[0].bio)
                // setDoctorID(response.data.data[0].doctor_id)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <TopNavBar />
            <br />
            <Row>
                <Col>
                    <br>
                    </br>
                    <Image src={profilePicture} className="mx-auto d-block" roundedCircle />
                    <br>
                    </br>
                </Col>

                <Col>
                    <Card style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Morristown, NJ</Card.Subtitle>
                            <Card.Text>
                                {bio}
                            </Card.Text>
                            <br>
                            </br>
                            <Card.Title>Contact Information: </Card.Title>

                            <Card.Text>
                                Phone: {phone}

                                <br>
                                </br>
							Fax: (222)222-2222
							<br>
                                </br>
							Email: {email}
                                <br>
                                </br>
                            </Card.Text>
                            <br />
                            <Card.Title>Locations: </Card.Title>
                            <Card.Text>Morristown, Newark, Harrison</Card.Text>
                            <br />
                            <Card.Title>Appointments: </Card.Title>
                            <Button size="lg" block>Book now</Button>
                            <br />
                            <div align="center">Next availability: April 3rd, 2021</div>
                        </Card.Body>

                    </Card>
                </Col>

            </Row>
            <br>
            </br>
            <Container>
                <Row>
                    <Col md={8}>
                        <br />
                        <div align="center">
                            <h3>
                                Overall Rating:
            <br />
            5.0
            </h3>
                        </div>
                        <Image src={fivestar} className="mx-auto d-block" style={{ width: '50%' }} />
                    </Col>
                    <Col>
                        <br />
                        <div align="center">
                            Bedside Manner:<Image src={fivestar} className="mx-auto d-block" style={{ width: '30%' }} />
                            <br />
                Average wait time:<Image src={fivestar} className="mx-auto d-block" style={{ width: '30%' }} />
                            <br />
                Availability:<Image src={fivestar} className="mx-auto d-block" style={{ width: '30%' }} />
                            <br />
                        </div>


                    </Col>
                </Row>
            </Container>





            <Container>
                <Card>
                    <Card.Body>
                        <blockquote className="blockquote mb-0 text-center">
                            <p>
                                {' '}
        "Doctor Farhad really helped me to achieve a natural look after my surgery. I would highly recommend him for anyone that is interested in plastic surgery."{' '}
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
        "Doctor Farhad really helped me to regain my beauty after my surgery. He was really understanding and catered to me. The staff was also very friendly."{' '}
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
        "I needed to find a reliable doctor for my cosmetic surgery, my friends recommended Dr. Farhad, and I can not recommend him enough! Procedure was swift and my appointment was quick."{' '}
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
            </Container>

            <Row>
                <br>
                </br>
                <Col>
                    <div align="center">
                        <br />
                        <Button variant="primary" size="lg">Book Appointment Now</Button>
                        <br />
                        <br />
                    </div>
                </Col>
            </Row>
        </>
    )
};

export default DoctorProfile;