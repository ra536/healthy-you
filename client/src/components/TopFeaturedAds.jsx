import React from "react";
import { Carousel } from "react-bootstrap";
import ad1000 from "./ads/ad1000.jpeg";
import "bootstrap/dist/css/bootstrap.css";

const TopFeaturedAds = (props) => {
  return (
    <>
      <div align="center" display="inline">
        <Carousel
          interval={10000}
          controls={false}
          indicators={false}
          style={{ width: "500px", display: "inline-block" }}
        >
          <Carousel.Item>
            <img className="d-block w-100" src={ad1000} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ad1000} alt="Second slide" />
          </Carousel.Item>
        </Carousel>{" "}
        <Carousel
          interval={10000}
          controls={false}
          indicators={false}
          style={{ width: "500px", display: "inline-block" }}
        >
          <Carousel.Item>
            <img className="d-block w-100" src={ad1000} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ad1000} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default TopFeaturedAds;
