import React, { useEffect, useContext, useState } from 'react';
import DashboardAPI from '../apis/DashboardAPI'
import { TestContext } from '../context/TestContext';
// import InputNewDoc from '../components/InputNewDoc';
// import InputNewLoc from '../components/InputNewLoc';
import InputNewPractice from '../components/InputNewPractice';
import QueryDB from '../components/QueryDB';

const DoctorDashboard = () => {
    
    return(
        <div>
            <h1>Dashboard</h1>
            <br/>
            <h1>Profile Picture</h1>
            <br/>
            <h1>Phone Number</h1>
            <br/>
            <h1>Biography</h1>
            <br/>
            <h1>Specialties</h1>
            <br/>
            <h1>Practices</h1>
            <InputNewPractice/>
            <br/>
            <QueryDB/>
        </div>
    )
};

export default DoctorDashboard;