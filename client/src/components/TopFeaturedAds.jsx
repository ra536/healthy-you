import React, {useState, useEffect} from "react";
import { Carousel } from "react-bootstrap";
import ad1000 from "./ads/ad1000.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import AdAPI from "../apis/AdAPI";

// Do maps, promises, and fix Database errors

const TopFeaturedAds = (props) => {
  const [ads, setAds] = useState([{ ad_image: ad1000, type: "1000x300", ad_link: "/"}]);
  const theAds = [{ ad_image: ad1000, type: "1000x300", ad_link: "/"}, { ad_image: ad1000, type: "1000x300", ad_link: "/"}, 
			      { ad_image: ad1000, type: "1000x300", ad_link: "/"}, { ad_image: ad1000, type: "1000x300", ad_link: "/"}];
				  
useEffect(() => {
	
	// Practicing using Promises
	let p = new Promise((resolve, reject) => {
		let a = 1 + 4
		if (a == 2) {
			resolve('Success')
		} else {
			reject('Failed')
		}
	})
	
	p.then((message) => {
		console.log('This is in the then: ' + message)
	}).catch((message) => {
		console.log('This is in the catch ' + message)
	})
	
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
		console.log("IM INSIDE THE TRY");
        const response = await AdAPI.post("/getAdsBySize", { size: "1000x300"});
		setAds(response.data.data);
		console.log("Successful");
		console.log("response.data.data");
		console.log(response.data.data);		
		
      } catch (err) {
		  console.log("An error occured")
		  console.log(err);
      }
    };
    fetchData();
	
  }, []);
  
  return (
    <>	
		<Carousel fade>
			<Carousel.Item>
				<a href={"/"}>
				<img
				  className="d-block w-100"
				  src={ad1000}
				  alt="Advertisement"
				/>
				</a>
			</Carousel.Item>
			<Carousel.Item>
				<a href={"/"}>
				<img
				  className="d-block w-100"
				  src={ad1000}
				  alt="Advertisement"
				/>
				</a>
			</Carousel.Item>
		</Carousel>
		
		
		
		
		
		
		
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