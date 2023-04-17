import React, { createContext } from 'react';


export  const UserContext = createContext(null);



const AuthProvider = ({ children }) => {

    const authInfo = {

    }


    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;