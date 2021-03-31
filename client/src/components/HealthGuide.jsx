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
              <Button variant="outline-dark" size="sm" block>
                Doctor
              </Button>
            </Col>
            <Col>
              <Button variant="outline-dark" size="sm" block>
                Dentist
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Button variant="outline-dark" size="sm" block>
                Chiropractor
              </Button>
            </Col>
            <Col>
              <Button variant="outline-dark" size="sm" block>
                More...
              </Button>
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
