import React, { useEffect, useState } from "react";
//import SearchAPI from '../apis/SearchAPI'
import { useHistory } from "react-router-dom";
import SpecialtyAPI from "../apis/SpecialtyAPI";
import CategoryAPI from "../apis/CategoryAPI";
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
import doctorPhoto from "../routes/file.jpg";
import adLong from "../components/ads/ad300.jpg";

const SearchBar = () => {
  const [practice, setPractice] = useState("");
  const [location, setLocation] = useState("");
  const [doctor_name, setDoctor] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [category, setCategory] = useState("");
  const [allSpecialties, setAllSpecialties] = useState([""]);
  const [filterSpecialties, setFilterSpecialties] = useState([]);
  const [allCategories, setCategories] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SpecialtyAPI.get("/findAll");
        const categoryResponse = await CategoryAPI.get("/findAll");
        setCategories(categoryResponse.data.data);
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
    e.preventDefault();
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    filter(e.target.value);
    e.preventDefault();
  };

  const filter = (data) => {
    var temp = [];
    var index = 0;
    for(var i = 0; i < allSpecialties.length; i++){
      if(allSpecialties[i].category === data){
        temp[index] = allSpecialties[i].specialty
        index += 1;
      }
    }
    setFilterSpecialties(temp);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      history.push({
        pathname: "/results/",
        search:
          "practice=" +
          practice +
          "&specialty=" +
          specialty +
          "&location=" +
          location +
          "&category=" +
          category +
          "&page=1"
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <div align="center" style={{width:"50%", margin:"auto",}}>
        <Form >
          <Form.Group >
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              custom
              value={category} onChange={handleCategoryChange}
            >
              <option value="" selected="selected">
                {" "}
              </option>
              {allCategories.map((categories) => {
                return (
                  <option
                    key={categories.category}
                    value={categories.category}
                  >
                    {categories.category}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>

          {category === "Doctor" || category === "Dentist" || category === "Eye Care" ?
            <Form.Group >
              <Form.Label>Specialty</Form.Label>
              <Form.Control
                as="select"
                custom
                value={specialty} onChange={handleChange}
              >
                <option value="" selected="selected">
                  {" "}
                </option>
                {filterSpecialties.map((specialties) => {
                  return (
                    <option
                      key={specialties}
                      value={specialties}
                    >
                      {specialties}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            : null}

          <Form.Group >
            <Form.Label>Practice</Form.Label>
            <Form.Control
              id="search-practice"
              value={practice}
              onChange={(e) => setPractice(e.target.value)}
            />
          </Form.Group>{" "}
          <Form.Group >
            <Form.Label>Location</Form.Label>
            <Form.Control
              id="search-location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>{" "}
          <Button variant="primary" onClick={handleSubmit} block>
            Search
          </Button>
        </Form>
      </div>
  );
};

export default SearchBar;
