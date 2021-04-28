import React, {useState, useEffect} from "react";
import ad728 from "./ads/ad728.jpg";
import "bootstrap/dist/css/bootstrap.css";
import AdAPI from "../apis/AdAPI";

const AdBreak = (props) => {
  const [ads, setAds] = useState([]);
  const [ad1, setAd1] = useState({ ad_image: ad728, type: "728x90", ad_link: "/"});
  const [ad2, setAd2] = useState({ ad_image: ad728, type: "728x90", ad_link: "/"});

  useEffect(() => {
    const fetchData = async () => {
try {
        const response = await AdAPI.post("/getAdsBySize", { size: "728x90"});
        console.log(response.data.data);
        setAds(response.data.data);

        console.log(response.data.data[0]);
        console.log(response.data.data[1]);
        if(typeof(response.data.data[0]) == "object"){
          setAd1(response.data.data[0]);
        }
        if(typeof(response.data.data[1]) == "object"){
          setAd2(response.data.data[1]);
        }
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [])

  if(props.number == 2){
    return (
      <>
      <br />
      <br />
      <div align="center">
      <a href={ad2.ad_link}>
        <img src={ad2.ad_image} alt="ad728" style={{ maxWidth:"100%", height: "auto"}} mode="fit" />
      </a>
        
      </div>
      <br />
    </>
    )
  }
  return (
    <>
      <br />
      <br />
      <div align="center">
        <a href={ad1.ad_link}>
        <img src={ad1.ad_image} alt="ad728" style={{ maxWidth:"100%", height: "auto"}} mode="fit" />
        </a>
      </div>
      <br />
    </>
  );
};

export default AdBreak;
