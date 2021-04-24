import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const HealthGuide = (props) => {
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
              <Button variant="success" size="md" block href="/results/?practice=&doctor=&specialty=&category=Doctor&location=&rating=">
                Doctor
              </Button>
            </Col>
            <Col>
              <Button variant="success" size="md" block href="/results/?practice=&doctor=&specialty=&category=Dentist&location=&rating=">
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
              <Button variant="success" size="md" block href="/results/?practice=&doctor=&specialty=&category=Chiropractic&location=&rating=">
                Chiropractor
              </Button>
            </Col>
            <Col>
              <Button variant="success" size="md" block href="/results">
                More...
              </Button>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default HealthGuide;
