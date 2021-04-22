import React, { useState, useEffect, useContext } from "react";
import DoctorAPI from "../apis/DoctorAPI";
import ReviewAPI from "../apis/ReviewAPI";
import "bootstrap/dist/css/bootstrap.css";
import { AdminContext } from "../context/AdminContext";

const SendReviewLinks = (props) => {
  const [allDoctors, setAllDoctors] = useState([""]);
  const [doctor, setDoctor] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [reviewIDs, setReviewIDs] = useState([null]);
  const { addReview } = useContext(AdminContext);

  const handleChange = (e) => {
    setDoctor(e.target.value);
    // console.log(e.target.value);
    e.preventDefault();
  };

  // const handleSubmit = async (e) => {
  //   var arr = emailInput.split(/,\s+/);
  //   console.log("Sending emails to: " + arr);

  //   // for each email, create a new entry in the database
  //   arr.map(async (email) => {
  //     const theEmail = email;
  //     var revID = "";
  // try {
  //   const response = await ReviewAPI.post("/create", {
  //     doctor_id: doctor,
  //     email: theEmail,
  //   });
  //   // addReview(response);
  //   // revID = response.data.review_id;
  //   console.log("WTF is happening?");
  // } catch (err) {
  //   console.log(err);
  // }

  // try {
  //   const response = await ReviewAPI.post("/sendInvite", {
  //     review_id: revID,
  //     email: email,
  //   });
  //   console.log(response);
  //   console.log("Success");
  // } catch (err) {
  //   console.log(err);
  // }
  //     console.log("localhost:3000/leaveReview/" + revID);
  //   });

  //   // set expiration date (within review model)

  //   e.preventDefault();
  // };
  // jkk24@njit.edu, jeff1k345@gmail.com, jeff1k246@gmail.com
  const handleSubmit = async (e) => {
    e.preventDefault();
    var emails = emailInput.split(/,\s+/);
    try {
      const response = await ReviewAPI.post("/create", {
        doctor_id: doctor,
        emails: emails,
      });
      // console.log(response.data.ids);
      // setReviewIDs(response.data.ids);
      try {
        console.log(response.data.ids);
        const res = await ReviewAPI.post("/sendInvite", {
          ids: response.data.ids,
          emails: emails,
        });
        console.log(res.data.status);
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await DoctorAPI.post("/findAll", {});
        //console.log(response.data.data);
        setAllDoctors(response.data.data);
        //console.log(response.data.data[0].doctor_name);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span>Select a doctor:</span>
        <br />
        <select name="Doctor Pick" onChange={handleChange}>
          <option value="" selected="selected">
            {" "}
          </option>
          {allDoctors.map((doctor) => {
            return (
              <>
                <option key={doctor.doctor_name} value={doctor.doctor_id}>
                  {doctor.doctor_name}
                </option>
              </>
            );
          })}
        </select>
        <br />
        <br />
        <span>Input emails of patients (comma-separated):</span>
        <br />
        <textarea onChange={(e) => setEmailInput(e.target.value)}></textarea>
        <br />
        <input type="submit" value="Send Review Links" />
      </form>
    </>
  );
};

export default SendReviewLinks;
