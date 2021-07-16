import React, {useState, useEffect} from "react";
import { Carousel } from "react-bootstrap";
import ad1000 from "./ads/ad1000.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import AdAPI from "../apis/AdAPI";


const TopFeaturedAds = (props) => {
  // Holds advertisement information from the database, defaults to 1000 x 300 blue image.
  const [ads, setAds] = useState([{ ad_image: ad1000, type: "1000x300", ad_link: "/"}]);
  const region = props.currentRegion;

  // Call API to retreieve 1000x300 ad info and store in array.
  useEffect(() => {
    AdAPI.post('/getAdsBySize', { size: '1000x300', region: region })
		.then(response => setAds(response.data.data))
  }, []);
  
  // Display advertisments using a carousel.
  return (
    <>	
		<Carousel fade>
			{ads.map((adInfo, index) => 
				<Carousel.Item key={index}>
					<a href={adInfo.ad_link}>
					<img
					  className="d-block w-100"
					  src={adInfo.ad_image}
					  alt="Advertisement"
					/>
					</a>
				</Carousel.Item>)}
		</Carousel>
    </>
  );
};

export default TopFeaturedAds;