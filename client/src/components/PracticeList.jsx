import React, { useEffect, useContext } from "react";
import PracticeAPI from "../apis/PracticeAPI";
import { AppContext } from "../context/AppContext";
import { Table } from "react-bootstrap";

const PracticeList = (props) => {
  const { practices, setPractices } = useContext(AppContext);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await PracticeAPI.post(
          "/findAll",
          {
            doctor_id: props.doctorID,
          },
          {
            withCredentials: true,
          }
        );
        console.log(response.data.data);
        setPractices(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [props.doctorID, setPractices]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Practice Name</th>
            <th>Website</th>
            <th>Social Media</th>
            <th>Location</th>
            <th>Phone Number</th>
            <th>Fax</th>
          </tr>
        </thead>
        <tbody>
          {practices.map((practices, index) => {
            return (
              <tr key={index}>
                <td>{practices.name}</td>
                <td>{practices.website}</td>
                <td>{practices.social_media}</td>
                <td>{practices.location}</td>
                <td>{practices.phone}</td>
                <td>{practices.fax}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default PracticeList;
