import React, { useState, useEffect, useContext } from "react";
import SpecialtyAPI from "../apis/SpecialtyAPI";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Table, Button, Tabs, Tab, Nav, Col, Row, Accordion } from "react-bootstrap";
import { AdminContext } from "../context/AdminContext";

const AdminManageSpecialty = (props) => {
    const [allSpecialties, setAllSpecialties] = useState([""]);

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
        if (props.data.length > 1) {
            var temp = []
            var index = 0;
            var data = props.data;
            if (props.character == "All") {
                for (var i = 0; i < data.length; i++) {
                    temp[i] = data[i]
                }
            }
            else {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].specialty.charAt(0) == props.character) {
                        temp[index] = data[i]
                        index += 1;
                    }
                }
            }
            setAllSpecialties(temp);
        }
    }, [props]);

    const formatDT = (dt) => {
        dt = new Date(dt);
        return (Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(dt));
    }


    return (
        <div style={{ margin: 0, marginBottom: 100, height: 1075, overflow: "auto" }}>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Specialty</th>
                    </tr>
                </thead>
                <tbody>
                    {allSpecialties.map((allSpecialties, index) => {
                        return (
                            <>
                                <tr key={index} onClick={event => handleExpandRow(event, index)}>
                                    <td>{index}</td>
                                    <td>{allSpecialties.specialty}</td>
                                </tr>
                                <>
                                    {
                                        expandedRows.includes(index) ?
                                            <tr key={index}>
                                                <td colSpan="2">
                                                    <div style={{ backgroundColor: '#687980', color: '#FFF', padding: '10px', width: "100%" }}>
                                                        <h2> Details </h2>
                                                        <ul>
                                                            <li key={index}>
                                                                <span><b></b></span> {' '}
                                                                <span> </span>
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

export default AdminManageSpecialty;