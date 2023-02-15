import '../App.css';
import {Login} from "./Login"
import { Register } from './Register';
import React, {useState} from "react";

function Log_in() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (fornmName) => {
    setCurrentForm(fornmName);
  }

  return (
    <div >
      <header className='fixed-top' >
        <h1 > JOB TRACKER</h1>
      </header>
      <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> 
        : <Register onFormSwitch={toggleForm}/>
      }
      </div>
    </div>
  );
}


export default Log_in;
