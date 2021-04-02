import React, { useEffect, useContext, useState } from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DoctorAPI from '../apis/DoctorAPI';

const ApptCalendar = (props) => {
    // console.log(props.doctorID);

    const [value, onChange] = useState(new Date());
    const [appts, setAppointments] = useState([]);
    const [currentDayApts, setCurrentDayApts] = useState([]);

    function loadTodaysAppts(props){
        // To display the appointments for today when page loads
        setCurrentDayApts([]);
        var todaysAppts = [];
        var index = 0;
        var td = new Date();

        for(var i = 0; i < props.length; i++){
            var stringAsDate = new Date(props[i])
            var date = stringAsDate.getDate();
            var month = stringAsDate.getMonth();
            var year = stringAsDate.getFullYear();

            if(date === td.getDate() && month === td.getMonth() && year === td.getFullYear()){
                var hours = stringAsDate.getHours()
                if(hours.toString().length === 1){
                    hours= "0" + hours;
                }
                var minutes = stringAsDate.getMinutes();
                if(minutes.toString().length === 1){
                    minutes = "0" + minutes;
                }
                var apptTime = hours + ":" + minutes;
                todaysAppts[index] = apptTime;
                index += 1;
            }
        }

        todaysAppts.sort();
        setCurrentDayApts(todaysAppts);
    }

    const dayClicked = async (e) => {
        // When user clicks a day on the calendar, show appointments for that day
        setCurrentDayApts([]);
        var todaysAppts = [];
        var index = 0;

        for(var i = 0; i < appts.length; i++){
            var stringAsDate = new Date(appts[i])
            var date = stringAsDate.getDate();
            var month = stringAsDate.getMonth();
            var year = stringAsDate.getFullYear();

            if(date === e.getDate() && month === e.getMonth() && year === e.getFullYear()){
                var hours = stringAsDate.getHours()
                if(hours.toString().length === 1){
                    hours= "0" + hours;
                }
                var minutes = stringAsDate.getMinutes();
                if(minutes.toString().length === 1){
                    minutes = "0" + minutes;
                }
                var apptTime = hours + ":" + minutes;
                todaysAppts[index] = apptTime;
                index += 1;
            }
        }

        todaysAppts.sort();
        console.log(todaysAppts.length);
        setCurrentDayApts(todaysAppts);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await (DoctorAPI.post("/getAppointments", {
                    doctor_id: props.doctorID
                }));
                // console.log(response.data.data[0])
                // console.log(response.data.data[0].available_appt)
                setAppointments(response.data.data[0].available_appt)
                loadTodaysAppts(response.data.data[0].available_appt);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    const handleClick = (e) => {
        console.log(e);
    }

    return(
        <div style={{display: "flex"}}>
            <div >
                <Calendar
                    onChange={onChange}
                    value={value}
                    calendarType="US"
                    minDetail="year"
                    onClickDay={dayClicked}
                />
            </div>
            <div style={{alignItems:"center" , display: "flex", flexDirection:"column", left:350, overflow:"hidden", "borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', width:243, height:302}}>
                <h4>Availability</h4>
                <div style={{overflowY: 'auto'}}>
                    {currentDayApts.map((currentDayApts, index) => {
                        return (
                            <Button onClick={() => handleClick(currentDayApts)} key={index} style={{margin:5}}>
                                {currentDayApts}
                            </Button>
                        )
                    })}
                </div>
            </div>
        </div> 
    );
};

export default ApptCalendar;