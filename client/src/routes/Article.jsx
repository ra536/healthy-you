import React, { useEffect, useContext, useState } from 'react';
import ArticleAPI from '../apis/ArticleAPI'

const Article = (props) => {
    const [rating, setRating] = useState();
    const [name, setName] = useState();
    const [profilePicture, setProfilePicture] = useState();
    const [specialties, setSpecialties] = useState();
    const [doctorID, setDoctorID] = useState("");

    useEffect( () => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (ArticleAPI.get("/"));
                console.log(response.data.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);
    
    return(
        <div>
            <h1>Article</h1>
            <br/>
        </div>
    )
};

export default Article;