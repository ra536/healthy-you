import React, { useEffect, useContext, useState } from 'react';
import DoctorAPI from '../apis/DoctorAPI'
import InputNewPractice from '../components/InputNewPractice';
import RemovePractice from '../components/RemovePractice';
import PracticeList from '../components/PracticeList';
import AddSpecialty from '../components/AddSpecialty'
import RemoveSpecialty from '../components/RemoveSpecialty';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Logout } from '../components/LogoutButton';
import { LoginContext } from '../context/LoginPersistence';
import axios from 'axios';

const DoctorDashboard = (props) => {
    let { doctorID } = useParams();
    const { loggedIn, isDoctor} = useContext(LoginContext);
    console.log(doctorID);
    const [rating, setRating] = useState();
    const [name, setName] = useState();
    const [profilePicture, setProfilePicture] = useState();
    const [bio, setBio] = useState("");
    const [phone, setPhone] = useState("");

    const [newImage, setNewImage] = useState(""); // image link
    const [updatedName, setUpdatedName] = useState("");
    const [updatedPhone, setUpdatedPhone] = useState("");
    const [updatedBio, setUpdatedBio] = useState("");


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
                setBio(response.data.data[0].bio)
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
    // if((localStorage.getItem('userRole') != "doctor") || localStorage.getItem('userID') != doctorID){
    //     return (
    //         <p>Authentication error: Unauthorized</p>
    //     )
    // };

    const previewImage = async (e) => {
        var reader = new FileReader();
        
        reader.addEventListener("load", function() {
            var image = new Image();
            image.height = 100;
            image.title = "Name";
            image.src = this.result;
            document.getElementById('input-file').appendChild(image);
            setNewImage(this.result);
            console.log(this.result);
            console.log(typeof this.result);
        }, false);

        reader.readAsDataURL(e.target.files[0]);
    }

    const handleSubmitName = async (e) => {
        e.preventDefault();
        console.log(updatedName);
        try{
            const response = await (DoctorAPI.post("/updateName", {
                doctor_id: doctorID,
                name: updatedName
            }));
            console.log(response.data.data);
            setName(response.data.data.doctor_name)
        }
        catch(err){
            console.log(err);
        }
    }

    const handleSubmitPhone = async (e) => {
        e.preventDefault();
        console.log(updatedPhone);
        try{
            const response = await (DoctorAPI.post("/updatePhone", {
                doctor_id: doctorID,
                phone: updatedPhone
            }));
            console.log(response.data.data);
            setPhone(response.data.data.phone)
        }
        catch(err){
            console.log(err);
        }
    }

    const handleSubmitBio = async (e) => {
        e.preventDefault();
        console.log(updatedBio);
        try{
            const response = await (DoctorAPI.post("/updateBio", {
                doctor_id: doctorID,
                bio: updatedBio
            }));
            console.log(response.data.data);
            setBio(response.data.data.bio)
        }
        catch(err){
            console.log(err);
        }
    }

    // Empty biography TextArea (does not delete/save changes)
    const handleClearBio = async (e) => {
            e.preventDefault();
            setUpdatedBio("")
    }

    const handleSubmitProfilePic = async (e) => {
        e.preventDefault();
        console.log(newImage);
        try{
            const response = await (DoctorAPI.post("/updateProfilePic", {
                doctor_id: doctorID,
                image: newImage
            }));
            console.log(response.data.data);
            setProfilePicture(response.data.data.image)
        }
        catch(err){
            console.log(err);
        }
    }

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
            <br/>
            <form>
                <input
                id="input-new-name"
                value={updatedName}
                placeholder="Name"
                onChange={e => setUpdatedName(e.target.value)}
                />
                <button type="submit" onClick={handleSubmitName}>Save</button>
            </form>
            
            <br /><br />
            <h1>Profile Picture</h1>
            <img src={profilePicture} width="200px" id="preview"></img>
            <form>
                <input
                    id="input-file"
                    name="article-image"
                    type="file"
                    onChange={e => previewImage(e)}
                />
                <br/>
                <button type="submit" onClick={handleSubmitProfilePic}>Save</button>
            </form>
            <img src={newImage} width="200px" id="preview"></img>
            <br /><br />
            <h1>Phone Number</h1>
            {phone}
            <br />
            <form>
                <input
                    id="input-new-phone"
                    value={updatedPhone}
                    placeholder="Phone Number"
                    onChange={e => setUpdatedPhone(e.target.value)}
                />
                <button type="submit" onClick={handleSubmitPhone}>Save</button>
            </form>
            
            <br /><br />
            <h1>Biography</h1>
            {bio}
            <br />
            <form>
                <textarea rows="10" cols="75"
                    id="input-bio"
                    value={updatedBio}
                    //placeholder={bio}
                    onChange={e => setUpdatedBio(e.target.value)}
                />
                <br/>
                <button type="submit"  onClick={handleSubmitBio}>Save Changes</button>
                <button type="submit" onClick={handleClearBio}>Clear</button>
            </form>
            
            <br /><br />
            <h1>Specialties</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Specialty Name</th>
                    </tr>
                </thead>
                <tbody>
                    {specialties.map((specialties,index) => {
                        return (
                            <tr key={index}>
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
            <RemovePractice
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