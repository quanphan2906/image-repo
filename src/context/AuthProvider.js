import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { subscribeAuth } from "../api/auth"


const AuthContext = createContext(undefined);


export default function AuthProvider({ children }) {

    const [userDetails, setUserDetails] = useState();
    
    const navigate = useNavigate();

    useEffect(() => {

        if ( userDetails ) {
            navigate("/");
        } else {
            navigate("/login");
        }
        
    }, [userDetails]);

    useEffect(() => {
        const unsubscribe = subscribeAuth(setUserDetails);

        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={{ userDetails: userDetails }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }