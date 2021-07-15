import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import CategoryAPI from "../apis/CategoryAPI";

const HealthGuide = (props) => {
  const region = props.currentRegion;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categories, setCategories] = useState([]);
  const [leftCategories, setLeftCategories] = useState([]);
  const [rightCategories, setRightCategories] = useState([]);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await CategoryAPI.get("/findAll");
        console.log(response.data.data)
        setCategories(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // Button Paths
  const docPath = "/results/" + region + "/?practice=&doctor=&specialty=&category=Doctor&location=&rating="
  const dentistPath = "/results/" + region + "/?practice=&doctor=&specialty=&category=Dentist&location=&rating="
  const chiroPath = "/results/" + region + "/?practice=&doctor=&specialty=&category=Chiropractic&location=&rating="

  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <Container id="health-guide">
        <br />
        <div align="center">
          <h2>Health Guide</h2>
          <br />
        </div>

        <Container>
          <Row>
            <Col>
            </Col>
            <Col>
              <Button variant="success" size="md" block href={docPath}>
                Doctor
              </Button>
            </Col>
            <Col>
              <Button variant="success" size="md" block href={dentistPath}>
                Dentist
              </Button>
            </Col>
            <Col>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
            </Col>
            <Col>
              <Button variant="success" size="md" block href={chiroPath}>
                Chiropractor
              </Button>
            </Col>
            <Col>
              <Button variant="success" size="md" block onClick={handleShow}>
                More...
              </Button>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pick a Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
      <Container>
        <Row>
      <Col align="right">
    {categories.filter((word, index) => (index + 1) % 2).map((category) => {
      return (
        <>
        <Button href={"/results/"+region+"/?practice=&doctor=&specialty=&category="+category.category+"&location=&rating="} variant="success">{category.category}</Button><br /><br />
        </>
      );
    })}
    </Col>
    <Col>
    {categories.filter((word, index) => (index) % 2).map((category) => {
      return (
        <>
        <Button href={"/results/"+region+"/?practice=&doctor=&specialty=&category="+category.category+"&location=&rating="} variant="success">{category.category}</Button><br /><br />
        </>
      );
    })}
    </Col>
    </Row>
    </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default HealthGuide;
