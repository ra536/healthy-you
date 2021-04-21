import React, { useEffect, useState } from "react";
import UserAPI from "../apis/UserAPI";
import AppointmentAPI from "../apis/AppointmentAPI";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";

const UserDashboard = (props) => {
  let { userID } = useParams();
  const [id, setId] = useState(null);
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await UserAPI.post(
          "/findOne",
          {
            user_id: userID,
          },
          {
            withCredentials: true,
          }
        );
        const appointments = await AppointmentAPI.post("/userAppts", {
          user_id: userID,
        });
        console.log(response.data.data);
        console.log("appointments", appointments.data.data);
        setId(response.data.data.user_id);
        setAppointmentList(appointments.data.data.appointmentResults)
      } catch (err) {
        console.log(err);
      }
    };
    console.log("use effect happened!");
    fetchData();
  }, [userID]);

  return (
    <>
      <TopNavBar />
      <Container>
        <h1>User Dashboard</h1>
        <br />
        <h1>User ID:</h1>
        {id}
        <br />
      </Container>
    </>
  );
};

export default UserDashboard;
