import React from 'react';
import { NavLink } from 'react-router-dom';
// import './App.css';
const Navbar = () => {
    const changeStyle = ({ isActive }) => {
        return {
            color: isActive ? "red" : "white"
        }
    }
    return (
        <div className="navbar">
                <NavLink className={NavLink} to='/' style={changeStyle}>Home</NavLink>
                <NavLink className={NavLink} to='Adminlogin' style={changeStyle}>Adminlogin</NavLink> 
                <NavLink className={NavLink} to='Facultylogin' style={changeStyle}>Facultylogin</NavLink> 
        </div>
    );
};

export default Navbar;