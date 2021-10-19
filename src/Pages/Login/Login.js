import React from 'react';
import useAuth from '../../hooks/useAuth';

// import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        signInUsingGoogle } = useAuth();

    return (
        <div className="row py-4 mx-auto">
            <div className="col-md-6 col-12 pt-4">
                <h1>{user.email}</h1>
                <form onSubmit={handleRegistration}>
                    <h1 className="text-info p-4">Register Your Account</h1>
                    <input className="px-4 py-1 rounded-pill" onChange={handleEmailChange} type="email" name="email" placeholder="Enter Your Email" required />
                    <br /><br />
                    <input className="px-4 py-1 rounded-pill" onBlur={handlePasswordChange} type="password" name="Password" placeholder="Enter Your Password" id="" required />
                    <br /><br />
                    <input className="mt-3 w-50 btn btn-success m-auto" type="submit" value="Register" />
                </form>
                <br />
                <div>------------------------------</div>
                <br />
                {<button onClick={signInUsingGoogle} className="btn btn-warning">Google SignIn</button>}
            </div>
            <div className="col-md-6 col-12">
                <img src="https://thumbs.dreamstime.com/b/bouton-d-ic%C3%B4ne-de-login-126998484.jpg" className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default Login;