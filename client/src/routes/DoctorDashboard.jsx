import React, { useEffect, useContext, useState } from 'react';
import DoctorAPI from '../apis/DoctorAPI'
import InputNewPractice from '../components/InputNewPractice';
import PracticeList from '../components/PracticeList';
import AddSpecialty from '../components/AddSpecialty'
import RemoveSpecialty from '../components/RemoveSpecialty';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';


const DoctorDashboard = (props) => {
    let { doctorID } = useParams();
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

    return (
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
    )
};

export default DoctorDashboard;