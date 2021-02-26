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
                setTests(response.data.data.test);
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