import React, { useState } from 'react';
import './styles.css';
import './image.css';
import axios from 'axios';
const Update = () => {

    //    let data={
    //     regno:"registrationno",
    //     fname:"Firstname",
    //     lname:"Lastname",
    //     radio:"Gender",
    //      list:"Country",


    //   };
    const [id,setId]=useState("");
    const [emailid, setEmailid] = useState('')
    const [mnumber, setMnumber] = useState('')
    const [address, setAddress] = useState('')
    const [publication, setPublication] = useState('')
    const [experience, setExperience] = useState('')
    const [wattended, setWattended] = useState('')
    const [wconducted, setWconducted] = useState('')
    const [dep, setDep] = useState('')

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



    const submit = (e) => {
        e.preventDefault();


        axios.post("http://localhost:8080/Facultylogin/Fnavbar/Update", {
            id:id,
            emailid: emailid,
            mnumber: mnumber,
            address: address,
            publication: publication,
            experience: experience,
            wattended: wattended,
            wconducted: wconducted,
            dep: dep,
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




        }).then(() => {


            alert("inserted success")
        })
    }


    return (
        <div class='container'>
            <div className="form" >
                <div className='ui cards'>
                    <form className="ui form" onSubmit={submit}>
                        <div className=' wide field'>
                            <label>FacultyId:</label>
                            <input type="text" name="id" placeholder='FacultyId' onChange={(event) => {
                                setId(event.target.value)


                            }} />
                        </div>

                        <div className="fields">
                            <div className="field">
                                <label>Emailid</label>
                                <input type="text" placeholder="EmailId" onChange={(event) => {
                                    setEmailid(event.target.value)
                                }} />
                            </div>
                            <div className="field">
                                <label>mobileNumber</label>
                                <input type="text" placeholder="MobileNumber" onChange={(event) => {
                                    setMnumber(event.target.value)
                                }} />
                            </div>
                            <div className="field">
                                <label>Address:</label>
                                <input type="text" placeholder="address" onChange={(event) => {
                                    setAddress(event.target.value)
                                }} />
                            </div>
                            <div className="field">
                                <label>Publication</label>
                                <input type="text" placeholder="publication" onChange={(event) => {
                                    setPublication(event.target.value)
                                }} />
                            </div>
                            <div className="field">
                                <label>Experience:</label>
                                <input type="text" placeholder="Experience" onChange={(event) => {
                                    setExperience(event.target.value)
                                }} />
                            </div>
                            <div className="field">
                                <label>Webinar Attended:</label>
                                <input type="text" placeholder="attended" onChange={(event) => {
                                    setWattended(event.target.value)
                                }} />
                            </div>
                            <div className="field">
                                <label>Webinar Conducted</label>
                                <input type="text" placeholder="conducted" onChange={(event) => {
                                    setWconducted(event.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="field">
                            <label>Department</label>
                            <input type="text" placeholder="department" onChange={(event) => {
                                setDep(event.target.value)
                            }} />
                        </div>

                        <div className='field'>
                        </div>
                        <br />
                        <button className='ui orange button' onSubmit={submit}>UPDATE</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;