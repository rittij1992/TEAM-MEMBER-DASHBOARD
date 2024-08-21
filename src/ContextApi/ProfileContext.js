import { createContext, useEffect, useState } from "react";


export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profileDetails, setProfileDetails] = useState({})

    return (
        <ProfileContext.Provider value={{ profileDetails, setProfileDetails }}>
            {children}
        </ProfileContext.Provider>
    )
}