import React, { useEffect, useState } from "react";
import AppointmentAPI from "../apis/AppointmentAPI";
import PracticeAPI from '../apis/PracticeAPI';
import DoctorAPI from '../apis/DoctorAPI';
import { Container, Table, Button } from "react-bootstrap";

const UserApptTable = (props) => {
    // console.log(props.user_id)
    const [userApptData, setUserApptData] = useState([]);

    const getDoctorAndPracticeData = async (data) => {
        var docData = [];
        var pracData = [];
        var all = data;

        for (var i = 0; i < data.length; i++) {
            const practiceResponse = await (PracticeAPI.post("/getPracticeData", {
                    practice_id: data[i].practice_id
                }));
            const doctorResponse = await (DoctorAPI.post("/getDoctorName", {
                doctor_id: data[i].doctor_id
            }));
            docData[i] = doctorResponse.data.data;
            pracData[i] = practiceResponse.data.data;
        }
        for(var i = 0; i < pracData.length; i++){
            for(var key in pracData[i]){
                all[i][key] = pracData[i][key]
            }
        }
        for(var i = 0; i < docData.length; i++){
            for(var key in docData[i]){
                all[i][key] = docData[i][key]
            }
        }
        // console.log(all)
        setUserApptData(all)
    }

    const sortByKey = (data, key) => {
        return data.sort(function(a,b){
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (props.user_id != null) {
                    const response = await AppointmentAPI.post(
                        "/getAllUsersAppts", {
                        user_id: props.user_id,
                    });
                    // console.log(response.data.data);
                    var temp = sortByKey(response.data.data, "start_time");
                    getDoctorAndPracticeData(temp);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [props.user_id]);

    const formatDT = (dt) => {
        dt = new Date(dt);
        return (Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(dt));
    }

    return (
        <>
            <h2>Your Upcoming Appointments</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Practice</th>
                        <th>Specialist</th>
                        <th>Where</th>
                        <th>Start Day and Time</th>
                        <th>End Day and Time</th>
                        <th>Reason</th>
                        <th>Insurance/Payment</th>  
                    </tr>
                </thead>
                <tbody>
                    {userApptData.map((userApptData, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{userApptData.first_name}</td>
                                <td>{userApptData.last_name}</td>
                                <td>{userApptData[0].name} </td>
                                <td>{userApptData.doctor_name}</td>
                                <td>{userApptData[0].location}</td>
                                <td>{formatDT(userApptData.start_time)}</td>
                                <td>{formatDT(userApptData.end_time)}</td>
                                <td>{userApptData.reason}</td>
                                <td>{userApptData.insurance}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default UserApptTable;