import React, { useEffect, useState, useContext } from "react";
import DoctorAPI from "../apis/DoctorAPI";
import { AppContext } from "../context/AppContext";

const RemoveSpecialty = (props) => {
  const { specialties, setSpecialties, removeSpecialty } = useContext(
    AppContext
  );

  // Remove in real-time as well, using AppContext !! (TODO)
  const [specialty, setSpecialty] = useState("");

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await DoctorAPI.post(
          "/findOne",
          {
            doctor_id: props.doctor_id,
          },
          {
            withCredentials: true,
          }
        );
        //console.log(response.data.data[0].specialty[0])
        setSpecialties(response.data.data[0].specialty);
        setSpecialty(response.data.data[0].specialty[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [props.doctor_id, setSpecialties]);

  const handleChange = (e) => {
    setSpecialty(e.target.value);
    console.log(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await DoctorAPI.post(
        "/removeSpecialty",
        {
          specialty: specialty,
          doctor_id: props.doctorID,
        },
        {
          withCredentials: true,
        }
      );
      //addTest(response.data.data)
      console.log(response.data.status);
      removeSpecialty(response.data.data.specialty);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={specialty} onChange={handleChange}>
          {specialties.map((specialties) => {
            return (
              <option key={"remove " + specialties} value={specialties}>
                {specialties}
              </option>
            );
          })}
        </select>
        <input type="submit" value="Remove" />
      </form>
    </div>
  );
};

export default RemoveSpecialty;
