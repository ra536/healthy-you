import React, { useContext, useState } from "react";
import DashboardAPI from "../apis/DashboardAPI";
import { TestContext } from "../context/TestContext";

// Form to input a new location for a practice --> location merged with practice so this is not being used rn

const InputNewLoc = () => {
  const [practiceName, setPractice] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await DashboardAPI.post("/add_location", {
        practiceName: practiceName,
        location: location,
        phone: phone,
      });
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
    setPractice("");
    setLocation("");
    setPhone("");
  };

  return (
    <form>
      <input
        id="input-practice"
        value={practiceName}
        placeholder="Practice"
        onChange={(e) => setPractice(e.target.value)}
      />
      <input
        id="input-location"
        value={location}
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        id="input-phone"
        value={phone}
        placeholder="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Insert New Location
      </button>
    </form>
  );
};

export default InputNewLoc;
