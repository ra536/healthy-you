import React, {useState, useEffect} from "react";
import { Carousel } from "react-bootstrap";
import ad1000 from "./ads/ad1000.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import AdAPI from "../apis/AdAPI";

const TopFeaturedAds = (props) => {
  const [ads, setAds] = useState([]);
  //const [ad, setAd] = useState({ ad_image: ad1000, type: "1000x300", ad_link: "/"});
useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await AdAPI.post("/getAdsBySize", { size: "1000x300"});
        setAds(response.data.data);
		// Use ads array to display the ad slides in html.
		
		/*
        if(typeof(response.data.data[0]) == "object"){
          setAd(response.data.data[0]); 
        }
        console.log(response.data.data);
        console.log(response.data.data[0].ad_image);
		*/
		
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
	  <div id="adCarousel" class="carousel slide" data-bs-ride="carousel">
		  <div class="carousel-indicators">
			<button type="button" data-bs-target="#adCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#adCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
		  </div>
		  <div class="carousel-inner">
			<div class="carousel-item active">   <!--MUST ADD THE ADVERTISEMENT LINKS--> 
			  <img src={ads[0].ad_image} class="d-block w-100" alt="Advertisement #1">
			</div>								 <!--MAKE SURE AD SIZE IS ACCURATE ON PAGE-->
			<div class="carousel-item">          <!--BE SURE THE CORRECT SRC IS BEING USED-->
			  <img src={ads[1].ad_image} class="d-block w-100" alt="Advertisement #2">
			</div>
		  </div>
		  <button class="carousel-control-prev" type="button" data-bs-target="#adCarousel" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		  </button>
		  <button class="carousel-control-next" type="button" data-bs-target="#adCarousel" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		  </button>
		</div>
		
	  <!--
      <div align="center" display="inline">
            <a href={ad.ad_link}>
            <img style={{ maxWidth:"100%", height: "auto"}} src={ad.ad_image} alt="First slide" />
            </a>
      </div>
      <br />
	  -->
	  
    </>
  );
};

export default TopFeaturedAds;
