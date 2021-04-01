import React, { useEffect, useContext, useState } from "react";
import SearchAPI from "../apis/SearchAPI";
import DoctorAPI from "../apis/DoctorAPI";
import Search from "../routes/Search";
import { AppContext } from "../context/AppContext";
import queryString from "query-string";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Accordion, Button, Card, ListGroup, ButtonGroup, Form, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import magazine from '../components/magazines/magazine.jpg';
import doctorPhoto from '../routes/file.jpg';
import adLong from '../components/ads/ad300.jpg';

const SearchResults = (props) => {
  const { results, setResults } = useContext(AppContext);

  const [featuredDoctor, setFeaturedDoctor ] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        var whereClause = {};
        const search = props.location.search;
        const params = queryString.parse(search);
        console.log(params);

        if (params.practice == null) {
          whereClause["practice"] = "";
        } else {
          whereClause["practice"] = params.practice;
        }

        if (params.doctor == null) {
          whereClause["doctor_name"] = "";
        } else {
          whereClause["doctor_name"] = params.doctor;
        }

        if (params.location == null) {
          whereClause["location"] = "";
        } else {
          whereClause["location"] = params.location;
        }

        if (params.rating == null) {
          whereClause["rating"] = "";
        } else {
          whereClause["rating"] = params.rating;
        }

        if (params.specialty == null) {
          whereClause["specialty"] = "";
        } else {
          whereClause["specialty"] = params.specialty;
        }

        console.log(whereClause);

        const response = await SearchAPI.post(
          "/search",
          whereClause
          // {
          //     practice: params.practice,
          //     doctor_name: params.doctor,
          //     location: params.location,
          //     rating: params.rating,
          //     specialty: params.specialty
          // }
        );
        setResults(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await DoctorAPI.get(
          "/random"
          // {
          //     practice: params.practice,
          //     doctor_name: params.doctor,
          //     location: params.location,
          //     rating: params.rating,
          //     specialty: params.specialty
          // }
        );
        setFeaturedDoctor(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [props.location.search, setResults]);

  return (
    <div>
      <Search />
      <br />
      <Container fluid="md">
        <Row align="left">
          <Col align="left">
            <div align="left">

                <h3>
                  Featured Doctors
                </h3>

            </div>
            <Link to={"/doctor-profile/" + featuredDoctor.doctor_id} style={{ textDecoration: "none", color: "black" }}>
              <ListGroup.Item>
                <Container fluid="md">
                  <Row>
                    <Col>
                      <Card.Img variant="top" src={featuredDoctor.profile_picture} />
                    </Col>
                    <Col>

                      <h3>{featuredDoctor.doctor_name}</h3>
                      <h6>Morristown, NJ</h6>
                      <h6>{featuredDoctor.phone}</h6>
                      <br />
                      <h6>Specialty: {featuredDoctor.specialty}</h6>
                      <h6>Location: Morris County</h6>

                      <Button variant="info" size="md" href="/book-appointment">
                        Available starting April 8
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            </Link>

            <br />
            <div align="left">
                <h3>
                  Search Results
                </h3>
            </div>
                {results.map((results, index) => {
                return (
                  <Link to={"/doctor-profile/" + results.doctor.doctor_id} style={{ textDecoration: "none", color: "black" }}>
                    <ListGroup.Item>
                      <Container fluid="md">
                        <Row>
                          <Col>
                            <Card.Img variant="top" src={results.doctor.profile_picture} />
                          </Col>
                          <Col>
                            <h3>{results.doctor.doctor_name}</h3>
                            <h6>Morristown, NJ</h6>
                            <h6>{results.doctor.phone}</h6>
                            <br />
                            <h6>Specialty: {results.doctor.specialty}</h6>
                            <h6>Location: Morris County</h6>

                            <Button variant="info" size="md" href="/book-appointment">
                            Available starting April 8
                            </Button>
                          </Col>
                        </Row>
                      </Container>
                    </ListGroup.Item>
                  </Link>
                );
              })}
            
          </Col>



          <Col align="center" >
            
            <h3>
              Follow us on our social media
                        </h3>
            <SocialIcon url="https://www.facebook.com/hwfmg/" />{' '}
            <SocialIcon url="https://twitter.com/HWFMagazine1/" />{' '}
            <SocialIcon url="https://www.instagram.com/healthwellnessfitnessmag/" />{' '}
            <SocialIcon url="https://www.linkedin.com/company/health-wellness-&-fitness" />
            <br /><br /><br />

            <Form style={{ width: '50%' }}>
              <Form.Control type="email" placeholder="Search For Doctors" rounded />
            </Form>
            <div style={{ width: '50%' }}>
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Specialty
                                </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Allergy and immunology |
                      Anesthesiology |
                      Dermatology |
                      Diagnostic radiology |
                      Emergency medicine |
                      Family medicine |
                      Internal medicine |
                      Medical genetics |
                      Neurology |
                      Nuclear medicine |
                      Obstetrics and gynecology |
                      Ophthalmology |
                      Pathology |
                      Pediatrics |
                      Physical medicine and rehabilitation |
                      Preventive medicine |
                      Psychiatry |
                      Radiation oncology |
                      Surgery|
                      Urology
                                </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Location
                                </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      Harrison, NJ |
                      Kearny, NJ |
                      East Orange, NJ |
                      Irvington, NJ |
                      Hillside, NJ |
                      Orange, NJ |
                      North Arlington, NJ |
                      Belleville, NJ |
                      South Orange, NJ |
                      Bloomfield, NJ |
                      Jersey City, NJ |
                      Maplewood, NJ |
                      Elizabeth, NJ |
                      Union, NJ |
                      Bayonne, NJ
                                </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <br /><br />
            <br />
            <div align="center">
              <h3>
                Magazine
                            </h3>
            </div>
            <div align="center" style={{ width: '50%' }} >

              <ButtonGroup vertical>


                <Card.Img variant="top" src={magazine} />

                <Button variant="outline-info" size="md">Subscribe</Button>

                <Button variant="outline-info" size="md">Gifts</Button>

                <Button variant="outline-info" size="md">Digital Subscription</Button>

                <Button variant="outline-info" size="md">Manage Account</Button>

                <Button variant="outline-info" size="md">Table of Contents</Button>


              </ButtonGroup>


            </div>
            <br />
            <Card.Img variant="top" src={adLong} style={{ width: '50%' }} />
            <br /><br />

            <br /><br />
            <div align="center" style={{ width: '50%' }}>
                <h3>
                  Featured Listings
                </h3>
            </div>

            <Card.Img variant="top" src={featuredDoctor.profile_picture} style={{ width: '50%' }} />
            <div style={{ width: '50%' }}>
            <Link to={"/doctor-profile/" + featuredDoctor.doctor_id} style={{ textDecoration: "none", color: "black" }}>
              <ListGroup.Item>
                <Container fluid="md">
                  <Row>
                    <Col>

                      <h3>{featuredDoctor.doctor_name}</h3>
                      <h6>Morristown, NJ</h6>
                      <h6>{featuredDoctor.phone}</h6>
                      <br />
                      <h6>Specialty: {featuredDoctor.specialty}</h6>
                      <h6>Location: Morris County</h6>

                      <Button variant="info" size="lg" href="/book-appointment">
                        Book now
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            </Link>
            </div>
            <br />
            

          </Col>
        </Row>
      </Container>
      <br /><br />
      <div align="center">
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-info">1</Button>
          <Button variant="outline-info">2</Button>
          <Button variant="outline-info">3</Button>
          <Button variant="outline-info">...</Button>
          <Button variant="outline-info">More</Button>
        </ButtonGroup>

      </div>
      <br /><br />
    </div>
  );
};

export default SearchResults;
