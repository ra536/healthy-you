import React, { useEffect, useState } from "react";
import { CheckCircle } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";

const ReviewSuccess = () => {
    let { region } = useParams();

    return (
        <>
        <TopNavBar currentRegion={region}/>
        <Container>
            <div align="center">
            <h1>Thank you for your feedback!</h1>
            <p style={{ fontSize: "24px" }}>It really means a lot to us!</p>
            <br />
            <CheckCircle size={100} color="forestgreen"/>
            </div>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer currentRegion={region}/>
        </>
    )
}

export default ReviewSuccess;