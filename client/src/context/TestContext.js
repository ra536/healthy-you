import React, { useState, createContext } from 'react';

export const TestContext = createContext();

export const TestContextProvider = props => {
    const [tests, setTests] = useState([])

    //updates state with new array when adding a test object
    //this is to have the client render a new test object automatically without having to refresh page
    const addTest = (test) => {
        setTests([...tests, test]);
    }

    return (
        <TestContext.Provider value={{ tests, setTests, addTest }}>
            { props.children }
        </TestContext.Provider>
    )
}

// When fetching data from the backend it is a good idea to store the data in a context API rather then local state
// A context API allows for data to be passed down to every component automatically rather than having components fetch data through props or lifting state