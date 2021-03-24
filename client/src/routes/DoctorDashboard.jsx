import React, { useEffect, useContext, useState } from 'react';
import DoctorAPI from '../apis/DoctorAPI'
import InputNewPractice from '../components/InputNewPractice';
import PracticeList from '../components/PracticeList';
import AddSpecialty from '../components/AddSpecialty'
import RemoveSpecialty from '../components/RemoveSpecialty';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Logout } from '../components/LogoutButton';
import { LoginContext } from '../context/LoginPersistence';


const DoctorDashboard = (props) => {
    let { doctorID } = useParams();
    const { loggedIn, isDoctor} = useContext(LoginContext);
    console.log(doctorID);
    const [rating, setRating] = useState();
    const [name, setName] = useState();
    const [profilePicture, setProfilePicture] = useState();
    // const [specialties, setSpecialties] = useState();
    // const [doctorID, setDoctorID] = useState("");
    const { specialties, setSpecialties } = useContext(AppContext);

    useEffect(() => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (DoctorAPI.post("/findDoctor", {
                    doctor_id: doctorID
                }));
                console.log(response.data.data[0])
                setRating(response.data.data[0].rating)
                setName(response.data.data[0].doctor_name)
                setProfilePicture(response.data.data[0].profile_picture)
                setSpecialties(response.data.data[0].specialty)
                // setDoctorID(response.data.data[0].doctor_id)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);
    // if((localStorage.getItem('userRole') != "doctor") || localStorage.getItem('userID') != doctorID){
    //     return (
    //         <p>Authentication error: Unauthorized</p>
    //     )
    // };

    return (
        <>
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
        <Container>

            <h1>Dashboard</h1>
            <br />
            <h1>Name</h1>
            { name}
            <br />
            <h1>Profile Picture</h1>
            { profilePicture}
            <br />
            <h1>Phone Number</h1>
            <br />
            <h1>Biography</h1>
            <br />
            <h1>Specialties</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Specialty Name</th>
                    </tr>
                </thead>
                <tbody>
                    {specialties.map(specialties => {
                        return (
                            <tr>
                                <td>{specialties}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <AddSpecialty
                doctorID={doctorID}
            />
            <RemoveSpecialty
                doctorID={doctorID}
            />
            <br />
            <h1>Rating</h1>
            { rating}
            <br />
            <h1>Reviews</h1>
            <br />
            <h1>Practices</h1>
            <PracticeList
                doctorID={doctorID}
            />
            <InputNewPractice
                doctorID={doctorID}
            />
            <br />
            <h1>Appointments</h1>
            <br />
        </Container>
        </>
    )
};

export default DoctorDashboard;