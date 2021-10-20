import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleNameChange, error, user, handleEmailChange,
        handlePasswordChange,
        handleRegistration,
    } = useAuth();

    // const handleReload = () => {
    //     window.location.reload();
    //     handleRegistration();
    // }

    return (
        <div>
            <div className="py-4">
                <h1>{user.email}</h1>
                <form onSubmit={handleRegistration}>
                    <h1 className="text-info p-4">Register Your Account</h1>
                    <input onBlur={handleNameChange} className="px-4 py-1 rounded-pill" type="text" name="name" placeholder="Your Name" />
                    <br /><br />
                    <input onChange={handleEmailChange} className="px-4 py-1 rounded-pill" type="email" name="email" placeholder="Enter Your Email" required />
                    <br /><br />
                    <input onBlur={handlePasswordChange} className="px-4 py-1 rounded-pill" type="password" name="Password" placeholder="Enter Your Password" id="" required />
                    <br /><br />
                    <input className="px-4 py-1 rounded-pill" type="password" name="Password" placeholder="Re-enter Your Password" id="" required />
                    <br /><br />
                    <input className="mt-3 w-50 btn btn-success m-auto" type="submit" value="Register" />
                </form>
                <br />
                <h5 className="text-danger">{error}</h5>
                <br />
                <p>Already have an account ? <Link to="/login">Login</Link></p>
                <div>------------------------------</div>
                <br />
                <button className="btn btn-warning">Google SignIn</button>
            </div>
        </div>
    );
};

export default Register;