import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AdAPI from "../apis/AdAPI";
import { Table, Button } from "react-bootstrap";

const ManageAds = (props) => {

    const [results, setResults] = useState([]);
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");
    const [size, setSize] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {

            } catch (err) {
                console.log(err);
            }
        };
        console.log("use effect happened!");
        fetchData();
    }, []);

    return (
        <>
            <h2>Manage Ads</h2>
            <form>
                <input type="text" placeholder="Size" onChange={(e) => setSize(e.target.value)}></input>
                <input type="text" placeholder="Link" onChange={(e) => setLink(e.target.value)}></input>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <br />
            <br />
        </>
    );
};

export default ManageAds;