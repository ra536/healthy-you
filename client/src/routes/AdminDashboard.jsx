import React, { useEffect, useState } from "react";
import UserAPI from "../apis/DoctorAPI";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";

const AdminDashboard = (props) => {
  let { adminID } = useParams();
  const [id, setId] = useState(null);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await UserAPI.post(
          "/findOne",
          {
            user_id: adminID,
          },
          {
            withCredentials: true,
          }
        );
        console.log(response);
        setId(response.data.data.user_id);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [adminID]);

  return (
    <>
      <TopNavBar />
      <Container>
        <h1>Admin Dashboard</h1>
        <br />
        <h1>Admin ID:</h1>
        {id}
        <br />
      </Container>
    </>
  );
};

export default AdminDashboard;
