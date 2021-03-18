import React, { useEffect, useContext, useState } from 'react';
import SearchAPI from '../apis/SearchAPI'
import { useHistory } from 'react-router-dom';

const Search = () => {
    const [practice, setPractice] = useState("");
    const [location, setLocation] = useState("");
    const [doctor_name, setDoctor] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [rating, setRating] = useState("");

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // const response = await SearchAPI.post("/search", {
            //     practice: practice,
            //     doctor_name: doctor_name,
            //     location: location,
            //     rating: rating,
            //     specialty: specialty
            // })
            // setDoctors(response.data.data)
            // console.log(response.data.data)
            history.push({
                pathname: '/results/',
                search: 'practice=' + practice +"&doctor="+doctor_name+"&specialty="+specialty+"&location="+location+"&rating="+rating
            });
            window.location.reload();
        }
        catch (err) {
            console.log(err)
        }
    }

    return(
        <div>
            <h1>Search</h1>
            <form>
                <input 
                    id="search-practice" 
                    value={practice} 
                    placeholder="Practice" 
                    onChange={e => setPractice(e.target.value)} 
                />
                <input 
                    id="search-specialty" 
                    value={specialty} 
                    placeholder="Specialty" 
                    onChange={e => setSpecialty(e.target.value)} 
                />
                <input 
                    id="search-doctor" 
                    value={doctor_name} 
                    placeholder="Doctor" 
                    onChange={e => setDoctor(e.target.value)} 
                />
                <input 
                    id="search-rating" 
                    value={rating} 
                    placeholder="Rating" 
                    onChange={e => setRating(e.target.value)} 
                />
                <input 
                    id="search-location" 
                    value={location} 
                    placeholder="Location" 
                    onChange={e => setLocation(e.target.value)} 
                />
                <button type="submit" onClick={handleSubmit}>
                    Search
                </button>
            </form>
            <br/>
            {/* {doctors.map((doctors, index) => {
                return (
                    <ul key={index} type="none">
                        <img src={doctors.doctor.profile_picture} width="100" height="100" />
                        <li>{"Name: " + doctors.doctor.doctor_name}</li>
                        <li>{"Specialty: " + doctors.doctor.specialty}</li>
                        <li>{"Rating: " + doctors.doctor.rating}</li>
                        <li>{"Bio: " + doctors.doctor.bio}</li>
                        <li>{"Practice: " + doctors.name}</li>
                        <li>{"Address: " + doctors.location}</li>
                        <br/>
                    </ul>
                )
            })} */}
        </div>
    )
};

export default Search;