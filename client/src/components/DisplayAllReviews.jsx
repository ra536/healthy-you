import React, { useState, useEffect } from "react";
import ReviewAPI from "../apis/ReviewAPI";
import "bootstrap/dist/css/bootstrap.css";
import { Table } from "react-bootstrap";

const DisplayAllReviews = (props) => {

    const [reviews, setReviews] = useState([]);

    // NEED useContext to sync with parent element!

    useEffect(() => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await ReviewAPI.post("/findAll", {});
                console.log(response.data.data);
                setReviews(response.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h1>Hello</h1>
            <Table striped bordered hover>
            <thead>
          <tr>
            <th>Status</th>
            <th>ReviewID</th>
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
            {reviews.map((review) => {
                return (
                    <>
                    <tr key={review.review_id}>
                    <td>{review.status}</td>
                    <td>{review.review_id}</td>
                    <td>{review.name}</td>
                    <td>{review.overall_rating}</td>
                    <td>{review.bedside_manner}</td>
                    <td>{review.wait_time}</td>
                    <td>{review.availability}</td>
                    <td>{review.full_review}</td>
                    <td>{review.publication_date}</td>
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