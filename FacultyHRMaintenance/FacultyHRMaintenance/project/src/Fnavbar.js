import React from 'react';
import { NavLink } from 'react-router-dom';
import './image.css';

const Fnavbar = () => {
    const changeStyle = ({ isActive }) => {
        return {
            color: isActive ? "red" : "violet"
        }
    }
    return (
        <div
            style={{
            }}
        >
            <div display="flex" justifyContent="left" align-items="center" height="10px" backgroundColor="blue" width="100px">
                <NavLink className={NavLink} to='Update' style={changeStyle}>Update</NavLink>
            </div>
            <br></br>
            <br></br>
            <div display="flex" justifyContent="left" align-items="center" height="10px" backgroundColor="blue" width="100px">
                <NavLink className={NavLink} to='Departmentwise' style={changeStyle}>Departmentwise</NavLink>
            </div>
            <br></br>
            <br></br>
            <div display="flex" justifyContent="left" align-items="center" height="10px" backgroundColor="blue" width="100px">
                <NavLink className={NavLink} to='Facultywise' style={changeStyle}>Facultywise</NavLink>
            </div>

   
         
         
         {/* <NavLink className={NavLink} to='Adminlogin' style={changeStyle}>Adminlogin</NavLink>  */ }
            
        </div >
    );
};

export default Fnavbar;