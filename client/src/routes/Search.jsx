import React, { useEffect, useContext, useState } from 'react';
import SearchAPI from '../apis/SearchAPI'
import { useHistory } from 'react-router-dom';
import SpecialtyAPI from '../apis/SpecialtyAPI'

const Search = () => {
    const [practice, setPractice] = useState("");
    const [location, setLocation] = useState("");
    const [doctor_name, setDoctor] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [rating, setRating] = useState("");
    const [ allSpecialties, setAllSpecialties ] = useState([""]);

    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await (SpecialtyAPI.get("/findAll"));
                console.log(response)
                setAllSpecialties(response.data.data)
                setSpecialty(response.data.data[0].specialty)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    const handleChange = (e) => {
        setSpecialty(e.target.value);
        console.log(e.target.value);
        e.preventDefault();
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
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
                <select value={specialty} onChange={handleChange}>
                    <option value="" selected="selected"> </option>
                    {allSpecialties.map(specialties => {
                        return (
                            <option key={specialties.specialty} value={specialties.specialty}>
                                { specialties.specialty}
                            </option>
                        )
                    })
                    }
                </select>
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
        </div>
    )
};

export default Search;