import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';
import './image.css';
const Addprofile = () => {  
  
//    let data={
//     regno:"registrationno",
//     fname:"Firstname",
//     lname:"Lastname",
//     radio:"Gender",
//      list:"Country",


//   };
  const [id,setId]=useState("");
  const[name,setName]=useState('')
  const[emailid,setEmailid]=useState('') 
  const[mnumber,setMnumber]=useState('')
  const[address,setAddress]=useState('')
  const[edu,setEdu]=useState('')
  const[publication,setPublication]=useState('')
  const[experience,setExperience]=useState('')
  const[wattended,setWattended]=useState('')
  const[wconducted,setWconducted]=useState('') 
  const[gender,setGender]=useState('')
  const[dep,setDep]=useState('')
  const[status,setStatus]=useState('')

//   const change=(e)=>{
//   const Name=e.target.name;
//   const Value=e.target.value;
//     setInput({ ...input,[Name]:Value});
//    };
 /* const [facultyId,setId]=useState("");
  const[name,setName]=useState('')
  const[emailid,setEmailid]=useState('') 
  const[mobileNo,setMnumber]=useState('')
  const[address,setAddress]=useState('')
  const[education,setEdu]=useState('')
  const[publication,setPublication]=useState('')
  const[experience,setExperience]=useState('')
  const[workshopAttended,setWattended]=useState('')
  const[workshopconducted,setWconducted]=useState('') 
  const[gender,setGender]=useState('')
  const[department,setDep]=useState('')
  const[status,setStatus]=useState('')*/



  const submit=(e)=>{
   e.preventDefault(); 

   
      axios.post("http://localhost:8080/Adminlogin/Anavbar/Addprofile",{ 
         id:id,
         name:name,
         emailid:emailid,
         mnumber:mnumber,
         address:address,
         edu:edu,
         publication:publication,
         experience:experience,
         wattended:wattended,
         wconducted:wconducted,
         gender:gender,
         dep:dep,
         status:status
         /*FacultyId:facultyId,
         Name:name,
         Emailid:emailid,
         mobileNo:mobileNo,
         Address:address,
         Education:education,
         Publication:publication,
         Experience:experience,
         WorkshopAttended:workshopAttended,
         Workshopconducted:workshopconducted,
         Gender:gender,
         Department:department,
         Status:status*/


         

        }).then(()=>{
          
    
        alert("inserted success")
      })
    }
    

  return (
    <div class='container'>
      <div className="form" >
        <div  className='ui cards'>
          <form className="ui form" onSubmit={submit}>
            <div className=' wide field'>
                <label><strong>FacultyId:</strong></label>
             <input type="text" name="id" placeholder='FacultyId'  onChange={(event)=>{
                setId(event.target.value)


}}/>
            </div>
           
            <div className="fields">
              <div className="field">
                <label><strong>Name</strong></label>
                <input type="text" placeholder=' Name' onChange={(event)=>{
                  setName(event.target.value)
                }} />
              </div>
               <div className="field">
               <label><strong>Emailid</strong></label>
                <input type="text" placeholder="EmailId"  onChange={(event)=>{
                    setEmailid(event.target.value)
                }} />
              </div> 
              <div className="field">
              <label><strong>mobileNo</strong></label>
                <input type="text" placeholder="MobileNumber"  onChange={(event)=>
                {
                    setMnumber(event.target.value)
                }} />
              </div>
              <div className="field">
              <label><strong>Address</strong></label>
                <input type="text" placeholder="address"  onChange={(event)=>
                {
                    setAddress(event.target.value)
                }} />
              </div>
              <div className="field">
              <label><strong>Education</strong></label>
                <input type="text" placeholder="education"  onChange={(event)=>{
                    setEdu(event.target.value)
                }} />
              </div>
              <div className="field">
              <label><strong>Publication</strong></label>
                <input type="text" placeholder="publication"  onChange={(event)=>
                {
                    setPublication(event.target.value)
                }} />
              </div> 
              <div className="field">
              <label><strong>Experience</strong></label>
                <input type="text" placeholder="Experience"  onChange={(event)=>{
                    setExperience(event.target.value)
                }} />
              </div>
              <div className="field">
              <label><strong>WorkshopAttended</strong></label>
                <input type="text" placeholder="attended"  onChange={(event)=>{
                    setWattended(event.target.value)
                }} />
              </div> 
              <div className="field">
              <label><strong>WorkshopConducted</strong></label>
                <input type="text" placeholder="conducted"  onChange={(event)=>{
                    setWconducted(event.target.value)
                }} />
              </div>
              </div>
              <div className="field">
              <label><strong>Gender</strong></label>
                <input type="text" placeholder="gender"  onChange={(event)=>{
                    setGender(event.target.value)
                }} />
              </div>
              <div className="field">
              <label><strong>Department</strong></label>
                <input type="text" placeholder="department"  onChange={(event)=>{
                    setDep(event.target.value)
                }} />
                </div>
                <div className="field">
                <label><strong>Status</strong></label>
                <input type="text" placeholder="status" color="red"  onChange={(event)=>{
                    setStatus(event.target.value)
                }} />
              </div> 
               
               <div className='field'>
              </div> 
              <br/>
             <button className='ui orange button'>ADD</button>
             
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addprofile;