import React, { useState, useEffect, useContext } from "react";
import DoctorAPI from "../apis/DoctorAPI";
import UserAPI from "../apis/UserAPI";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Table, Button, Tabs, Tab, Nav, Col, Row } from "react-bootstrap";
import { AdminContext } from "../context/AdminContext";

const AdminManageDoctors = (props) => {
    const [userList, setUserList] = useState([]);

    const [expandedRows, setExpandedRows] = useState([]);
    const [expandState, setExpandState] = useState({});

    const handleExpandRow = (event, userId) => {
        const currentExpandedRows = expandedRows;
        const isRowExpanded = currentExpandedRows.includes(userId);

        let obj = {};
        isRowExpanded ? (obj[userId] = false) : (obj[userId] = true);
        setExpandState(obj);

        const newExpandedRows = isRowExpanded ?
            currentExpandedRows.filter(id => id !== userId) :
            currentExpandedRows.concat(userId);

        setExpandedRows(newExpandedRows);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DoctorAPI.get("/getAllDoctors");
                setUserList(response.data.data);
            } catch (err) {
            }
        };
        fetchData();
    }, []);

    const formatDT = (dt) => {
        dt = new Date(dt);
        return (Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(dt));
    }

    const handleClick = (data) => {
    }

    return (
        <div style={{ margin: 0 }}>
            <Table responsive striped bordered hover>
                <thead>
                    <tr onClick={handleClick}>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Creation</th>
                        <th>Specialties</th>
                        <th>Practices</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((userList, index) => {
                        return (
                            <>
                                <tr key={index} onClick={event => handleExpandRow(event, index)}>
                                    <td>{index}</td>
                                    <td>{userList.firstName}</td>
                                    <td>{userList.lastName}</td>
                                    <td>{userList.email}</td>
                                    <td>{userList.state}</td>
                                    <td>{userList.city}</td>
                                    <td>{formatDT(userList.createdAt)}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <>
                                    {
                                        expandedRows.includes(index) ?
                                            <tr key={index}>
                                                <td colSpan="10">
                                                    <div style={{ backgroundColor: '#687980', color: '#FFF', padding: '10px', width: "100%" }}>
                                                        <h2> Details </h2>
                                                        <ul>
                                                            <li>
                                                                <span><b>Full Name:</b></span> {' '}
                                                                <span> {userList.firstName} {' '} {userList.lastName}</span>
                                                            </li>
                                                            <li>
                                                                <span><b>Specialties:</b></span> {' '}
                                                                <span> {userList.specialty.map((specialty, i) => `${specialty}`).join(', ')}  </span>
                                                            </li>
                                                            <li>
                                                                <span><b>Practices:</b></span> {' '}
                                                                <span> TODO  </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr> : null
                                    }
                                </>
                            </>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default AdminManageDoctors;