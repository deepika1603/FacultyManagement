import React, { useEffect, useState } from "react";
import axios from "axios";
import './image1.css';
const Facultywise = () => {
    const [userdata, setUserdata] = useState([]);
    // axios.get(url).
    // then((response)=>{
    //     console.log(response.data)
    //        setUserdata(response.data);
    // })
    useEffect(() => {
        axios.get("http://localhost:8080/Facultylogin/Fnavbar/Facultywise").then((response) => {
            setUserdata(response.data);
            console.log(response.data);
        });
    }, []);
    return (
        <div>
            {/* <h1>report page</h1>
            <h3>{userdata.regno}</h3> */}
            {/* {
                userdata.map((item)=>{
                    return(
                          <div>
                          <h3>{item.name}</h3>
                          <h3>{item.regno}</h3>
                          </div>
                    )
                })
            } */}
            <table class="ui celled table" border="1">
                <thead>
                    <tr>
                        <th>Faculty Id</th>
                        <th>Name</th>
                        <th>EmailId</th>
                        <th>Mobile Number</th>
                        <th>Address</th>
                        <th>Education</th>
                        <th>Pubication</th>
                        <th>Experience</th>
                        <th>Workshops Attended</th>
                        <th>Workshops Conducted</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {userdata.map((item) => {
                        return (
                            <tr>
                                
                                <td data-label="Faculty Id">{item.FacultyId}</td>
                                <td data-label="Name">{item.Name}</td>
                                <td data-label="EmailId">{item.Emailid}</td>
                                <td data-label="Mobile Number">{item.mobileNo}</td>
                                <td data-label="Address">{item.Address}</td>
                                <td data-label="Education">{item.Education}</td>
                                <td data-label="Pubication">{item.Publication}</td>
                                <td data-label="Experience">{item.Experience}</td>
                                <td data-label="Workshops Attended">{item.WorkshopAttended}</td>
                                <td data-label="Workshops Conducted">{item.WorkshopConducted}</td>
                                <td data-label="Gender">{item.Gender}</td>
                                <td data-label="Department">{item.Department}</td>
                                <td data-label="Status">{item.Status}</td>

                                
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Facultywise;