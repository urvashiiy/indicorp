import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const currentuser = JSON.parse(sessionStorage.getItem('user'));
    const [loggedIn, setLoggedIn] = useState(currentuser !== null);
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('user');
        setLoggedIn(false);
        navigate('/user/home');
    }
    
    return (
        <UserContext.Provider value={{
            loggedIn, setLoggedIn, logout
        }}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => useContext(UserContext);

export default useUserContext