import { useEffect, useState } from "react";
import initFirebase from "../Pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";





initFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // Auth
    const auth = getAuth();


    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unsubscribe();
    }, [])

    // User register function
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }


    // login user
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }


    // logout user
    const logout = () => {
        signOut(auth)
            .then(() => {

            }).catch((error) => {
                setError(error);
            });
    }

    const test = 'siam'

    return ({
        user,
        setUser,
        registerUser,
        loginUser,
        logout,
        test

    })
}

export default useFirebase;