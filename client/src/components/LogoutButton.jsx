import React, { useContext, useState } from "react";
import { LoginContext } from '../context/LoginPersistence';


export function Logout() {
    const { onlineStatus, isRoleDoctor , isRoleUser } = useContext(LoginContext)


function handleSubmit(event) {
    onlineStatus(true);
    isRoleDoctor(false);
    isRoleUser(false);
}

    return (
        <form onSubmit={handleSubmit}>
            <button>Logout</button>
        </form>
    );
}