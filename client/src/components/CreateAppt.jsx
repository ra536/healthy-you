import React, { useEffect, useContext, useState } from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import DoctorAPI from '../apis/DoctorAPI';
import AppointmentAPI from '../apis/AppointmentAPI';
import DateTimePicker from 'react-datetime-picker';
import ApptCalendar from '../components/ApptCalendar';

const CreateAppt = (props) => {

    const [startDT, setStartDT] = useState(new Date());
    const [endDT, setEndDT] = useState(new Date());

    const [unSavedAppts, setUnsavedAppts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await (AppointmentAPI.post("/getAllAppts", {
                    doctor_id: props.doctorID,
                    status: [-1]
                }));
                // console.log(response.data.data);
                setUnsavedAppts(response.data.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [props]);

    const onClickInsert = async () => {
        console.log(startDT, "\n\n", endDT);
        try {
            if (startDT <= endDT) {
                const response = await AppointmentAPI.post("/createAppt", {
                    start: startDT,
                    end: endDT,
                    doctor_id: props.doctorID
                });
                console.log(response.data.data)
                setUnsavedAppts([...unSavedAppts, response.data.data])
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const onClickSaveAll = async () => {
        console.log(unSavedAppts)
        const response = await AppointmentAPI.put("/saveAllAppts", {
            doctor_id: props.doctorID
        })
        console.log(response.data.data);
        props.newAppt(unSavedAppts)
        setUnsavedAppts([]);
    }

    const onClickSave = async (data) => {
        console.log(data.appointment_id);
        const response = await AppointmentAPI.put("/saveOneAppt", {
            doctor_id: props.doctorID,
            appointment_id: data.appointment_id
        })
        console.log(response.data.data);
        props.newAppt(data)
        setUnsavedAppts(unSavedAppts.filter(item => item.appointment_id !== data.appointment_id))
    }

    const onClickRemove = async (id) => {
        console.log(id)
        try {
            const response = await AppointmentAPI.post("/cancelAppt", {
                doctor_id: props.doctorID,
                appointment_id: id
            });
            console.log(response.data.data)
            setUnsavedAppts(unSavedAppts.filter(item => item.appointment_id !== id))
        }
        catch (err) {
            console.log(err)
        }
    }

    const formatDT = (dt) => {
        dt = new Date(dt);
        var ampm = "AM"
        var hours = dt.getHours();
        var mins = dt.getMinutes();

        if (hours === 0) {
            hours = 12;
        } else if (hours >= 11 && hours < 24) {
            ampm = "PM";
            if(hours > 12){
                hours = hours - 12;
            }
        }
        if(hours.toString().length === 1){
            hours = "0" + hours.toString();
        }
        if (mins.toString().length === 1) {
            mins = "0" + mins.toString();
        }
        return (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear() + " " + hours + ":" + mins + " " + ampm;
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
                <div style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}>
                    <h1>Practice</h1>
                    <form>
                        <select >
                            <option value=""> </option>
                        </select>
                    </form>
                </div>
                <div style={{ margin: 55 }}>
                    <Button size="sm" onClick={() => onClickInsert()}>Insert</Button>
                </div>

            </div>
            <div>
                <h3>Unsaved Appointments (Start -- End)</h3>
                <Button size="sm" onClick={() => onClickSaveAll()}>Save All</Button>
                <ul style={{ listStyleType: "none" }}>
                    {unSavedAppts.map((unSavedAppts, index) => {
                        return (
                            <li key={index}>
                                {formatDT(unSavedAppts.start_time)} -- {formatDT(unSavedAppts.end_time)}
                                <Button style={{ margin: 3 }} onClick={() => onClickSave(unSavedAppts)}>
                                    ✓
                                </Button>
                                <Button style={{ margin: 3 }} onClick={() => onClickRemove(unSavedAppts.appointment_id)}>
                                    X
                                </Button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default CreateAppt;