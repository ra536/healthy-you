import React, {useState, useEffect} from "react";
import { Carousel } from "react-bootstrap";
import ad1000 from "./ads/ad1000.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import AdAPI from "../apis/AdAPI";

const TopFeaturedAds = (props) => {
  const [ads, setAds] = useState([]);
  const [ad, setAd] = useState({ ad_image: ad1000, type: "1000x300", ad_link: "/"});
useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await AdAPI.post("/getAdsBySize", { size: "1000x300"});
        setAds(response.data.data);
        if(typeof(response.data.data[0]) == "object"){
          setAd(response.data.data[0]);
        }
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
            <a href={ad.ad_link}>
            <img style={{ maxWidth:"100%", height: "auto"}} src={ad.ad_image} alt="First slide" />
            </a>
      </div>
      <br />
    </>
  );
};

export default TopFeaturedAds;
