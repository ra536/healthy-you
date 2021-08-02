import React, { useContext, useState } from "react";
import PracticeAPI from "../apis/PracticeAPI";
import { AppContext } from "../context/AppContext";

//Lets user input a test object into backend db
const InputNewPractice = (props) => {
  const { addPractice } = useContext(AppContext);

  const [practiceName, setPractice] = useState("");
  const [website, setWebsite] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [fax, setFax] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await PracticeAPI.post(
        "/create",
        {
          practiceName: practiceName,
          website: website,
          socialMedia: socialMedia,
          location: location,
          phone: phone,
          fax: fax,
          doctorID: props.doctorID,
        },
        {
          withCredentials: true,
        }
      );
      addPractice(response.data.data);
    } catch (err) {
      console.log(err);
    }
    setPractice("");
    setWebsite("");
    setSocialMedia("");
    setPractice("");
    setLocation("");
    setPhone("");
    setFax("");
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
        id="input-website"
        value={website}
        placeholder="Website"
        onChange={(e) => setWebsite(e.target.value)}
      />
      <input
        id="input-social-media"
        value={socialMedia}
        placeholder="Social Media"
        onChange={(e) => setSocialMedia(e.target.value)}
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
      <input
        id="input-fax"
        value={fax}
        placeholder="Fax"
        onChange={(e) => setFax(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Insert New Practice
      </button>
    </form>
  );
};

export default InputNewPractice;
