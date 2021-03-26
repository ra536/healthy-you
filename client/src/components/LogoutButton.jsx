import React, { useContext, useState } from "react";
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';


export function Logout() {
    const { onlineStatus, setUserID, isRoleDoctor , isRoleUser } = useContext(LoginContext)


function handleSubmit(event) {
    onlineStatus(true);
    isRoleDoctor(false);
    isRoleUser(false);
    setUserID("");
}

    return (
        <form onSubmit={handleSubmit}>
            <button>Logout</button>
        </form>
    );
}