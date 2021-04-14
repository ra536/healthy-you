import React, { useEffect, useState } from "react";
import ReviewAPI from "../apis/ReviewAPI";
// import TestAPI from '../apis/TestAPI';
// import InputTest from '../components/InputTest';
// import { TestContext } from '../context/TestContext';

const Review = (props) => {
  // Store the data retrieved from backend API into context
  // const { tests, setTests } = useContext(TestContext);
  const [codes, setCodes] = useState([]);
  var validCodes = [];
  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        validCodes = await ReviewAPI.post("/getAllInviteCodes", {});
        const codeArray = validCodes.data.data;
        console.log("Array ", codeArray);
        const newArray = codeArray.map((element) => element.review_id);
        console.log("Array ", newArray);
        setCodes(newArray);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // Call our backend API to retrieve list of test objects from db
  const accessCode = props.url.substr(
    props.url.indexOf("leaveReview/") + 12,
    36
  );
  // Constant Review ID Value


  if (codes.some((code) => code.toString() === accessCode)) {
    // come up with the form and create form handler component
    // pull the corresponding information (doctor, etc.)
    return (
      <div>
        <h1>Review</h1>
        <h2>Valid: {accessCode}</h2>
      </div>
    );
  }

  return (
    // Return different webpage, depending on the validity of the ID provided
    <div>
      <p>Error: invalid access code {accessCode}</p>
    </div>
  );
};

export default Review;
