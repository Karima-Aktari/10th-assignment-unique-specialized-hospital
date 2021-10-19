import initializeAuthentication from "../Pages/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"; import { useEffect, useState } from "react";
;


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            });
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

    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log("Email Changed");
    }
    const handlePasswordChange = e => {
        if (e.target.value.length < 6) {
            console.error('You have to use password more than sixth character');
        }
        else {
            setPassword(e.target.value);
        }

    }

    const handleRegistration = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const { email, displayName } = result.user;
                const userInfo = {
                    name: displayName,
                    email: email
                }
                setUser(userInfo);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
    }
}
export default useFirebase;