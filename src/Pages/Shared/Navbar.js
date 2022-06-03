import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const submenue =<>
     
                       
                       <li><NavLink className='rounded-2xl mr-2' to='/'>Home</NavLink></li>
                       <li><NavLink className='rounded-2xl mr-2'  to='/appoinment'>Appointment</NavLink></li>
                       <li><NavLink className='rounded-2xl mr-2'  to='/review'>Review</NavLink></li>
                       <li><NavLink className='rounded-2xl mr-2'  to='/about'>About</NavLink></li>
                       <li><NavLink  to='/contact'>Contact Us</NavLink></li>
                       <li><NavLink className='rounded-2xl mr-2' to='/login'>Login</NavLink></li>
    </>
    return (
        <div class="navbar bg-base-100 lg:flex lg:justify-around ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     {submenue}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Doctors Portal</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {submenue}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;