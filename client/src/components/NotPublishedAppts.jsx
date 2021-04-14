import React, { useEffect, useContext, useState } from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import PracticeAPI from '../apis/PracticeAPI';
import AppointmentAPI from '../apis/AppointmentAPI';

const NotPublishedAppts = (props) => {
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

    const onClickSaveAll = async () => {
        console.log(unSavedAppts)
        const response = await AppointmentAPI.put("/saveAllAppts", {
            doctor_id: props.doctorID
        },
        {
          withCredentials: true,
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
        },
        {
          withCredentials: true,
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
            },
            {
              withCredentials: true,
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
        return (Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(dt));
    }

    return (
        <div>
            <h3>Unsaved Appointments (Start -- End)</h3>
            <Button size="sm" onClick={onClickSaveAll}>Save All</Button>
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
    );
}

export default NotPublishedAppts;