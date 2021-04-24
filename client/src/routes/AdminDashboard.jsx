import React, { useEffect, useState, useContext } from "react";
import UserAPI from "../apis/UserAPI";
import { useParams } from "react-router-dom";
import { Container, Table, Button, Tabs, Tab } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import SendReviewLinks from "../components/SendReviewLinks";
import DisplayAllReviews from "../components/DisplayAllReviews";
import AdminUsersTab from "../components/AdminUsersTab";
import AdminManageSpecialty from "../components/AdminManageSpecialty";
import AdminInsuranceTab from "../components/AdminInsuranceTab";
import AdminSpecialtyTab from "../components/AdminSpecialtyTab";
import { AdminContextProvider } from "../context/AdminContext";
import ManageFeatured from "../components/ManageFeatured";
import ManageAds from "../components/ManageAds";
require("dotenv").config();
const nodemailer = require("nodemailer");

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
        console.log(response.data.data);
        setId(response.data.data.user_id);
      } catch (err) {
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
          <div >
          
            <Tabs defaultActiveKey="main" id="uncontrolled-tab" >
              <Tab eventKey="users" title="Users" >
                <AdminUsersTab/>
              </Tab>
              <Tab eventKey="reviews" title="Reviews">
                <SendReviewLinks />
                <DisplayAllReviews />
              </Tab>
              <Tab eventKey="featured" title="Featured">
                <ManageFeatured />
              </Tab>
              <Tab eventKey="ads" title="Ads">
                <ManageAds />
              </Tab>
              <Tab eventKey="specialties" title="Specialties">
                <AdminSpecialtyTab />
              </Tab>
              <Tab eventKey="insurances" title="Insurances" >
                <AdminInsuranceTab />
              </Tab>
              <Tab eventKey="appointments" title="Appointments" >
                
              </Tab>
            </Tabs>
          </div>
        </Container>
      </AdminContextProvider>
    </>
  );
};

export default AdminDashboard;
