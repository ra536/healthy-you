import React, { useContext, useState } from 'react'
import DashboardAPI from '../apis/DashboardAPI'
import { TestContext } from '../context/TestContext';


// Insert new doctor for a practice
const InputNewDoc = () => {
    const [practiceName, setPractice] = useState("");
    const [doctor, setDoctor] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [rating, setRating] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [bio, setBio] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await DashboardAPI.post("/add_doctor", {
                practiceName: practiceName,
                doctor: doctor,
                specialty: specialty,
                rating: rating,
                profilePic: profilePic,
                bio: bio
            })
            console.log(response.data.data)
        }
        catch (err) {
            console.log(err)
        }
        setPractice("");
        setDoctor("");
        setSpecialty("");
        setRating("");
        setProfilePic("");
        setBio("");
    }

    return(
        <form>
            <input 
                id="input-practice" 
                value={practiceName} 
                placeholder="Practice" 
                onChange={e => setPractice(e.target.value)} 
            />
            <input 
                id="input-doctor" 
                value={doctor} 
                placeholder="Doctor" 
                onChange={e => setDoctor(e.target.value)} 
            />
            <input 
                id="input-specialty" 
                value={specialty} 
                placeholder="Specialty" 
                onChange={e => setSpecialty(e.target.value)} 
            />
            <input 
                id="input-rating" 
                value={rating} 
                placeholder="Rating" 
                onChange={e => setRating(e.target.value)} 
            />
            <input 
                id="input-profile-pic" 
                value={profilePic} 
                placeholder="Profile Picture" 
                onChange={e => setProfilePic(e.target.value)} 
            />
            <input 
                id="input-bio" 
                value={bio} 
                placeholder="Bio" 
                onChange={e => setBio(e.target.value)} 
            />
            <button type="submit" onClick={handleSubmit}>
                Insert New Doctor
            </button>
        </form>
    )
}

export default InputNewDoc;