import React, { useState, useEffect, useContext } from "react";
import DoctorAPI from "../apis/DoctorAPI";
import UserAPI from "../apis/UserAPI";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Table, Button, Tabs, Tab, Nav, Col, Row, Accordion  } from "react-bootstrap";
import { AdminContext } from "../context/AdminContext";

const AdminManageUsers = (props) => {
    const [userList, setUserList] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await UserAPI.get("/getAllUsers");
                console.log(response.data.data);
                setUserList(response.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const formatDT = (dt) => {
        dt = new Date(dt);
        return (Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(dt));
    }


    return (
        <div style={{ margin: 0 }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Creation</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((userList, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{userList.firstName}</td>
                                <td>{userList.lastName}</td>
                                <td>{userList.email}</td>
                                <td>{userList.state}</td>
                                <td>{userList.city}</td>
                                <td>{formatDT(userList.createdAt)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default AdminManageUsers;