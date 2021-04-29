import React, { useState, useEffect, useContext } from "react";
import ContactAPI from "../apis/ContactAPI";
import UserAPI from "../apis/UserAPI";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Table,
  Button,
  Tabs,
  Tab,
  Nav,
  Col,
  Row,
  Accordion,
} from "react-bootstrap";

const AdminManageUsers = (props) => {
  const [emails, setEmails] = useState([]);

  const [expandedRows, setExpandedRows] = useState([]);
  const [expandState, setExpandState] = useState({});

  const handleExpandRow = (event, userId) => {
    const currentExpandedRows = expandedRows;
    const isRowExpanded = currentExpandedRows.includes(userId);

    let obj = {};
    isRowExpanded ? (obj[userId] = false) : (obj[userId] = true);
    setExpandState(obj);

    const newExpandedRows = isRowExpanded
      ? currentExpandedRows.filter((id) => id !== userId)
      : currentExpandedRows.concat(userId);

    setExpandedRows(newExpandedRows);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ContactAPI.get("/getAllEmails");
        console.log(response.data.data);
        setEmails(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const formatDT = (dt) => {
    dt = new Date(dt);
    return Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(dt);
  };

  return (
    <div style={{ margin: 0 }}>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Sender</th>
            <th>Subject</th>
            <th>Creation</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email, index) => {
            return (
              <>
                <tr
                  key={index}
                  onClick={(event) => handleExpandRow(event, index)}
                >
                  <td>{index}</td>
                  <td>{email.name}</td>
                  <td>{email.sender}</td>
                  <td>{email.subject}</td>
                  <td>{formatDT(email.createdAt)}</td>
                </tr>
                <>
                  {expandedRows.includes(index) ? (
                    <tr key={index}>
                      <td colSpan="7">
                        <div
                          style={{
                            backgroundColor: "#687980",
                            color: "#FFF",
                            padding: "10px",
                            width: "100%",
                          }}
                        >
                          <h2> Message </h2>
                          <body>{email.message}</body>
                        </div>
                      </td>
                    </tr>
                  ) : null}
                </>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminManageUsers;
