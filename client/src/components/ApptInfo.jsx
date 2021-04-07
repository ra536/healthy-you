import React, { useEffect, useContext, useState } from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DoctorAPI from '../apis/DoctorAPI';
import AppointmentAPI from '../apis/AppointmentAPI';

const ApptInfo = (props) => {
    const [apptInfo, setApptInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await (AppointmentAPI.post("/getApptInfo", {
                    appointment_id: props.apptID
                }));
                setApptInfo(response.data.data);
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
            }));
            console.log(response.data.data);
            if(response.data.data === 1){
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
        var ampm = "AM"
        var hours = dt.getHours();
        var mins = dt.getMinutes();

        if(hours === 0){
            hours = 12;
        } else if (hours > 12 && hours < 24){
            hours = hours - 12;
            ampm = "PM";
        }
        if(mins.toString().length === 1){
            mins = "0" + mins.toString();
        }
        return (dt.getMonth()+1) +"/"+ dt.getDate() +"/"+ dt.getFullYear() + " " + hours + ":" + mins + " " + ampm;
    }

    return (
        <div style={{height:250}}>
            <h1>Appointment Info</h1>
            {apptInfo.map((apptInfo, index) => {
                return (
                    <div key={index}>
                        Appointment ID: {apptInfo.appointment_id}
                        <br />
                        Practice:
                        <br />
                            Start Time: {formatDT(apptInfo.start_time)}
                        <br />
                            End Time: {formatDT(apptInfo.end_time)}
                        <br />
                            Status: {apptInfo.status}
                        <br />
                            Patient:
                        <br />
                        <Button onClick={() => onClickCancel(apptInfo.appointment_id)}>
                            Cancel
                        </Button>
                    </div>
                );
            })}
        </div>
    );
}

export default ApptInfo;