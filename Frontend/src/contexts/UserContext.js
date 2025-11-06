import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined)

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        id: 1,          // temporary hard-coded for testing post submission funcitionality
        name: "Aidan"
    })
    return (
        <UserContext.Provider value={{user, setUser}}> 
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);