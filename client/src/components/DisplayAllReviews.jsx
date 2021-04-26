import React, { useState, useEffect, useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import ReviewAPI from "../apis/ReviewAPI";
import "bootstrap/dist/css/bootstrap.css";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone";

const DisplayAllReviews = (props) => {
  const { allReviews, setAllReviews } = useContext(AdminContext);

  // NEED useContext to sync with parent element!

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await ReviewAPI.post("/findAll", {});
        // console.log(response.data.data);
        setAllReviews(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [setAllReviews]);

  const handleApprove = async (e) => {
    console.log(e.target.name);
    try {
      const response = await ReviewAPI.post("/approve", {
        review_id: e.target.id,
        doctor_id: e.target.name,
      });
      try {
        const response = await ReviewAPI.post("/findAll", {});
        // console.log(response.data.data);
        setAllReviews(response.data.data);
      } catch (err) {
        console.log(err);
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <br />
      <h2>Manage Doctor Reviews</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Approve</th>
            <th>Status</th>
            <th>Email</th>
            <th>Name</th>
            <th>Overall Rating</th>
            <th>Bedside Manner</th>
            <th>Wait Time</th>
            <th>Availability</th>
            <th>Review</th>
            <th>Publication Date</th>
          </tr>
        </thead>
        <tbody>
          {allReviews.map((review) => {
            const status = review.status;
            let statusElement;
            let approveElement = <td></td>;
            let timeElement = <td></td>;

            if (review.publication_date !== null) {
              timeElement = (
                <td>
                  <Moment format="MM/DD/YYYY">{review.publication_date}</Moment>
                </td>
              );
            }
            // console.log(status);
            if (status == "SENT") {
              statusElement = (
                <td style={{ color: "orange" }}>{review.status}</td>
              );
            } else if (status == "COMPLETED") {
              statusElement = (
                <td style={{ color: "green" }}>{review.status}</td>
              );
              approveElement = (
                <td>
                  <Button
                    id={review.review_id}
                    name={review.doctor_id}
                    onClick={handleApprove}
                  >
                    Approve
                  </Button>
                </td>
              );
            } else if (status == "APPROVED") {
              statusElement = (
                <td style={{ color: "blue" }}>{review.status}</td>
              );
            } else {
              statusElement = (
                <td style={{ color: "black" }}>{review.status}</td>
              );
            }
            return (
              <>
                <tr key={review.review_id}>
                  {approveElement}
                  {statusElement}
                  <td>{review.email}</td>
                  <td>{review.name}</td>
                  <td>{review.overall_rating}</td>
                  <td>{review.bedside_manner}</td>
                  <td>{review.wait_time}</td>
                  <td>{review.availability}</td>
                  <td>{review.full_review}</td>
                  {timeElement}
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default DisplayAllReviews;
