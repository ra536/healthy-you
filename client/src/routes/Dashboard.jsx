import React, { useEffect, useContext, useState } from 'react';
import DashboardAPI from '../apis/DashboardAPI'
import { TestContext } from '../context/TestContext';
import InputNewDoc from '../components/InputNewDoc';
import InputNewLoc from '../components/InputNewLoc';
import InputNewPractice from '../components/InputNewPractice';
import QueryDB from '../components/QueryDB';

const Dashboard = () => {
    const { tests, setTests } = useContext(TestContext);

    useEffect( () => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (DashboardAPI.get("/"));
                console.log(response.data.data)
                setTests(response.data.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);    

    return(
        <div>
            <h1>Dashboard</h1>
            <InputNewPractice/>
            <InputNewDoc/>
            <InputNewLoc/>
            <br/>
            <QueryDB/>
        </div>
    )
};

export default Dashboard;