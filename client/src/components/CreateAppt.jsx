import React, { useEffect, useContext, useState } from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import DoctorAPI from '../apis/DoctorAPI';
import AppointmentAPI from '../apis/AppointmentAPI';
import DateTimePicker from 'react-datetime-picker';
import ApptCalendar from '../components/ApptCalendar';

const CreateAppt = (props) => {
    // console.log(props.doctorID);
    const [startDT, setStartDT] = useState(new Date());
    const [endDT, setEndDT] = useState(new Date());

    const [listOfDTs, insertDT] = useState([]);

    const addToList = async () => {
        console.log(startDT, "\n\n", endDT);
        try {
            const response = await AppointmentAPI.post("/saveAppt", {
                start: startDT,
                end: endDT,
                doctor_id: '1b6cdc52-0ae6-4a70-8290-a0aa2aceeb61'
            });
            console.log(response.data.data)
            insertDT([...listOfDTs, [startDT, endDT, response.data.data.appointment_id]]);
        }
        catch (err) {
            console.log(err)
        }
        // insertDT([...listOfDTs, [startDT, endDT]]);
    }

    // const handleSubmit = async (e) => {
    //     console.log(e);
    //     try {
    //         const response = await (AppointmentAPI.post("/cancelAppt", {
    //             appointment_id: e
    //         }));
    //         console.log(response.data.data);
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }


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
            <div>
                {/* 
        <h4>Recently Added (Start : End)</h4>
        {listOfDTs.map((dt, index) => (
            <div key={index}>
                {dt[0].toLocaleString()}{" : "}{dt[1].toLocaleString()}
                <Button size="sm" onClick={(e) => handleSubmit(dt[2])}>Remove</Button>
                <br/>
            </div>
            ))} */}

                <br />
                <h4>All Appts</h4>
                <ApptCalendar doctorID='1b6cdc52-0ae6-4a70-8290-a0aa2aceeb61' reload={listOfDTs} />
            </div>
        </div>
    );
};

export default CreateAppt;