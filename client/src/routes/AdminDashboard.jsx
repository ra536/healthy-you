import React, { useEffect, useState, useContext } from "react";
import UserAPI from "../apis/UserAPI";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import SendReviewLinks from "../components/SendReviewLinks";
import DisplayAllReviews from "../components/DisplayAllReviews";
import { AdminContextProvider } from "../context/AdminContext";
import ManageFeatured from "../components/ManageFeatured";
require("dotenv").config();
const nodemailer = require("nodemailer");

const AdminDashboard = (props) => {
  let { adminID } = useParams();
  const [id, setId] = useState(null);

  // useEffect(() => {
  //   // Define a function fetchData that calls APIs which is then called in useEffect
  //   const fetchData = async () => {
  //     try {
  //       const response = await UserAPI.post(
  //         "/findOne",
  //         {
  //           user_id: adminID,
  //         },
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       console.log(response.data.data);
  //       setId(response.data.data.user_id);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, [adminID]);

  return (
    <>
      <AdminContextProvider>
        <TopNavBar />
        <Container>
          <h1>Admin Dashboard</h1>
          <SendReviewLinks />
          <DisplayAllReviews />
          <ManageFeatured />
        </Container>
      </AdminContextProvider>
    </>
  );
};

export default AdminDashboard;
