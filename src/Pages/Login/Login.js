import React from 'react';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const { handleNameChange, user,
        processEmailLogin,
        signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || './home';
    console.log(processEmailLogin);
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        processEmailLogin(email, password);
    }


    return (
        <div className="row py-4 mx-auto">
            <div className="col-md-6 col-12 pt-4">
                <h1>{user.email}</h1>
                <form onSubmit={handleSignIn}>
                    <h1 className="text-info p-4">Login Your Account</h1>
                    <input className="px-4 py-1 rounded-pill" onChange={handleNameChange} type="text" name="name" placeholder="Your Name" />
                    <br /><br />
                    <input className="px-4 py-1 rounded-pill" onChange={handleEmailChange} type="email" name="email" placeholder="Enter Your Email" required />
                    <br /><br />
                    <input className="px-4 py-1 rounded-pill" onBlur={handlePasswordChange} type="password" name="Password" placeholder="Enter Your Password" id="" required />
                    <br /><br />
                    <input className="mt-3 w-50 btn btn-success m-auto" type="submit" value="Login" />
                </form>
                <br />
                <br />
                <p>New to Our Site ? <Link to="/register">Sign Up</Link></p>
                <div>------------------------------</div>
                <br />
                <button onClick={handleGoogleLogin} className="btn btn-warning">Google SignIn</button>
            </div>
            <div className="col-md-6 col-12">
                <img src="https://thumbs.dreamstime.com/b/bouton-d-ic%C3%B4ne-de-login-126998484.jpg" className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default Login;