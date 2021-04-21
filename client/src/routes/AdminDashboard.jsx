import React, { useEffect, useState, useContext } from "react";
import UserAPI from "../apis/UserAPI";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import SendReviewLinks from "../components/SendReviewLinks";
import DisplayAllReviews from "../components/DisplayAllReviews";
import { AdminContextProvider } from "../context/AdminContext";
import FeaturedAPI from "../apis/FeaturedAPI";
require("dotenv").config();
const nodemailer = require("nodemailer");

const AdminDashboard = (props) => {
  let { adminID } = useParams();
  const [id, setId] = useState(null);
  const [results, setResults] = useState([]);

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
        console.log(response.data.data);
        setId(response.data.data.user_id);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await FeaturedAPI.post(
          "/findAll",
          {

          }
        );
        setResults(response.data.data);
        console.log("Featured thing");
        console.log(response.data.data);
      } catch (err){
        console.log(err);
      }
    };
    console.log("use effect happened!");
    fetchData();
  }, [adminID]);

  return (
    <>
      <AdminContextProvider>
        <TopNavBar />
        <Container>
          <h1>Admin Dashboard</h1>
          <SendReviewLinks />
          <DisplayAllReviews />
          {results.map((obj) => {
            return (
              <>
              <p>Here</p>
              <p>{obj.featured_id}</p>
              </>
            );
          })}
        </Container>
      </AdminContextProvider>
    </>
  );
};

export default AdminDashboard;
