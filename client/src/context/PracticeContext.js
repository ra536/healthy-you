import React, { useState, createContext } from 'react';

export const PracticeContext = createContext();

export const PracticeContextProvider = props => {
    const [practices, setPractices] = useState([])

    //updates state with new array when adding a test object
    //this is to have the client render a new test object automatically without having to refresh page
    const addPractice = (practice) => {
        setPractices([...practices, practice]);
    }

    return (
        <PracticeContext.Provider value={{ practices, setPractices, addPractice }}>
            { props.children }
        </PracticeContext.Provider>
    )
}

// When fetching data from the backend it is a good idea to store the data in a context API rather then local state
// A context API allows for data to be passed down to every component automatically rather than having components fetch data through props or lifting state