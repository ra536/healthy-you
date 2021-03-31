import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Image, Button, Carousel, Container } from 'react-bootstrap';
import { Col, Card } from 'react-bootstrap';
import ad728 from './ads/ad728.jpg';
import 'bootstrap/dist/css/bootstrap.css';

const AdBreak = (props) => {

    return (
        <>
        <br /><br />
        <div align="center"><img src={ad728} alt="ad728" width={728} height={90} mode='fit' /></div>
        <br />
        </>
    );
}

export default AdBreak;