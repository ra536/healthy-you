import React, { useEffect, useContext, useState } from 'react';
import DoctorAPI from '../apis/DoctorAPI'

import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { Container, Table, Image } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import { Logout } from '../components/LogoutButton';
import { AuthContext } from '../context/AuthContext';

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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        Twerwer
        {updatedName}
        <img src={profilePicture} />
        </>
    )
};

export default DoctorProfile;