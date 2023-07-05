import React from 'react';
import {NavLink} from 'react-router-dom';
import './image.css';
// import img from './image.css';

const Anavbar = () => {
    // const changeStyle = ({ isActive }) => {
    //     return {
    //         color: isActive ? "red" : "violet"
    //     }
    // }
    return (
        <div
        style={{
        }}
        >
        <div display="flex" justifyContent="left"  align-items="center" height="10px" backgroundColor="blue" width="100px" >
         <NavLink className={NavLink} to='Addprofile' >Addprofile</NavLink>
         </div>
         <br></br>
         <br></br>
         <div display="flex" justifyContent="left"  align-items="center" height="10px" backgroundColor="red" width="100px" >
         <NavLink className={NavLink} to='Removeprofile' >Updateprofile</NavLink>
         </div>
         {/* <NavLink className={NavLink} to='Adminlogin' style={changeStyle}>Adminlogin</NavLink>  */}
            </div>
    );
};

export default Anavbar;