import React, { useState, useEffect, useContext } from "react";
import InsuranceAPI from "../apis/InsuranceAPI";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Table, Button, Tabs, Tab, Nav, Col, Row } from "react-bootstrap";
import { AdminContext } from "../context/AdminContext";
import AdminManageInsurance from "../components/AdminManageInsurance";

const AdminInsuranceTab = (props) => {

    const [insurances, setInsurances] = useState([]);
    const [characters, setCharacter] = useState([
        "All","#", "A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z"
    ])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await InsuranceAPI.get("/findAll");
                // console.log(response);
                setInsurances(response.data.data);
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
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="">
                <Row>
                    <Col sm={1} >
                        <Nav variant="pills" className="flex-column" style={{ width: 20 }}>
                            {characters.map((characters, index) => {
                                return (
                                    <Nav.Item key={index}>
                                        <Nav.Link eventKey={characters}>{characters}</Nav.Link>
                                    </Nav.Item>
                                );
                            })}
                        </Nav>
                    </Col>
                    <Col >
                        <Tab.Content>
                            {characters.map((characters, index) => {
                                return (
                                    <Tab.Pane eventKey={characters} key={index}>
                                        <AdminManageInsurance data={insurances} character={characters} />
                                    </Tab.Pane>
                                );
                            })}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
};

export default AdminInsuranceTab;