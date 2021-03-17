import React, { useEffect, useState, useContext } from 'react'
import PracticeAPI from '../apis/PracticeAPI'
import { AppContext } from '../context/AppContext';

const PracticeList = (props) => {
    const { practices, setPractices } = useContext(AppContext);
    //const [practices, setPractices] = useState([]);

    useEffect( () => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (PracticeAPI.post("/findAll", {
                    doctorID: props.doctorID
                }));
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


