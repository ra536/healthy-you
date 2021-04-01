import React, { useEffect, useState } from "react";
//import SearchAPI from '../apis/SearchAPI'
import { useHistory } from "react-router-dom";
import SpecialtyAPI from "../apis/SpecialtyAPI";
import TopNavBar from "../components/TopNavBar";
import { Container } from "react-bootstrap";
import { Accordion, Button, Card, ListGroup, ButtonGroup, Form, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import magazine from '../components/magazines/magazine.jpg';
import doctorPhoto from './file.jpg';
import adLong from '../components/ads/ad300.jpg';

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
      </Container>

      


      <div align = "center">
                <h1 align = "center"> Doctor Directory</h1>
                <Card align = "center" style ={{ width: '50%' }}>
                    <Card.Body>
                        A comprehensive resource guide including our annual Top Doctors list as well as other medical professionals in the Morris area.
                    </Card.Body>
                </Card>
                </div>
                <div>
                <Container align = "center">
                    <Card style ={{ width: '50%' }} >
                        <Card.Body>
                            <h3>
                                Doctor Finder
                            </h3>
                        </Card.Body>
                    </Card>
                    <Form style ={{ width: '25%' }}>
                        <Form.Control type="email" placeholder="Search For Doctors" rounded align = "center"/>
                    </Form>
                </Container>
                </div>
                <div align = "center">
                <Form style ={{ width: '50%' }}>
                <Accordion align = "center">
                    <Card>
                        <Card.Header align = "center">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Specialty
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0" >
                            <Card.Body align = "center">
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
                        <Card.Header align = "center">
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Location
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body align = "center">
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
                </Form>
                </div>
                <br/>
                <Container fluid = "md"> 
                <Row align = "left">
                    <Col align = "left">
                        <div align = "center">
                        <br/>
                            <Card>
                                <h3>
                                    Featured Doctors
                                </h3>
                            </Card>
                        </div>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="md" href="/book-appointment">
                                                    Available starting April 8
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>

                    <br/>
                    <div align = "center">
                        <Card>
                            <h3>
                                All Doctor Listings
                            </h3>
                        </Card>
                    </div>
                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item >
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col >
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>
                                    <a style={{ cursor: 'pointer' }}>
                                    <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>
                                            <Col>
                                            <Card.Img variant="top" src={doctorPhoto}/>
                                            </Col>
                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    </a>
                    </Col>
                    

                    
                    <Col align = "center" >
                        <br/><br/>
                        <h3>
                            Follow us on our social media
                        </h3>
                        <SocialIcon url="https://www.facebook.com/hwfmg/"/>{' '}
                        <SocialIcon url="https://twitter.com/HWFMagazine1/"/>{' '}
                        <SocialIcon url="https://www.instagram.com/healthwellnessfitnessmag/"/>{' '}
                        <SocialIcon url="https://www.linkedin.com/company/health-wellness-&-fitness"/>


                        <br/><br/>
                        <br/>
                        <div align = "center">
                            <h3>
                                Magazine
                            </h3>
                           </div>
                        <div align = "center" style = {{width: '50%'}} >
                        
                            <ButtonGroup vertical>

                            
                            <Card.Img variant="top" src={magazine}/>
                            
                            <Button variant="outline-info" size="sm">Subscribe</Button>
                            
                            <Button variant="outline-info" size="sm">Gifts</Button>
                            
                            <Button variant="outline-info" size="sm">Digital Subscription</Button>
                            
                            <Button variant="outline-info" size="sm">Manage Account</Button>
                            
                            <Button variant="outline-info" size="sm">Table of Contents</Button>
                            
                            
                            </ButtonGroup>
                        

                        </div>
                        <br/>
                        <Card.Img variant="top" src={adLong} style = {{width: '50%'}}/>
                        <br/><br/>

                        <br/><br/>
                        <div align = "center" style = {{width: '50%'}}>
                            <Card>
                                <h3>
                                    Featured Listings
                                </h3>
                            </Card>
                        </div>

                        <Card.Img variant="top" src={doctorPhoto} style = {{width: '50%'}}/>
                        <div style = {{width: '50%'}}>
                        <ListGroup.Item>
                                        <Container fluid = "md"> 
                                            <Row>

                                            <Col>
                                                
                                                    <h3>Dr.Ian Johnson, CAO Ortho Maryland</h3>
                                                    <h6>415 Day Lane, Suite 200, Newark, New Jersey</h6>
                                                    <h6>292-893-9090</h6>
                                                    <h6>Specialty|Orthopedic Surgery</h6>
                                                    <h6>Location|Essex County</h6>
                                                    
                                                    <Button variant="info" size="sm">
                                                    Schedule an appointment: March 23rd, 2021|April 12th, 2021
                                                    </Button>
                                            </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                         </div>
                         <br />
                        <Form style = {{width: '50%'}}>
                            <Form.Control type="email" placeholder="Search For Doctors" rounded/>
                        </Form>
                        <div style = {{width: '50%'}}>
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
                        <br/><br/>
                        
                    </Col>
                </Row>
                </Container>
                <br/><br/>
                <div align = "center">
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

export default Search;
