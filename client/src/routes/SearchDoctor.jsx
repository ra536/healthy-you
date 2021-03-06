import React, { useEffect, useContext, useState } from 'react';
import SearchAPI from '../apis/SearchAPI'
import { TestContext } from '../context/TestContext';


const Search = () => {
    const [specialty, setSpecialty] = useState("");
    const [location, setLocation] = useState("");
    const [doctor, setDoctor] = useState("");
    const [rating, setRating] = useState("");

    const { tests, setTests } = useContext(TestContext);


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await SearchAPI.post("/search", {
                specialty: specialty,
                address: location,
                doctor_name: doctor,
                rating: rating
            })
            setTests(response.data.data)
            console.log(response.data.data)
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
                    id="search-specialty" 
                    value={specialty} 
                    placeholder="Specialty" 
                    onChange={e => setSpecialty(e.target.value)} 
                />
                <input 
                    id="search-location" 
                    value={location} 
                    placeholder="Location" 
                    onChange={e => setLocation(e.target.value)} 
                />
                <input 
                    id="search-doctor" 
                    value={doctor} 
                    placeholder="Doctor name" 
                    onChange={e => setDoctor(e.target.value)} 
                />
                <input 
                    id="search-rating" 
                    value={rating} 
                    placeholder="Rating" 
                    onChange={e => setRating(e.target.value)} 
                />
                <button type="submit" onClick={handleSubmit}>
                    Search
                </button>
            </form>
                <div>
                    {tests && tests.map((tests, index) => {
                        return (
                            <ol key={index}>
                                <li>{ tests.doctor_name }</li>
                                <li>{ tests.rating }</li>
                            </ol>
                        )
                    })}
                </div>
        </div>
    )
};

export default Search;