import initializeAuthentication from "../Pages/Firebase/firebase.init";
import {
    getAuth, signInWithPopup, GoogleAuthProvider,
    createUserWithEmailAndPassword, signOut, onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth"; import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
        // .then((result) => {
        //     console.log(result.user);
        //     setUser(result.user);
        // });
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return unsubscribe;
    }, []);

    //Email & Password Authentication//
    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('You have to use password more than sixth character');
            return;
        }
        else {
            registerNewUser(email, password);
            setError('');
        }
    }


    const processEmailLogin = (email, password) => {
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setIsLogin(user);
                setError('');
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('');
                console.log(email, password);
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    // const setUserName = () => {
    //     updateProfile (auth.currentUser, displayName)
    //       .then(result => {
    // const {name, email, p}
    //       })
    //   }

    return {
        user,
        signInUsingGoogle,
        logOut,
        error,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        processEmailLogin,
    }
}
export default useFirebase;