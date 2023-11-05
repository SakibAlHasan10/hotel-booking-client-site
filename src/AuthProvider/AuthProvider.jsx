import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../configs/firebase/firebase.config";
export const AuthContext= createContext()
const AuthProvider = ({children}) => {
    const [theme, setTheme]= useState(true)
    const [isLoading, setIsLoading]=useState(true)
    const [user, setUser]= useState(null)

// sign in with google
const googleProvider = new GoogleAuthProvider()
const signInWithGoogle =()=>{
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
}

// sign up with email
const signUpWithEmail=(email, password)=>{
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}


    const authInfo={
        theme,
        isLoading,
        user,
        setTheme,
        signInWithGoogle,
        signUpWithEmail,
        signInWIthEmail,
        logout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthContext.propTypes={
    children:PropTypes.node
}
export default AuthProvider;