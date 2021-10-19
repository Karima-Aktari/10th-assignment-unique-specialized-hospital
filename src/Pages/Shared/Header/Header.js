import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div className="banner heading">
            <h1 className="text-dark">Unique Specialist Hospital</h1>
            <div className="header">
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/department">Department</NavLink>
                    <NavLink to="/specialist">Specialist</NavLink>

                    {user.email && <span style={{ color: 'black' }}>Hi! {user.displayName}</span>}
                    {
                        user.email ? <button onClick={logOut}>Logout</button> :
                            <NavLink to="/login">Login</NavLink>
                    }

                </nav>
            </div>

        </div>
    );
};

export default Header;