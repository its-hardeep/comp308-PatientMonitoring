import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";

const LoginTrial = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      let hours = 0.05;
      const jwt = localStorage.getItem("token");
      const time = localStorage.getItem("time");

      if (jwt && new Date().getTime() - time > hours * 60 * 60 * 1000) {
        localStorage.removeItem("token");
        localStorage.removeItem("time");
        window.location = "/";
      } else {
        const user = jwtDecode(jwt);
        setUser(user);
      }
    } catch (ex) {}
  }, []);

  const { username, password, error, loading, didRedirect } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    console.log("here");
    axios
      .post("http://localhost:3000/login", { username, password })

      .then((res) => {
        if (res.data.err) {
          console.log(res.data.err);
          setValues({ ...values, error: res.data.err, loading: false });
        } else {
          setValues({ ...values, didRedirect: true });
          localStorage.setItem("token", res.headers["x-auth-token"]);
          localStorage.setItem("time", new Date().getTime());
          window.location = "/";
        }
      })

      .catch((err) => {
        setValues({ ...values, error: err, success: false });
        console.log(err);
      });
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: error ? "" : "none" }}
      >
        New account was created successfully.
        <Link to="/login">Welcome</Link>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger col-md-6 offset-sm-3 text-left"
        style={{ display: error ? "" : "none" }}
      >
        {JSON.stringify(error)}
        <Link to="/registration">Login Again</Link>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
          <h3 className="d-flex justify-content-center p-2">Login</h3>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                value={username}
                onChange={handleChange("username")}
                className="form-control"
                type="email"
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                value={password}
                onChange={handleChange("password")}
                className="form-control"
                type="password"
              />
            </div>

            <button onClick={onSubmit} className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  

  const nurseprofile = () => {
    return (
      <div className="row">
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Figure.Image
              width={300}
              height={200}
              alt="300X200"
              src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title>Add Report</Card.Title>
              <Card.Text>Add vital signs of patient</Card.Text>
            </Card.Body>
            <Button variant="primary" onClick={ ()=> {window.location="/reportnurse"}}>New Report</Button>
          </Card>
        </div>
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Figure.Image
              width={300}
              height={200}
              alt="300X200"
              src="https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title>List Reports</Card.Title>
              <Card.Text>List the history of patient's reports</Card.Text>
            </Card.Body>
            <Button variant="primary" onClick={ ()=> {window.location="/searchallreports"}}>Search</Button>
          </Card>
        </div>
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Figure.Image
              width={300}
              height={200}
              alt="200X200"
              src="https://images.pexels.com/photos/163066/desk-terminplanung-control-newsletter-163066.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title>Post Tips</Card.Title>
              <Card.Text>Post motivational tip for patients</Card.Text>
            </Card.Body>
            <Button variant="primary" onClick={ ()=> {window.location="/addTips"}} >Add Tip</Button>
          </Card>
        </div>
      </div>
    );
  };

  const patientprofile= () => {
    return (
      <div className="row">
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Figure.Image
              width={300}
              height={200}
              alt="300X200"
              src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title>Add Report</Card.Title>
              <Card.Text>Add vital signs report</Card.Text>
            </Card.Body>
            <Button variant="primary" onClick={ ()=> {window.location="/reportuser"}}>New Report</Button>
          </Card>
        </div>
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Figure.Image
              width={300}
              height={200}
              alt="300X200"
              src="https://images.pexels.com/photos/3970332/pexels-photo-3970332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title>Emergency</Card.Title>
              <Card.Text>Send Emergency Message</Card.Text>
            </Card.Body>
            <Button variant="danger" onClick={ ()=> {window.location="/emergency"}}>Emergency</Button>
          </Card>
        </div>
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Figure.Image
              width={300}
              height={200}
              alt="200X200"
              src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title>Symptom Checker</Card.Title>
              <Card.Text>Check your symptoms here</Card.Text>
            </Card.Body>
            <Button variant="primary" onClick={ ()=> {window.location="/selfdiagnosis"}}>Symptom Checker</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div >
      {user === null ? (
        <div>
          {signInForm()} <br></br>
          {errorMessage()}
        </div>
      ) : (
        <div className="container" >
          
          <div className="container">
          <h3 className="d-flex justify-content-center p-2">Welcome {user.firstName} {user.lastName}</h3>
          {(user.role === 'Nurse')  ? <div className="row">{nurseprofile()}</div> : <div className="row">{patientprofile()}</div>}
          </div>
        </div>
      )}

     
    </div>
  );
};

export default LoginTrial;
