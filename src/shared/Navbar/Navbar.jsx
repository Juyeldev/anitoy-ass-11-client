import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { Tooltip } from '@mui/material';
import ActiveLink from '../../pages/ActiveLink/ActiveLink';
import logo from '../../assets/logo3.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navItems = <>
        <li className='font-bold '><Link to='/'>Home</Link></li>
        <li className='font-bold '><Link to='/blog'>Blog</Link></li>
        <li  className='font-bold '><Link to='/allToy'>All Toy</Link></li>
        {
            user ? <>  <li  className='font-bold '><Link to='/myToy'>My Toy</Link></li>
                <li  className='font-bold '><Link to='/addToy'>Add Toys</Link></li>
                <Tooltip title={user.displayName} arrow>
                    <img className=' rounded-full w-[50px] ' src={user.photoURL} />
                </Tooltip>
                <li  className='font-bold ' onClick={logOut}><Link to='/login'>Log Out</Link></li></> :
                <li  className='font-bold '><Link to='/login'>Login</Link></li>
        }

    </>

    return (
        <div>
            <div className="navbar bg-custom-navy text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-custom-blue rounded-box w-32">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"></a>
                    <Link><img className='w-[80px]' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;