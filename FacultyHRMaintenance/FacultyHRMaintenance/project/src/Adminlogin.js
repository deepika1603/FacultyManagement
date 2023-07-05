import React from 'react';
import './adminlogin.css';
import './image.css';

import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
     const navigate=useNavigate();
    const handle=()=>{
navigate("Anavbar")
    }
    <h2>ADMIN LOGIN</h2>
    return (

        <div className="container">
      <div className="form" >
        <div  className='ui cards'>
          <form className="ui form" >
            <div className=' wide field'>
              <input type="text" name="regno" placeholder='username'  />
            </div>
           
            <div className="fields">
              <div className="field">
                <input type="text" placeholder='password'
                 />
              </div>
              </div>

              <button className='ui orange button' onClick={handle}>Login</button>
                </form>
      
        </div>
      </div>
      </div>


    )
}

export default Adminlogin;