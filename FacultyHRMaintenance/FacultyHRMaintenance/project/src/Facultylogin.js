import React from 'react';
import { useNavigate } from 'react-router-dom';
import './image2.css';
const Facultylogin = () => {
  const navigate=useNavigate();
  const handle=()=>{
navigate("Fnavbar")
  }
 
    return (

        <div class="container">
        <div className="form" >
          <div  className='ui cards'>
            <form className="ui form" >
              <div className=' wide field'> 
                <input type="text"  placeholder='username'  />
              </div>
             
              <div className="fields">
                <div className="field">
                  <input type="text" placeholder='password'
                   />
                </div>
                </div>
  
                <button className='ui orange button' onClick={handle}>LOGIN</button>
                
            </form>
          </div>
        </div>
        </div>
  
   
    );
};

export default Facultylogin;