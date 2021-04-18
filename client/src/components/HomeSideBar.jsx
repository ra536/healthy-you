import React from "react";
import { Row, Col, Media } from "react-bootstrap";
import ad250 from "./ads/ad250.jpg";
import magazine from "./magazines/magazine.jpg";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
const HomeSideBar = (props) => {
  return (
    <>
        <Card border="" style={{ width: '18rem' }}>
    <Card.Body>
      <Row>
        <Col>
        <div>
          <iframe
            title="Title"
            allowFullScreen
            height="200"
            width= "250"
            scrolling="no"
            frameBorder="0"
            style={{ border: "none" }}
            src="https://www.wevideo.com/api/4/media/1921444596/embed"
          >
          </iframe>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={ad250} alt="ad250" width={250} height={250} mode="fit" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <img src={magazine} alt="magazine" width={250} mode="fit" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col> Recent Articles </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <ul className="list-unstyled">
            <Media as="li">
              <img
                width={64}
                height={64}
                className="mr-3"
                src="holder.js/64x64"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Expert Name</h5>
                <p>Expert Description</p>
              </Media.Body>
            </Media>

            <Media as="li">
              <img
                width={64}
                height={64}
                className="mr-3"
                src="holder.js/64x64"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Expert Name</h5>
                <p>Expert Description</p>
              </Media.Body>
            </Media>

            <Media as="li">
              <img
                width={64}
                height={64}
                className="mr-3"
                src="holder.js/64x64"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Expert Name</h5>
                <p>Expert Description</p>
              </Media.Body>
            </Media>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={ad250} alt="ad250" width={250} height={250} mode="fit" />
        </Col>
      </Row>
      <br></br>
      <br></br>
      </Card.Body>
  </Card>
    </>
  );
};

export default HomeSideBar;
