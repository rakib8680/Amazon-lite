import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase.cofig';



export const UserContext = createContext(null);

const auth = getAuth(app)





const AuthProvider = ({ children }) => {

    // user 
    const [user, setUser] = useState(null)



    // create user with gmail pass 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


    // sign in user 
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // information through context api 
    const authInfo = {
        user,
        createUser,
        logIn
    }


    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;