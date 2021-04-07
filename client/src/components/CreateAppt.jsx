import React, { useEffect, useContext, useState } from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import DoctorAPI from '../apis/DoctorAPI';
import AppointmentAPI from '../apis/AppointmentAPI';
import DateTimePicker from 'react-datetime-picker';
import ApptCalendar from '../components/ApptCalendar';

const CreateAppt = (props) => {

    const [startDT, setStartDT] = useState(new Date());
    const [endDT, setEndDT] = useState(new Date());

    const [listOfDTs, insertDT] = useState([]);

    const addToList = async () => {
        console.log(startDT, "\n\n", endDT);
        try {
            if(startDT <= endDT){
                const response = await AppointmentAPI.post("/saveAppt", {
                start: startDT,
                end: endDT,
                doctor_id: props.doctorID
                });
                console.log(response.data.data)
                insertDT([...listOfDTs, [startDT, endDT, response.data.data.appointment_id]]);
                props.newAppt([startDT,endDT,response.data.data.appointment_id]);
            }
        }
        catch (err) {
            console.log(err)
        }
        // insertDT([...listOfDTs, [startDT, endDT]]);
    }

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1>Start</h1>
                    <DateTimePicker
                        onChange={setStartDT}
                        value={startDT}
                        clearIcon={null}
                    />
                    {startDT.toLocaleString()}
                </div>
                <div style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}>
                    <h1>End</h1>
                    <DateTimePicker
                        onChange={setEndDT}
                        value={endDT}
                        clearIcon={null}
                    />
                    {endDT.toLocaleString()}
                </div>
                <div style={{ margin: 55 }}>
                    <Button size="sm" onClick={() => addToList()}>Insert</Button>
                </div>
            </div>
        </div>
    );
};

export default CreateAppt;