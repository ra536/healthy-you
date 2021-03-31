import React from "react";
import ad728 from "./ads/ad728.jpg";
import "bootstrap/dist/css/bootstrap.css";

const AdBreak = (props) => {
  return (
    <>
      <br />
      <br />
      <div align="center">
        <img src={ad728} alt="ad728" width={728} height={90} mode="fit" />
      </div>
      <br />
    </>
  );
};

export default AdBreak;
