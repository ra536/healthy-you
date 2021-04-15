import React, {useState, useEffect} from "react";
import DoctorAPI from "../apis/DoctorAPI";
import ReviewAPI from "../apis/ReviewAPI";
import "bootstrap/dist/css/bootstrap.css";

const SendReviewLinks = (props) => {

const [allDoctors, setAllDoctors] = useState([""]);
  const [doctor, setDoctor] = useState("");
  const [emailInput, setEmailInput] = useState("");

    const handleChange = (e) => {
        setDoctor(e.target.value);
        console.log(e.target.value);
        e.preventDefault();
    };

    const handleSubmit = async (e) => {
        console.log(e);
        console.log(doctor);
        console.log(emailInput);
        var arr = emailInput.split(/,\s+/);
        console.log(arr);
        
        // for each email, create a new entry in the database
        arr.map(async (email) => {
            var revID = "";
            try {
                const response = await ReviewAPI.post("/create", {
                    doctor_id: doctor
                });
                revID = response.data.review_id;
                console.log(revID);
            } catch (err) {
                console.log(err);
            }
            console.log("Sending ", revID);

            // try {
            //     const response = await ReviewAPI.post("/sendInvite", {
            //         review_id: revID,
            //         email: email
            //     });
                
            //     console.log("Success");
            // } catch (err) {
            //     //
            // }
            console.log("localhost:3000/leaveReview/" + revID);
        })
        
        // set expiration date (within review model)

        e.preventDefault();
    }

    useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {


      try {
        const response = await DoctorAPI.post("/findAll", {});
        console.log(response.data.data);
        setAllDoctors(response.data.data);
        console.log(response.data.data[0].doctor_name);
      } catch (err) {
        console.log(err);
      }
    };
    console.log("use effect happened!");
    fetchData();
  }, []);

  return (
    <>
    <form onSubmit={handleSubmit}>
        <span>Select a doctor:</span><br />
        <select name="Doctor Pick" onChange={handleChange}>
            <option value="" selected="selected">
              {" "}
            </option>
            {allDoctors.map((doctor) => {
                return(
                <>
                <option key={doctor.doctor_name} value={doctor.doctor_id}>{doctor.doctor_name}</option>
                </>)
            })}
        </select>
        <br />
        <br />
        <span>Input emails of patients (comma-separated):</span><br />
        <textarea onChange={(e) => setEmailInput(e.target.value)}>

        </textarea>
        <br />
        <input type="submit" value="Send Review Links"/>
        </form> 
    </>
  );
};

export default SendReviewLinks;