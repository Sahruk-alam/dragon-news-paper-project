import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../component/firebase/firebase.config';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext =createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    
    console.log( user,loading);
const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
const signoutUser=()=>{
    return signOut(auth)
}
const signInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
    useEffect(()=>{
 const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
    setLoading(false);
 })
    return ()=> {
        unsubscribe();
    }
    },[])
    const authData={
        user,
        setUser,
        createUser,
        signoutUser,
        signInUser,
        loading,
        setLoading
    }
    return <AuthContext value={authData}>
        {children}
         </AuthContext>
};

export default AuthProvider;