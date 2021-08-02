import React, { useEffect, useContext, useState } from "react";
import DoctorAPI from "../apis/DoctorAPI";
import InputNewPractice from "../components/InputNewPractice";
import RemovePractice from "../components/RemovePractice";
import PracticeList from "../components/PracticeList";
import AddSpecialty from "../components/AddSpecialty";
import RemoveSpecialty from "../components/RemoveSpecialty";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { Container, Table, Tab, Tabs } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import CreateAppt from '../components/CreateAppt';
import ApptCalendar from '../components/ApptCalendar';
import ApptInfo from '../components/ApptInfo';
import NotPublishedAppts from '../components/NotPublishedAppts';
import AddCategory from "../components/AddCategory";
import RemoveCategory from "../components/RemoveCategory";
import Footer from "../components/Footer";

const DoctorDashboard = (props) => {
  let { doctorID, region } = useParams();
  const [rating, setRating] = useState();
  const [name, setName] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [newImage, setNewImage] = useState(""); // image link
  const [updatedName, setUpdatedName] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");
  const [updatedBio, setUpdatedBio] = useState("");
  const [appt, setAppt] = useState([]);
  const [apptID, setApptID] = useState();
  const [canceledAppt, setCanceledAppt] = useState();

  const { specialties, setSpecialties } = useContext(AppContext);
  const { categories, setCategories } = useContext(AppContext);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await DoctorAPI.post(
          "/findOne",
          {
            doctor_id: doctorID,
          },
          {
            withCredentials: true,
          }
        );
        console.log(response.data.data);
        if (response.data.data.specialty === null) {
          setSpecialties(["Please add a specialty!"]);
        } else {
          setSpecialties(response.data.data.specialty);
        }
        if (response.data.data.category === null) {
          setCategories(["Add category"])
        } else {
          setCategories(response.data.data.category)
        }
        setRating(response.data.data.rating);
        setName(response.data.data.doctor_name);
        setProfilePicture(response.data.data.profile_picture);
        setBio(response.data.data.bio);
        setPhone(response.data.data.phone);
        setUpdatedBio(response.data.data.bio);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [doctorID, setSpecialties, setCategories]);

  const previewImage = async (e) => {
    var reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        var image = new Image();
        image.height = 100;
        image.title = "Name";
        image.src = this.result;
        document.getElementById("input-file").appendChild(image);
        setNewImage(this.result);
        console.log(this.result);
        console.log(typeof this.result);
      },
      false
    );

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmitName = async (e) => {
    e.preventDefault();
    console.log(updatedName);
    try {
      const response = await DoctorAPI.post(
        "/updateName",
        {
          doctor_id: doctorID,
          name: updatedName,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data.data);
      setName(response.data.data.doctor_name);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitPhone = async (e) => {
    e.preventDefault();
    console.log(updatedPhone);
    try {
      const response = await DoctorAPI.post(
        "/updatePhone",
        {
          doctor_id: doctorID,
          phone: updatedPhone,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data.data);
      setPhone(response.data.data.phone);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitBio = async (e) => {
    e.preventDefault();
    console.log(updatedBio);
    try {
      const response = await DoctorAPI.post(
        "/updateBio",
        {
          doctor_id: doctorID,
          bio: updatedBio,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data.data);
      setBio(response.data.data.bio);
    } catch (err) {
      console.log(err);
    }
  };

  // Empty biography TextArea (does not delete/save changes)
  const handleClearBio = async (e) => {
    e.preventDefault();
    setUpdatedBio("");
  };

  const handleSubmitProfilePic = async (e) => {
    e.preventDefault();
    console.log(newImage);
    try {
      const response = await DoctorAPI.post(
        "/updateProfilePic",
        {
          doctor_id: doctorID,
          image: newImage,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data.data);
      setProfilePicture(response.data.data.image);
    } catch (err) {
      console.log(err);
    }
  };

  const getAppt = (data) => {
    console.log(data);
    setAppt(data);
  }

  const getApptID = (data) => {
    console.log(data);
    setApptID(data);
  }

  const getCanceledApptID = (data) => {
    console.log(data);
    setCanceledAppt(data);
  }

  return (
    <>
      <TopNavBar currentRegion={region}/>
      <Container>
        <h1>Doctor Dashboard</h1>
        <Tabs defaultActiveKey="main" id="uncontrolled-tab" >
          <Tab eventKey="main" title="Main" >
            <br />
            <a href={"/doctor-profile/" + doctorID}>View your profile</a>
            <h1>Name</h1>
            <hr />
            {name}
            <br />
            <form>
              <input
                id="input-new-name"
                value={updatedName}
                placeholder="Name"
                onChange={(e) => setUpdatedName(e.target.value)}
              />
              <button type="submit" onClick={handleSubmitName}>
                Save
              </button>
            </form>
            <br />
            <br />
            <h1>Profile Picture</h1>
            <hr />
            <img src={profilePicture} alt="" width="200px" id="preview"></img>
            <form>
              <input
                id="input-file"
                name="article-image"
                type="file"
                onChange={(e) => previewImage(e)}
              />
              <br />
              <button type="submit" onClick={handleSubmitProfilePic}>
                Save
              </button>
            </form>
            <img src={newImage} alt="" width="200px" id="preview"></img>
            <br />
            <br />
            <h1>Phone Number</h1>
            <hr />
            {phone}
            <br />
            <form>
              <input
                id="input-new-phone"
                value={updatedPhone}
                placeholder="Phone Number"
                onChange={(e) => setUpdatedPhone(e.target.value)}
              />
              <button type="submit" onClick={handleSubmitPhone}>
                Save
              </button>
            </form>

            <br />
            <br />
            <h1>Biography</h1>
            <hr />
            {bio}
            <br />
            <form>
              <textarea
                rows="10"
                cols="75"
                id="input-bio"
                value={updatedBio}
                //placeholder={bio}
                onChange={(e) => setUpdatedBio(e.target.value)}
              />
              <br />
              <button type="submit" onClick={handleSubmitBio}>
                Save Changes
              </button>
              <button type="submit" onClick={handleClearBio}>
                Clear
              </button>
            </form>

            <br />
            <h1>Rating</h1>
            <hr />
            {rating}
          </Tab>
          <Tab eventKey="specialty" title="Specialty">
            <br />
            <h1>Category</h1>
            <hr />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Category Name</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((categories, index) => {
                  return (
                    <tr key={index}>
                      <td>{categories}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <AddCategory doctorID={doctorID} />
            <RemoveCategory doctorID={doctorID} />
            <br />
            <h1>Specialties</h1>
            <hr />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Specialty Name</th>
                </tr>
              </thead>
              <tbody>
                {specialties.map((specialties, index) => {
                  return (
                    <tr key={index}>
                      <td>{specialties}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <AddSpecialty doctorID={doctorID} />
            <RemoveSpecialty doctorID={doctorID} />
            <br />
          </Tab>
          <Tab eventKey="practice" title="Practice">
            <br />
            <h1>Practices</h1>
            <hr />
            <PracticeList doctorID={doctorID} />
            <InputNewPractice doctorID={doctorID} />
            <RemovePractice doctorID={doctorID} />
            <br />
          </Tab>
          <Tab eventKey="reviews" title="Reviews">
            <br />
            <h1>Reviews</h1>
          </Tab>
          <Tab eventKey="appointments" title="Appointments" >
            <br />
            <h1>Appointments</h1>
            <hr />
            <CreateAppt doctorID={doctorID} newAppt={getAppt} />
            <NotPublishedAppts doctorID={doctorID} newAppt={getAppt} reload={appt} />
            <ApptCalendar doctorID={doctorID} newAppt={appt} appt_id={getApptID} canceledAppt={canceledAppt} route="Dashboard" />
            <br />
            <ApptInfo apptID={apptID} onCancel={getCanceledApptID} />
          </Tab>
        </Tabs>
      </Container>
      <br />
      <Footer currentRegion={region}/>
    </>
  );
};

export default DoctorDashboard;
