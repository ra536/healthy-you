import React, { useEffect, useContext, useState } from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import DoctorAPI from '../apis/DoctorAPI';
import DateTimePicker from 'react-datetime-picker';

const CreateAppt = (props) => {
    // console.log(props.doctorID);
    const [startDT, setStartDT] = useState(new Date());
    const [endDT, setEndDT] = useState(new Date());

    const [listOfDTs, insertDT] = useState([])

    const addToList = async () => {
        console.log(startDT,"\n\n", endDT);
        insertDT([...listOfDTs, {start: startDT, end: endDT}]);
    }

    const handleSubmit = async () => {
        console.log(listOfDTs);
        // try {
        //     const response = await DoctorAPI.post("/addApptSlot", {
        //     });
        //     console.log(response.data.data)
        // }
        // catch (err) {
        //     console.log(err)
        // }
    }

    return(
        <div>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <h1>Start</h1>
                    <DateTimePicker
                        onChange={setStartDT}
                        value={startDT}
                        clearIcon={null}
                    /> 
                    {startDT.toLocaleString()}
                </div>
                <div style={{marginLeft:20, display:"flex", flexDirection:"column"}}>
                    <h1>End</h1>
                    <DateTimePicker
                        onChange={setEndDT}
                        value={endDT}
                        clearIcon={null}
                    />
                    {endDT.toLocaleString()}
                </div>
                <div style={{margin:55}}>
                    <Button  size="sm" onClick={() => addToList()}>Insert</Button>
                </div>
            </div>
        <div>

        <h4>Appointment Slots To Be Added (Start : End)</h4>
        {listOfDTs.map((dt, index) => (
            <div key={index}>{dt.start.toLocaleString()}{" : "}{dt.end.toLocaleString()}</div>
            ))}
        </div>
        
        <br/>
        <Button size="sm" onClick={() => handleSubmit()}>Add Time Slots</Button>
        </div>
    );
};

export default CreateAppt;