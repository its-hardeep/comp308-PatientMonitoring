import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import jwtDecode from "jwt-decode";
import Table from 'react-bootstrap/Table';

const SearchbyEmail = () => {
  const [report, setReport] = useState({ patientemail: "" });
  //modified part
  const [idfrombutton, setidfrombutton] = useState("");
  const [data, setData] = useState([]);

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const jwt = localStorage.getItem("token");
      const time = localStorage.getItem("time");
      let hours = 0.05;

      if (jwt === undefined) {
        setMessage("Not Authorised");
      }
      if (time && new Date().getTime() - time > hours * 60 * 60 * 1000) {
        console.log(
          "localstorage from searchbyemail true",
          new Date().getTime() - time > hours * 60 * 60 * 1000
        );
        localStorage.removeItem("token");
        localStorage.removeItem("time");
        window.location = "/";
      } else {
        const user12 = jwtDecode(jwt);
        console.log(user12.role);
        if (user12.role === "Patient") {
          console.log("here");
          window.location = "/";
        }
        //console.log("localstorage from searchbyemail false",
        //new Date().getTime() - time > hours * 60 * 60 * 1000
        //);

        await axios
          .post("http://localhost:3000/listbyemail", report, {
            headers: {
              "x-auth-token": jwt,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => {});
      }

      return () => {
        fetchdata();
      };
    };

    fetchdata();
  }, [idfrombutton]);

  const handleChange = (event) => {
    setReport({ ...report, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    setidfrombutton(report.patientemail);
  };

  return (
    <div className="container" style={{width: "30%" }}>
      <h3 className="d-flex justify-content-center p-2">Reports by Email</h3>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="patientemail"
            onChange={handleChange}
            value={report.patientemail}
            required
          />
        </Form.Group>
      </Form>

      <div className="input-field">
        <button className="btn btn-primary" type="submit" onClick={handleClick}>
          Search
        </button>
      </div>

      {data.length !== 0 ? (
        <div className="justify-content-center p-2 ">
          <Table style={{width:"80%"}} striped bordered  responsive="lg">
            <thead>
              <tr>
                <th>Patient Email</th>
                <th>Heart Rate</th>
                <th>Blood Pressure</th>
                <th>Respiratory Rate</th>
                <th>Body Temperature</th>
                <th>Nurse Name</th>
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
        </div>
      ) : (
        <div className="d-flex justify-content-center p-3 ">
          {" "}
          <p>{message}...</p>
        </div>
      )}
    </div>
  );
};

export default SearchbyEmail;
