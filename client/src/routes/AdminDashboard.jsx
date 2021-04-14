import React, { useState, useEffect, useContext } from "react";
import DoctorAPI from "../apis/DoctorAPI";

const AdminDashboard = (props) => {
    const [allDoctors, setAllDoctors] = useState([""]);
    const [doctor, setDoctor] = useState("");
    const [emailInput, setEmailInput] = useState("");
    
    useEffect(() => {
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
        fetchData();
      }, [setAllDoctors]);

    const handleChange = (e) => {
        setDoctor(e.target.value);
        console.log(e.target.value);
        e.preventDefault();
    };

    const handleSubmit = (e) => {
        console.log(e);
        console.log(doctor);
        console.log(emailInput);
        var arr = emailInput.split(/,\s+/);
        console.log(arr);
        e.preventDefault();
    }
    

    return (
        <>
        <h1>Hello</h1>
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
}

export default AdminDashboard;