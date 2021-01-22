import React, { useState,useEffect } from 'react';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import Table from 'react-bootstrap/Table';

const SearchAllreports = () =>{

  
  const [data,setData]= useState([]);
 
  
  const[message, setMessage]= useState("Loading");
  
  useEffect( ()=> {
    

    const fetchdata= async () => {

      let hours= 0.05;
      const jwt= localStorage.getItem("token");
      const time= localStorage.getItem("time");

      
      if(jwt === undefined){
        setMessage("Not Authorised");
      }

      if(time && (new Date().getTime() - time > hours * 60 * 60 *1000 )){
        console.log( "localstorage for true", new Date().getTime() - time> hours * 60 * 60 *1000 );
        localStorage.removeItem('token');
        localStorage.removeItem('time');
        window.location="/";
      }
      else{

        const user12 = jwtDecode(jwt);
        console.log(user12.role);
        if(user12.role==="Patient"){
          console.log("here");
          window.location= "/";
        }

        
        console.log( "localstorage for false", new Date().getTime() - time> hours * 60 * 60 *1000 );
        
      


      await axios.get("http://localhost:3000/listallreports" ,{ headers: {'x-auth-token' :jwt,
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
       }})
       .then( res=> {
         setData(res.data);
         
          
         
       })
       .catch((err)=> {
         
         
       })
    };
  }

    fetchdata();
  }, []);

 
  return (

    <div className="container" style={{width: "30%" }}>
      <h3 className="d-flex justify-content-center p-2">All Reports</h3>
      { data.length !== 0
        ? 
          <Table style={{width:"80%"}} striped bordered  responsive="lg">
      <thead>
        <tr>
          <th>Patient Email</th>
          <th>Heart Rate</th>
          <th>Blood Pressure</th>
          <th>Respiratory Rate</th>
          <th>Body Temperature</th>
          <th>Nurse Email</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item, idx) => (
        <tr key={idx}>
          <td>{item.patientemail}</td>
          <td>{item.heartrate}</td>
          <td>{item.bloodpressure}</td>
          <td>{item.respiratoryrate}</td>
          <td>{item.bodytemperature}</td>
          <td>{item.nursename}</td>
        </tr>
        ))}
      </tbody>
     </Table>
        : < div className="p-4"> <p> {message}...</p></div>
      }

     
   </div> 
  )
}

export default SearchAllreports 