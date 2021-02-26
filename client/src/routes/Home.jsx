import React, { useEffect, useContext } from 'react';
import TestAPI from '../apis/TestAPI';
import { TestContext } from '../context/TestContext';

const Home = () => {
    // Store the data retrieved from backend API into context
    const { test, setTest } = useContext(TestContext);

    // Call our backend API to retrieve list of test objects from db
    useEffect( () => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (TestAPI.get("/"));
                setTest(response.data.data.test);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <div>
                {test.map(test => {
                    return (
                        <tr>
                            <td>{ test.test_id }</td>
                            <td>{ test.content }</td>
                        </tr>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;