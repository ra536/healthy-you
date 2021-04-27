import React, { useState, useEffect } from "react";
import { Row, Col, Media, Card, Button, ButtonGroup, Form, FormControl, Container } from "react-bootstrap";
import ad300 from "../components/ads/ad300.jpg";
import AdAPI from "../apis/AdAPI";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const BlogSideBar = (props) => {
    const [ads, setAds] = useState([]);
    const [ad1, setAd1] = useState({ ad_image: ad300, type: "300x600", ad_link: "/" })
    const [filterText, setFilterText] = useState("");
    
    let { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await AdAPI.post("/getAdsBySize", { size: "300x600" });
                setAds(response.data.data);
                if (typeof (response.data.data[0]) == "object") {
                    setAd1(response.data.data[0]);
                }
                console.log(response.data.data);
                console.log(response.data.data[0].ad_image);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const handleChange = (data) => {
        setFilterText(data.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if(id == null) id = "Blog"
          history.push({
            pathname: "/category/" + id + "/",
            search:
              "s=" + filterText
          });
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <>
            <Form inline>
                <Form.Control
                    placeholder="Search"
                    type="text"
                    name="day"
                    values={filterText}
                    onChange={handleChange}
                />
                <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
            </Form>
            <br />
            <br />
            <h1>Recent Posts</h1>
            <br />
            <h2>Dental Care Basics</h2>
            <p>Think you know everything about proper brushing and flossing techniques? Understand the basics and what you can do to promote oral health.</p>
            <br />
            <h2>Fat Loss Done Right</h2>
            <p>Whether you’re looking to improve your overall health or simply slim down for summer, burning off excess fat can be quite challenging.</p>
            <br />
            <h2>Hyperthyroid</h2>
            <p>Hyperthyroidism is the production of too much thyroxine hormone. It can increase metabolism.
                                Symptoms include unexpected weight loss, rapid or irregular heartbeat, sweating, and irritability, although the elderly often experience no symptoms.</p>
            <br />
            <a href={ad1.ad_link}>
                <img src={ad1.ad_image} alt="ad300" width={300} height={600} />
            </a>
            <br />
        </>

    );
};
export default BlogSideBar;