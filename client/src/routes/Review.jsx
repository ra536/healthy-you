import React, { useEffect, useContext } from 'react';
// import TestAPI from '../apis/TestAPI';
// import InputTest from '../components/InputTest';
// import { TestContext } from '../context/TestContext';

const Review = (props) => {
    // Store the data retrieved from backend API into context
    // const { tests, setTests } = useContext(TestContext);

    // Call our backend API to retrieve list of test objects from db
    const url = props.url.substr(props.url.indexOf("leaveReview/") + 12, 5);
    // Constant Review ID Value

    return (
        // Return different webpage, depending on the validity of the ID provided
        <div>
            <h1>Review</h1>
            <p>{url}</p>
        </div>
    )
}

export default Review;