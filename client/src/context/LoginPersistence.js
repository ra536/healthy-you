import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = props => {
    const[loggedIn, setLoggedIn] = useState(false)
    const [isDoctor, setIsDoctor] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [userID, setUserID] = useState("");

    const onlineStatus = (online) => {
        setLoggedIn(online)
    }


    const isRoleDoctor = (doctorUser) =>{
        // console.log("what is User?", doctorUser)
        setIsDoctor(doctorUser)
        // console.log("what is it now?", doctorUser)
    }

    const isRoleUser = (regularUser) =>{
        // console.log("what is User?", regularUser)
        setIsUser(regularUser)
        // console.log("what is it now?", regularUser)
    }

    return (
        <LoginContext.Provider value={
            {
                loggedIn, setLoggedIn, onlineStatus,
                isDoctor, setIsDoctor, isRoleDoctor,
                isUser, isRoleUser, isRoleUser,
                userID, setUserID,
            }}>
            { props.children }
        </LoginContext.Provider>
    )

}