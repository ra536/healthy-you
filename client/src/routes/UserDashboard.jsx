import React, { useEffect, useState } from "react";
import UserAPI from "../apis/UserAPI";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import UserApptTable from '../components/UserApptTable';
import Footer from "../components/Footer";

const UserDashboard = (props) => {
  let { userID, region } = useParams();
  const [id, setId] = useState(null);

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
        console.log(response.data.data);
        setId(response.data.data.user_id);
      } catch (err) {
        console.log(err);
      }
    };
    console.log("use effect happened!");
    fetchData();
  }, [userID]);

  return (
    <>
      <TopNavBar currentRegion={region}/>
      <Container>
        <h1>User Dashboard</h1>
        <br />
        <UserApptTable user_id={id}/>
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
      <Footer currentRegion={region}/>
    </>
  );
};

export default UserDashboard;
