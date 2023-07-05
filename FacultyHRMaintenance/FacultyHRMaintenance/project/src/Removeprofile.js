import React, { useState } from 'react';
import './styles.css';
import axios from 'axios'; 
import './image.css';

const Removeprofile= () => {  
  const[id,setId]=useState('')
  const[status,setStatus]=useState('')
  
  const Delete=(e)=>{
   e.preventDefault(); 
   const s=window.confirm("do you want to delete??"); 
   if(s === true) 
   {
     axios.post("http://localhost:8080/Adminlogin/Anavbar/Removeprofile",{
      id:id,
      status:status,

    
     }).then(()=>{
    
       alert("deletion success")
    })
  } 
  else{
    alert("can not delete the data");
  }

  };
  return (
    <div className="container">  
      <div className="form" >
        <div  className='ui cards'>
          <form className="ui form" onSubmit={Delete}>
            <div className=' wide field'>
              <h2><input type="text"  placeholder='Faculty Id'  onChange={(event)=>{
                setId(event.target.value)
              }}/></h2>
            </div>
           
            <div className="fields">
              <div className="field">
                <h2><input type="text" placeholder='status' onChange={(event)=>{
                  setStatus(event.target.value)
                }} /></h2>
              </div>
              
              </div>
              
             

              <h2><button className='ui orange button'>Update Status</button></h2>
          </form>
        </div>
      </div>
      
    </div>
  );
};
export default Removeprofile;
