import React, { useState, createContext } from 'react';

export const TestContext = createContext();

export const TestContextProvider = props => {
    const [test, setTest] = useState([])
    return (
        <TestContext.Provider value={{ test, setTest }}>
            { props.children }
        </TestContext.Provider>
    )
}

// When fetching data from the backend it is a good idea to store the data in a context API rather then local state
// A context API allows for data to be passed down to every component automatically rather than having components fetch data through props or lifting state