import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import axios from "axios";

const SelfDiagnosis = () => {
  const [message, setMessage] = useState("You Need to Login First");

  const [user, setUser] = useState("");

  const [checkbox, setCheckbox] = useState({
    cough: "no",
    fever: "no",
    sorethroat: "no",
    fatigue: "no",
    travelhistory: "no",
    incontact: "no",
    condition: "",
    attn: "",
    display: false,
  });

  const {
    cough,
    fever,
    sorethroat,
    fatigue,
    travelhistory,
    incontact,
    condition,
    attn,
    display,
  } = checkbox;

  const handleChange = (name) => (event) => {
    setCheckbox({ ...checkbox, [name]: event.target.value });
    console.log(checkbox);
  };

  const tool = () => {
    return (
      <div>
        <form>
          <h3 className="d-flex justify-content-center">
            Symptom Checker
          </h3>
          <br></br>
          <div>
          <table className="table ">
            <thead>
              <tr>
                <th>Dry Cough</th>
                <th>High Fever</th>
                <th>Sore Throat</th>
                <th>Dizziness</th>
                <th>Travel History</th>
                <th>Contact Exposure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select
                    id="cough"
                    name="cough"
                    onChange={handleChange("cough")}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </td>
                <td>
                  <select
                    id="fever"
                    name="fever"
                    onChange={handleChange("fever")}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </td>
                <td>
                  <select
                    id="sorethroat"
                    name="sorethroat"
                    onChange={handleChange("sorethroat")}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </td>
                <td>
                  <select
                    id="fatigue"
                    name="fatigue"
                    onChange={handleChange("fatigue")}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </td>
                <td>
                  <select
                    id="travelhistory"
                    name="travelhistory"
                    onChange={handleChange("travelhistory")}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </td>
                <td>
                  <select
                    id="incontact"
                    name="incontact"
                    onChange={handleChange("incontact")}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <br></br>
          <div className="d-flex justify-content-center">
            <Button variant="primary" className="" onClick={handleSubmit}>
              Run Diagnosis
            </Button>
          </div>
        </div>
      </form>
      </div>
    );
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(checkbox);
    await axios
      .post("http://localhost:3000/rundiagnosis", {
        cough,
        fever,
        sorethroat,
        fatigue,
        travelhistory,
        incontact,
      })
      .then((res) => {
        if (res.data.err) {
          console.log(res.data.err);
        } else {
          console.log(res.data);
          setCheckbox({
            ...checkbox,
            condition: res.data.condition,
            attn: res.data.attn,
            display: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const tryagain = () => {
    setCheckbox({
      cough: "no",
      fever: "no",
      sorethroat: "no",
      fatigue: "no",
      travelhistory: "no",
      incontact: "no",
      condition: "",
      attn: "",
      display: false,
    });
  };

  useEffect(() => {
    const fetchdata = async () => {
      let hours = 0.05;
      const jwt = localStorage.getItem("token");
      const time = localStorage.getItem("time");

      if (jwt === undefined) {
        setMessage("You Need to Login First");
      }

      if (time && new Date().getTime() - time > hours * 60 * 60 * 1000) {
        console.log(
          "localstorage for true",
          new Date().getTime() - time > hours * 60 * 60 * 1000
        );
        localStorage.removeItem("token");
        localStorage.removeItem("time");
        window.location = "/";
      } else {
        setUser(jwt);
        console.log(
          "localstorage for false",
          new Date().getTime() - time > hours * 60 * 60 * 1000
        );
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="container">
      {user !== null ? (
        
          (user !== null) & !display ? (
            <div>{tool()}</div>
          ) : (
            <div>
              {attn === "Yes" && condition === "corona" ? (
                <div>
                  <h4 className="d-flex justify-content-center text-danger">
                    You May Have COVID 19
                  </h4>
                  <p className="d-flex justify-content-center text-danger">
                    Self Isolate
                  </p>
                  <div className="d-flex justify-content-center">
                    <Button variant="danger" onClick={tryagain}>
                      Try Again
                    </Button>
                  </div>

                  <div className="d-flex justify-content-center p-2">
                    <Button
                      variant="danger"
                      className="d-flex justify-content-center"
                      onClick={() => (window.location = "/emergency")}
                    >
                      Click Here for Emergency
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="d-flex justify-content-center text-success">
                    The symptoms are not strong enough for COVID 19!
                  </h4>
                  <p className="d-flex justify-content-center text-secondary">
                    Practice Social Distancing
                  </p>
                  <div className="d-flex justify-content-center">
                    <Button variant="success" onClick={tryagain}>
                      Try Again
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )
      ) : (
        <div>
          <div className="d-flex justify-content-center">
            <h3 className="text-danger"> {message} </h3>
          </div>
          <br></br>
          <div className="d-flex justify-content-center">
            <Button
              className="btn btn-danger"
              onClick={() => (window.location = "/login")}
            >
              Login Here
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelfDiagnosis;
