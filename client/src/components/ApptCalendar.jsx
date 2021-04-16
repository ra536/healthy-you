import React, { useEffect, useContext, useState } from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DoctorAPI from '../apis/DoctorAPI';
import AppointmentAPI from '../apis/AppointmentAPI';
import { AuthContext } from "../context/AuthContext";

const ApptCalendar = (props) => {
    // console.log(props.doctorID);

    const [value, onChange] = useState(new Date());
    const [appts, setAppointments] = useState([]);
    const [currentDayApts, setCurrentDayApts] = useState([]);
    const [selectedDay, setDay] = useState(new Date());
    const { loggedIn, role, id } = useContext(AuthContext);

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
            var color = "primary";

            if (date == td.getDate() && month == td.getMonth() && year == td.getFullYear()) {
                if(props[i].status == "Booked"){
                    color = "success";
                }
                todaysAppts[index] = [sdt, edt, id, color];
                index += 1;
            }
        }

        todaysAppts.sort();
        for (var i = 0; i < todaysAppts.length; i++){
            todaysAppts[i] = [
                (Intl.DateTimeFormat("en-US", {hour: "2-digit", minute: "2-digit"}).format(todaysAppts[i][0])),
                (Intl.DateTimeFormat("en-US", {hour: "2-digit", minute: "2-digit"}).format(todaysAppts[i][1])),
                todaysAppts[i][2],
                todaysAppts[i][3]
            ]
        }
        //console.log(todaysAppts);
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
                var status = ["Open"];
                if(role === "Doctor" && props.route === "Dashboard"){
                    status = ["Open", "Booked"]
                }
                const response = await (AppointmentAPI.post("/getAllAppts", {
                    doctor_id: props.doctorID,
                    status: status
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
        if(role === "Doctor" && props.route === "Dashboard"){
            console.log(id);
            props.appt_id(id);
        } else {
            console.log("USER CLICKED: " + id);
        }
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
                <div style={{ alignItems: "center", display: "flex", flexDirection: "column", left: 350, minWidth:790, height:302, width:"100%","borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}>
                    <h4>Availability</h4>
                    <div style={{overflow: "auto", height:3000, width: "100%"}}>
                        {currentDayApts.map((currentDayApts, index) => {
                            return (
                                <Button variant={currentDayApts[3]} onClick={() => handleClick(currentDayApts[2])} key={index} style={{ margin: 5 }}>
                                    {currentDayApts[0]} : {currentDayApts[1]}
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