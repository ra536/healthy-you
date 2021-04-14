import React, { useEffect, useState } from "react";
import ReviewAPI from "../apis/ReviewAPI";
import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import { useHistory } from "react-router-dom";
// import TestAPI from '../apis/TestAPI';
// import InputTest from '../components/InputTest';
// import { TestContext } from '../context/TestContext';

const Review = (props) => {
  // Store the data retrieved from backend API into context
  // const { tests, setTests } = useContext(TestContext);
  const [codes, setCodes] = useState([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [overall, setOverall] = useState("");
  const [bedside, setBedside] = useState("");
  const [wait, setWait] = useState("");
  const [availability, setAvailability] = useState("");

  let history = useHistory();


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
  console.log(accessCode);
  // Constant Review ID Value

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("SUBMIT");
    console.log(name);
    console.log(review);
    console.log(overall);
    console.log(bedside);
    console.log(wait);
    console.log(availability);

    console.log("ATTEMPT");

    try {
      const result = await ReviewAPI.post("/leaveReview", {
        name: name,
        review: review,
        overall: overall,
        bedside: bedside,
        wait: wait,
        availability: availability,
        review_id: accessCode,
      })
    } catch (err){
      console.log(err);
    }

    console.log("SUCCESS");
    history.push("/reviewSuccess");
    
  }

  if (codes.some((code) => code.toString() === accessCode)) {
    // come up with the form and create form handler component
    // pull the corresponding information (doctor, etc.)
    return (
      <>
      <TopNavBar />
      <Container>
        <h1>Review</h1>
        <i>Include doctor name, appt date?</i><br/><br/>
        <form onSubmit={handleSubmit}>
          <h5>Name</h5>
          <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
          <br /><br />

          <h5>Review</h5>
          <textarea placeholder="Review" onChange={(e) => setReview(e.target.value)}/>
          <br /><br />
          
          <h5>Overall Rating</h5>
          {[1, 2, 3, 4, 5].map((number) => {
            return (
              <>
              <input type="radio" name="overall" value={number} onChange={(e) => setOverall(e.target.value)}></input>{' '}
              <label>{number}</label>{' '}
              </>
            )
          })}

          <br /><br />

          <h5>Bedside Manner</h5>
          {[1, 2, 3, 4, 5].map((number) => {
            return (
              <>
              <input type="radio" name="bedside" value={number} onChange={(e) => setBedside(e.target.value)}></input>{' '}
              <label>{number}</label>{' '}
              </>
            )
          })}

          <h5>Wait Time</h5>
          {[1, 2, 3, 4, 5].map((number) => {
            return (
              <>
              <input type="radio" name="wait" value={number} onChange={(e) => setWait(e.target.value)}></input>{' '}
              <label>{number}</label>{' '}
              </>
            )
          })}

          <h5>Availability</h5>
          {[1, 2, 3, 4, 5].map((number) => {
            return (
              <>
              <input type="radio" name="availability" value={number} onChange={(e) => setAvailability(e.target.value)}></input>{' '}
              <label>{number}</label>{' '}
              </>
            )
          })}

          <br />
          <input type="submit" value="Leave Review" />
        </form>
      </Container>
      </>
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
