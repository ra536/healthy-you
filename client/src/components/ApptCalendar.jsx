import React, { useEffect, useContext, useState } from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DoctorAPI from '../apis/DoctorAPI';
import AppointmentAPI from '../apis/AppointmentAPI';

const ApptCalendar = (props) => {
    // console.log(props.doctorID);

    const [value, onChange] = useState(new Date());
    const [appts, setAppointments] = useState([]);
    const [currentDayApts, setCurrentDayApts] = useState([]);
    const [selectedDay, setDay] = useState(new Date());


    function loadTodaysAppts(props, td) {
        // To display the appointments for today when page loads
        setCurrentDayApts([]);

        var todaysAppts = [];
        var index = 0;

        for (var i = 0; i < props.length; i++) {
            // sdt = Start Date Time
            var sdt = new Date(props[i].start_time);
            var edt = new Date(props[i].end_time);
            var id = props[i].appointment_id;

            var date = sdt.getDate();
            var month = sdt.getMonth();
            var year = sdt.getFullYear();

            if (date == td.getDate() && month == td.getMonth() && year == td.getFullYear()) {
                var startHours = sdt.getHours()
                if (startHours.toString().length === 1) {
                    startHours = "0" + startHours;
                }
                var startMinutes = sdt.getMinutes();
                if (startMinutes.toString().length === 1) {
                    startMinutes = "0" + startMinutes;
                }
                var startTime = "Start: " + startHours + ":" + startMinutes;

                var endHours = edt.getHours()
                if (endHours.toString().length === 1) {
                    endHours = "0" + endHours;
                }
                var endMinutes = edt.getMinutes();
                if (endMinutes.toString().length === 1) {
                    endMinutes = "0" + endMinutes;
                }
                var endTime = " End: " + endHours + ":" + endMinutes;

                todaysAppts[index] = [startTime, endTime, id];
                index += 1;
            }
        }
        todaysAppts.sort();
        // console.log(todaysAppts);
        setCurrentDayApts(todaysAppts);
    }

    const dayClicked = async (day) => {
        // When user clicks a day on the calendar, show appointments for that day
        setCurrentDayApts([]);
        setDay(day);
        loadTodaysAppts(appts, day);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await (AppointmentAPI.post("/getAllAppts", {
                    doctor_id: props.doctorID
                }));
                // console.log(response.data.data);
                setAppointments(response.data.data)
                loadTodaysAppts(response.data.data, selectedDay);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [props]);

    const handleClick = async (id) => {
        console.log(id);
        props.appt_id(id);
    }

    return (
        <div>
            <div style={{ display: "flex" }}>
                <div >
                    <Calendar
                        onChange={onChange}
                        value={value}
                        calendarType="US"
                        minDetail="year"
                        onClickDay={dayClicked}
                    />
                </div>
                <div style={{ alignItems: "center", display: "flex", flexDirection: "column", left: 350,  height:302, width: 5000,"borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}>
                    <h4>Availability</h4>
                    <div style={{overflow: "auto", height:3000, width: 1000}}>
                        {currentDayApts.map((currentDayApts, index) => {
                            return (
                                <Button onClick={() => handleClick(currentDayApts[2])} key={index} style={{ margin: 5 }}>
                                    {currentDayApts[0] + currentDayApts[1]}
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApptCalendar;