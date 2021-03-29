import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = props => {
    const [role, setRole] = useState("");
    const [loggedIn, setLoggedIn] = useState(null)
    // const [isDoctor, setIsDoctor] = useState(false);
    // const [isUser, setIsUser] = useState(false);
    // const [userID, setUserID] = useState("");

    // const onlineStatus = (online) => {
    //     setLoggedIn(online)
    // }


    // const isRoleDoctor = (doctorUser) =>{
    //     // console.log("what is User?", doctorUser)
    //     setIsDoctor(doctorUser)
    //     // console.log("what is it now?", doctorUser)
    // }

    // const isRoleUser = (regularUser) =>{
    //     // console.log("what is User?", regularUser)
    //     setIsUser(regularUser)
    //     // console.log("what is it now?", regularUser)
    // }

    return (
        <AuthContext.Provider value={
            {
                role, setRole,
                loggedIn, setLoggedIn
            }}>
            { props.children }
        </AuthContext.Provider>
    )
}