import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";

const ReviewSuccess = () => {

    return (
        <>
        <TopNavBar />
        <Container>
            <div align="center">
            <h1>Thank you for your feedback!</h1>
            </div>
        </Container>
        </>
    )
}

export default ReviewSuccess;