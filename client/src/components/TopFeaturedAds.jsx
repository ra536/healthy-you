import React, {useState, useEffect} from "react";
import { Carousel } from "react-bootstrap";
import ad1000 from "./ads/ad1000.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import AdAPI from "../apis/AdAPI";


const TopFeaturedAds = (props) => {
  // Holds advertisement information from the database, defaults to 1000 x 300 blue image.
  const [ads, setAds] = useState([{ ad_image: ad1000, type: "1000x300", ad_link: "/"}]);
  
  // Array to simulate database advertisement information. 
  const theAds = [{ ad_image: ad1000, type: "1000x300", ad_link: "/"}, { ad_image: ad1000, type: "1000x300", ad_link: "/"}, 
			      { ad_image: ad1000, type: "1000x300", ad_link: "/"}, { ad_image: ad1000, type: "1000x300", ad_link: "/"}];
				  
useEffect(() => {
	
	// Promise used to gather advertisement info from the database.
	let advertisments = new Promise((resolve, reject) => {
		try {
			const response = await AdAPI.post("/getAdsBySize", { size: "1000x300"});
			resolve(response.data.data);
		} catch (err) {
			console.log(err);
			reject('Could not retrieve 1000px ads.');
		}
	})
	
	advertisments.then((adverts) => {
		setAds(adverts);
	}).catch((message) => {
		console.log(message)
	})
	
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {

        const response = await AdAPI.post("/getAdsBySize", { size: "1000x300"});
		setAds(response.data.data); // We will use map to traverse this array.		
		
      } catch (err) {
		  console.log(err);
      }
    };
    fetchData();
  }, []);
  
  return (
    <>	
		<Carousel fade>
			{theAds.map((adInfo, index) => 
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