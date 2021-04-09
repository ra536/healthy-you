import React, { useEffect, useContext, useState } from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import PracticeAPI from '../apis/PracticeAPI';
import AppointmentAPI from '../apis/AppointmentAPI';
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAppt = (props) => {

    const [startDT, setStartDT] = useState(new Date());
    const [endDT, setEndDT] = useState(new Date());

    const [allPractices, setAllPractices] = useState([]);
    const [selectedPractice, setSelectedPractice] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PracticeAPI.post(
                    "/findAll",
                    {
                        doctor_id: props.doctorID,
                    }
                );
                console.log(response.data.data);
                setAllPractices(response.data.data);
                setSelectedPractice(response.data.data[0])
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [props.doctorID]);

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
                props.newAppt(response.data.data)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const onPracticeChange = (e) => {
        // console.log(e.target.value)
        setSelectedPractice(e.target.value)
    }

    const formatDT = (dt) => {
        dt = new Date(dt);
        return (Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(dt));
    }

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1>Start</h1>
                    <Datepicker
                        required
                        selected={startDT}
                        onChange={date => setStartDT(date)}
                        showTimeSelect
                        dateFormat="Pp"
                        timeFormat="h:mm aa"
                        timeIntervals={1}
                    />
                    {formatDT(startDT)}
                </div>
                <div style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}>
                    <h1>End</h1>
                    <Datepicker
                        required
                        selected={endDT}
                        onChange={date => setEndDT(date)}
                        showTimeSelect
                        dateFormat="Pp"
                        timeFormat="h:mm aa"
                        timeIntervals={1}
                    />
                    {formatDT(endDT)}
                </div>
                <div style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}>
                    <h1>Practice</h1>
                    <select value={selectedPractice} onChange={e => onPracticeChange(e)}>
                        {allPractices.map((practice, index) => {
                            return (
                                <option
                                    key={index}
                                    value={practice.practice_id}
                                >
                                    {practice.name}, {practice.location}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div style={{ margin: 55 }}>
                    <Button size="sm" onClick={() => onClickInsert()}>Insert</Button>
                </div>
            </div>
        </div>
    );
};

export default CreateAppt;