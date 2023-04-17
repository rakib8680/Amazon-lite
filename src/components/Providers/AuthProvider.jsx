import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
    };


    // sign Out user 
    const logOut = () => {
        return signOut(auth)
    };


    // hold the current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe
        }
    }, [])


    // information through context api 
    const authInfo = {
        setUser,
        user,
        createUser,
        logIn,
        logOut
    }


    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;