import React from "react";
import { NavLink, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = ({ u }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="#">
        Patient Monitoring System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/">
              Home <span className="sr-only"></span>
            </NavLink>

            {/* {u && (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/profile">
                  {u.user.firstName}
                </NavLink>
              </React.Fragment>
            )} */}

            {u && u.user.role === "Nurse" && (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/reportnurse">
                  Add Report
                </NavLink>
                <NavLink className="nav-item nav-link" to="/searchallreports">
                  List Reports
                </NavLink>
                <NavLink className="nav-item nav-link" to="/searchbyemail">
                  Reports By Email
                </NavLink>
                <NavLink className="nav-item nav-link" to="/addTips">
                  Add Tips
                </NavLink>
                

                
              </React.Fragment>
            )}
            {u && u.user.role === "Patient" && (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/reportuser">
                  Add Report
                </NavLink>
                <NavLink className="nav-item nav-link" to="/selfdiagnosis">
                  Symptom Checker
                </NavLink>
                <NavLink className="nav-item nav-link" to="/emergency">
                  Emergency
                </NavLink>
                <NavLink className="nav-item nav-link" to="/video">
                Video
                </NavLink>
              </React.Fragment>
            )}
            {/* <React.Fragment>
              <NavLink className="nav-item nav-link" to="/video">
                Video
              </NavLink>
              
            </React.Fragment> */}
          </div>
        </div>
        
        {!u && (
          <React.Fragment>
            <NavLink className="nav-item nav-link  ml-auto " to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link ml-auto" to="/registration">
              Registration
            </NavLink>
          </React.Fragment>
        )}
        {u && (
          <React.Fragment>
            {u.user.firstName}
               
            <NavLink className="nav-item nav-link ml-auto" to="/logout">
              Logout
            </NavLink>
          </React.Fragment>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
