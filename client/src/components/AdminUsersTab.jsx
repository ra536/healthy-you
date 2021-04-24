import React, { useState, useEffect, useContext } from "react";
import DoctorAPI from "../apis/DoctorAPI";
import UserAPI from "../apis/UserAPI";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Table, Button, Tabs, Tab, Nav, Col, Row } from "react-bootstrap";
import AdminManageUsers from "../components/AdminManageUsers";
import AdminManageDoctors from "../components/AdminManageDoctors";
import AdminManageWriters from "../components/AdminManageWriters";
import { AdminContext } from "../context/AdminContext";

const AdminUsersTab = (props) => {


    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="">
                <Row>
                    <Col sm={1} >
                        <Nav variant="pills" className="flex-column" style={{width:20}}>
                            <Nav.Item>
                                <Nav.Link eventKey="user">Users</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="doctor">Doctors</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="writer">Writers</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col >
                        <Tab.Content>
                            <Tab.Pane eventKey="user">
                                <AdminManageUsers type="User" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="doctor">
                                <AdminManageDoctors type="Doctor" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="writer">
                                <AdminManageWriters type="Writer" />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
};

export default AdminUsersTab;