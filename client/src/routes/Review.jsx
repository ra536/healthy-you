import React, { useEffect, useState } from "react";
import { ExclamationTriangle } from 'react-bootstrap-icons';
import ReviewAPI from "../apis/ReviewAPI";
import { Container, Button} from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import {useHistory, useParams} from "react-router-dom";
import Footer from "../components/Footer";
// import TestAPI from '../apis/TestAPI';
// import InputTest from '../components/InputTest';
// import { TestContext } from '../context/TestContext';

const Review = (props) => {
  // Store the data retrieved from backend API into context
  // const { tests, setTests } = useContext(TestContext);
  let { region } = useParams();
  const [codes, setCodes] = useState([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [overall, setOverall] = useState("");
  const [bedside, setBedside] = useState("");
  const [wait, setWait] = useState("");
  const [availability, setAvailability] = useState("");

  const [doctor, setDoctor] = useState("");

  let history = useHistory();


  var validCodes = [];

  // Call our backend API to retrieve list of test objects from db
  const accessCode = props.url.substr(
    props.url.indexOf("leaveReview/") + 12,
    36
  );
  console.log(accessCode);
  // Constant Review ID Value

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

      try {
        const reviewID = props.url.substr(
          props.url.indexOf("leaveReview/") + 12,
          36);
        const theDoctor = await ReviewAPI.post("/getDoctor", {
          review_id: reviewID,
        })
        console.log(theDoctor);
        setDoctor(theDoctor.data.data.doctor_name);

      } catch (err) {
        //
      }
    };
    fetchData();
  }, []);

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

  console.log(codes);

  if (codes.some((code) => code.toString() === accessCode)) {
    // come up with the form and create form handler component
    // pull the corresponding information (doctor, etc.)
    return (
      <>
      <TopNavBar currentRegion={region}/>
      <div align = "center">
      <Container>
        
        <h1>Review</h1>
        
        <span><h5>Leave a review for your recent visit with:</h5>
        <h1 style={{ color: 'DodgerBlue' }}>{doctor}</h1>
        </span>
        <br/>

        <form>
          <h3>Name</h3>
          <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} style = {{width: "500px"}}></input>
          <br /><br />
        
          <h3>Review</h3>
          
          <textarea
                id="input-content"
                width="300%"
                style = {{width: "500px"}}
                value={review}
                placeholder="Content"
                onChange={(e) => setReview(e.target.value)}
              />
          <br/><br/>
          
          <h5>Overall Rating</h5>
          {[1, 2, 3, 4, 5].map((number) => {
            return (
              <>
              <input type="radio" name="overall" value={number} onChange={(e) => setOverall(e.target.value)}></input>{' '}
              <label>{number}</label>{' '}
              </>
            )
          })}

          <br />
          
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
          
          <br/>
          <br />
          <Button variant = "primary" onClick={handleSubmit}>
            Leave Review
          </Button>
          <br />
        </form>
        <br/>
      </Container>
      <Footer currentRegion={region}/>
      </div>
      </>
      
    );
  }

  return (
    // Return different webpage, depending on the validity of the ID provided
    <>
    <TopNavBar currentRegion={region}/>
    <Container>
      <div align="center">
      <h1>Error</h1>
      <p style={{ fontSize: "24px" }}>The review link you are accessing has either been filled out or expired<br/>
      No further action is required</p>
      <ExclamationTriangle size={100} color="darkkhaki"/>
      </div>
    </Container>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Footer currentRegion={region}/>
    </>
  );
};

export default Review;
