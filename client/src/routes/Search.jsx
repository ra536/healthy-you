import React, { useEffect, useState } from "react";
//import SearchAPI from '../apis/SearchAPI'
import { useHistory } from "react-router-dom";
import SpecialtyAPI from "../apis/SpecialtyAPI";
import TopNavBar from "../components/TopNavBar";
import { Container } from "react-bootstrap";
import {
  Accordion,
  Button,
  Card,
  ListGroup,
  ButtonGroup,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import magazine from "../components/magazines/magazine.jpg";
import doctorPhoto from "./file.jpg";
import adLong from "../components/ads/ad300.jpg";

const Search = () => {
  const [practice, setPractice] = useState("");
  const [location, setLocation] = useState("");
  const [doctor_name, setDoctor] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [rating, setRating] = useState("");
  const [allSpecialties, setAllSpecialties] = useState([""]);

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SpecialtyAPI.get("/findAll");
        console.log(response);
        setAllSpecialties(response.data.data);
        setSpecialty("");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSpecialty(e.target.value);
    console.log(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      history.push({
        pathname: "/results/",
        search:
          "practice=" +
          practice +
          "&doctor=" +
          doctor_name +
          "&specialty=" +
          specialty +
          "&location=" +
          location +
          "&rating=" +
          rating,
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <TopNavBar />
      <Container>
        <div align="center">
          <h1 align="center"> Doctor Directory</h1>A comprehensive resource
          guide including our annual Top Doctors list as well as other medical
          professionals in the Morris area.
        </div>
        <br />
        <h1>Search</h1>
        <form>
          <input
            id="search-practice"
            value={practice}
            placeholder="Practice"
            onChange={(e) => setPractice(e.target.value)}
          />
          <select value={specialty} onChange={handleChange}>
            <option value="" selected="selected">
              {" "}
            </option>
            {allSpecialties.map((specialties) => {
              return (
                <option
                  key={specialties.specialty}
                  value={specialties.specialty}
                >
                  {specialties.specialty}
                </option>
              );
            })}
          </select>
          <input
            id="search-doctor"
            value={doctor_name}
            placeholder="Doctor"
            onChange={(e) => setDoctor(e.target.value)}
          />
          <input
            id="search-rating"
            value={rating}
            placeholder="Rating"
            onChange={(e) => setRating(e.target.value)}
          />
          <input
            id="search-location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </form>
        <br />
        <hr />
      </Container>
    </div>
  );
};

export default Search;
