import React, {useState, useEffect} from "react";
import { Carousel } from "react-bootstrap";
import ad1000 from "./ads/ad1000.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import AdAPI from "../apis/AdAPI";

const TopFeaturedAds = (props) => {
  const [ads, setAds] = useState([]);
useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await AdAPI.post("/getAdsBySize", { size: "1000x300"});
        setAds(response.data.data);
        console.log(response.data.data);
        console.log(response.data.data[0].ad_image);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div align="center" display="inline">
        <Carousel
          controls={false}
          indicators={false}
          style={{ width: "500px", display: "inline-block" }}
        >
          <Carousel.Item>
            <img className="d-block w-100" src={ads[0].ad_image} alt="First slide" />
          </Carousel.Item>
        </Carousel>{" "}
      </div>
    </>
  );
};

export default TopFeaturedAds;
