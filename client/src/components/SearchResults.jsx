import React, { useEffect, useContext } from 'react';
import SearchAPI from '../apis/SearchAPI'
import Search from '../routes/Search';
import { AppContext } from '../context/AppContext';
import queryString from 'query-string';

const SearchResults = (props) => {
    const { results, setResults } = useContext(AppContext);

    useEffect( () => {
        const fetchData = async () => {
            try {
                var whereClause = {};
                const search = props.location.search;
                const params = queryString.parse(search)
                console.log(params);

                if(params.practice == null){ whereClause['practice'] = ""; }
                else{ whereClause['practice'] = params.practice; }
                
                if(params.doctor == null){ whereClause['doctor_name'] = ""; }
                else{ whereClause['doctor_name'] = params.doctor; }
                
                if(params.location == null){ whereClause['location'] = ""; }
                else{ whereClause['location'] = params.location; }
                
                if(params.rating == null){ whereClause['rating'] = ""; }
                else{ whereClause['rating'] = params.rating; }
                
                if(params.specialty == null){ whereClause['specialty'] = ""; }
                else{ whereClause['specialty'] = params.specialty; }
                
                console.log(whereClause);
                
                const response = await SearchAPI.post("/search", whereClause
                // {
                //     practice: params.practice,
                //     doctor_name: params.doctor,
                //     location: params.location,
                //     rating: params.rating,
                //     specialty: params.specialty
                // }
                )
                setResults(response.data.data)
                console.log(response.data.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [props.location.search, setResults]);

    return(
        <div>
            <Search/>
            <h1>Results</h1>
                <div>
                    {results.map((results, index) => {
                        return (
                            <ul key={index} type="none">
                                <img src={results.doctor.profile_picture} alt="" width="100" height="100" />
                                <li>{"Name: " + results.doctor.doctor_name}</li>
                                <li>{"Specialty: " + results.doctor.specialty}</li>
                                <li>{"Rating: " + results.doctor.rating}</li>
                                <li>{"Bio: " + results.doctor.bio}</li>
                                <li>{"Practice: " + results.name}</li>
                                <li>{"Address: " + results.location}</li>
                                <br/>
                            </ul>
                        )
                    })}
                </div>
        </div>
    )
};

export default SearchResults;