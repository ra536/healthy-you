import React, { useEffect, useContext } from 'react';
import TestAPI from '../apis/TestAPI';
import InputTest from '../components/InputTest';
import { TestContext } from '../context/TestContext';

const Home = () => {
    // Store the data retrieved from backend API into context
    const { tests, setTests } = useContext(TestContext);

    // Call our backend API to retrieve list of test objects from db
    useEffect( () => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (TestAPI.get("/"));
                console.log(response.data.data)
                setTests(response.data.data);
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
            <InputTest />
            <div>
                {tests && tests.map(tests => {
                    return (
                        <ol key={tests.test_id}>
                            <li>{ tests.test_id }</li>
                            <li>{ tests.content }</li>
                        </ol>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;