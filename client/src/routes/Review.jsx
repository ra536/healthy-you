import React from "react";
// import TestAPI from '../apis/TestAPI';
// import InputTest from '../components/InputTest';
// import { TestContext } from '../context/TestContext';

const Review = (props) => {
  // Store the data retrieved from backend API into context
  // const { tests, setTests } = useContext(TestContext);

  // Call our backend API to retrieve list of test objects from db
  const accessCode = props.url.substr(
    props.url.indexOf("leaveReview/") + 12,
    5
  );
  // Constant Review ID Value

  const validCodes = [12345, 23456];

  if (validCodes.some((code) => code.toString() === accessCode)) {
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
