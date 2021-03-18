import React, { useEffect, useState, useContext } from 'react'
import SpecialtyAPI from '../apis/SpecialtyAPI'
import { AppContext } from '../context/AppContext';

const PracticeList = (props) => {
    const { practices, setPractices } = useContext(AppContext);

    useEffect( () => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (SpecialtyAPI.post("/findAll"));
                console.log(response.data.data)
                setPractices(response.data.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {practices.map(practices => {
                        return (
                            <li key={practices.test_id}>
                                { practices.name }
                                { practices.website }
                                { practices.social_media }
                                { practices.location }
                                { practices.phone }
                                { practices.fax }
                            </li>
                        )
                    })
            }
        </div>
    )
}

export default PracticeList;


