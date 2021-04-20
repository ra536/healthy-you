import React, { useEffect, useContext, useState } from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DoctorAPI from '../apis/DoctorAPI';
import AppointmentAPI from '../apis/AppointmentAPI';
import PracticeAPI from '../apis/PracticeAPI';
import UserAPI from '../apis/UserAPI';

const ApptInfo = (props) => {
    const [apptInfo, setApptInfo] = useState([]);
    const [practiceInfo, setPracticeInfo] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [userName, setUserName] = useState("");
    const [patientName, setPatientName] = useState("");
    const [gender, setGender] = useState("");
    const [newPatient, setNewPatient] = useState("");
    const [dob, setDob] = useState("");
    const [insurance, setInsurance] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await (AppointmentAPI.post("/getApptInfo", {
                    appointment_id: props.apptID
                }));
                const practiceResponse = await (PracticeAPI.post("/getPracticeData", {
                    practice_id: response.data.data[0].practice_id
                }));
                setPracticeInfo(practiceResponse.data.data);
                setApptInfo(response.data.data);
                console.log(response.data.data);
                if(response.data.data[0].status === "Booked"){
                    const userResponse = await (UserAPI.post("/getUser", {
                        user_id: response.data.data[0].user_id
                    }));
                    setUserInfo(userResponse.data.data);
                    setUserName(userResponse.data.data.firstName + " " + userResponse.data.data.lastName);
                    setPatientName(response.data.data[0].first_name + " " + response.data.data[0].last_name)
                } else if (response.data.data[0].status === "Open"){
                    setUserInfo("");
                    setUserName("");
                    setPatientName("");
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [props.apptID]);

    const onClickCancel = async (e) => {
        console.log(e);
        props.onCancel(e);
        try {
            const response = await (AppointmentAPI.post("/cancelAppt", {
                appointment_id: e
            },
            {
              withCredentials: true,
            }));
            console.log(response.data.data);
            if (response.data.data === 1) {
                setApptInfo([]);
            }
        }
        catch (err) {
            console.log(err)
        }
        props.onCancel();
    }

    const formatDT = (dt) => {
        dt = new Date(dt);
        return (Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(dt));
    }

    const formatD = (dt) => {
        dt = new Date(dt);
        return (Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit"}).format(dt));
    }

    return (
        <div style={{ height: 250 }}>
            <h1>Appointment Info</h1>
            {apptInfo.map((apptInfo, index) => {
                return (
                    <div key={index}>
                        {/* Appointment ID: {apptInfo.appointment_id}
                        <br /> */}
                        Practice: {practiceInfo[index].name}
                        <br />
                        Address: {practiceInfo[index].location}
                        <br />
                        Start Time: {formatDT(apptInfo.start_time)}
                        <br />
                        End Time: {formatDT(apptInfo.end_time)}
                        <br />
                        Status: {apptInfo.status}
                        <br />
                        Patient: {patientName}
                        <br />
                        Date of birth: {formatD(apptInfo.dob)}
                        <br />
                        Reason: {apptInfo.reason}
                        <br />
                        Gender: {apptInfo.gender}
                        <br />
                        Insurance: {apptInfo.insurance}
                        <br />
                        Returning Patient: {apptInfo.seen}
                        <br />
                        <Button variant="danger" onClick={() => onClickCancel(apptInfo.appointment_id)}>
                            Delete
                        </Button>
                    </div>
                );
            })}
        </div>
    );
}

export default ApptInfo;