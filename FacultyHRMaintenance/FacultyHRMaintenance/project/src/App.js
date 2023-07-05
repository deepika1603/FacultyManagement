import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Facultylogin from './Facultylogin';
import Adminlogin from './Adminlogin';
import Anavbar from './Anavbar.js';
import Addprofile from './Addprofile.js';
import Removeprofile from './Removeprofile.js';
import Fnavbar from './Fnavbar.js';
import Update from './Update';
import Departmentwise from './Departmentwise';
import Facultywise from './Facultywise';



const App = () => {
  
    return (
        <div>
           <Navbar />
         <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="Facultylogin" element={<Facultylogin />}></Route>
                <Route path="Adminlogin" element={<Adminlogin />}></Route>
                 <Route path="Adminlogin/Anavbar/Addprofile" element={<Addprofile />}></Route>  
                 <Route path="Adminlogin/Anavbar/Removeprofile" element={<Removeprofile />}></Route>
                <Route path="Adminlogin/Anavbar" element={<Anavbar/>}></Route> 
                <Route path="Facultylogin/Fnavbar" element={<Fnavbar/>}></Route> 
                <Route path="Facultylogin/Fnavbar/Update" element={<Update/>}></Route> 
                <Route path="Facultylogin/Fnavbar/Departmentwise" element={<Departmentwise/>}></Route> 
                <Route path="Facultylogin/Fnavbar/Facultywise" element={<Facultywise/>}></Route> 
         </Routes>


        </div>
    );
};

export default App;