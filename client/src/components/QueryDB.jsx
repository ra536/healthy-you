import React, { useEffect, useContext, useState } from "react";
import DashboardAPI from "../apis/DashboardAPI";
import { AppContext } from "../context/AppContext";

const QueryDB = () => {
  const [practice, setPractice] = useState("");
  const [location, setLocation] = useState("");
  const [doctor, setDoctor] = useState("");

  const { tests, setTests } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await DashboardAPI.post("/query", {
        practice: practice,
        address: location,
        doctor_name: doctor,
      });
      setTests(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Search</h1>
      <form>
        <input
          id="search-practice"
          value={practice}
          placeholder="Practice"
          onChange={(e) => setPractice(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      <div>
        {tests &&
          tests.map((tests, index) => {
            return (
              <ol key={index}>
                <li>{tests.name}</li>
                {tests.doctors.map((doctors, index) => {
                  return (
                    <ol key={index}>
                      <li>{doctors.doctor_name}</li>
                    </ol>
                  );
                })}
              </ol>
            );
          })}
      </div>
    </div>
  );
};

export default QueryDB;
