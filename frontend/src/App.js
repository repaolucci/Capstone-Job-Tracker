import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AddJob from "./components/Modal/AddJob";
import EditJob from "./components/Modal/EditJob";
import SkillsPage from "./pages/SkillsPage";
import { useState } from "react";
import Log_in from "./pages/LoginPage";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [jobToEdit, setJobToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/view-page">
            <div className="navbar-custom">
              <NavBar />
            </div>
            <HomePage jobToEdit={jobToEdit} setJobToEdit={setJobToEdit} />
          </Route>
          <Route path="/add-job">
            <div className="navbar-custom">
              <NavBar />
            </div>
            <AddJob />
          </Route>
          <Route path="/edit-job">
            <div className="navbar-custom">
              <NavBar />
            </div>
            <EditJob jobToEdit={jobToEdit} />
          </Route>
          <Route path="/skills-page">
            <div className="navbar-custom">
              <NavBar />
            </div>
            <SkillsPage />
          </Route>
          <Route path="/" exact>
            <Log_in />
          </Route>
        </div>
      </Router>
    </div>
  );

  // return (
  //   <div className="App">
  //     <Router>
  //     <div className="navbar-custom">
  //     <NavBar />
  //       </div>
  //       <div className="App-header">
  //         <Route path="/view-page">
  //           <HomePage setJobToEdit={setJobToEdit} />
  //         </Route>
  //         <Route path="/add-job">
  //           <AddJobPage />
  //         </Route>
  //         <Route path="/edit-job">
  //           <EditJobPage jobToEdit={jobToEdit} />
  //         </Route>
  //         <Route path="/skills-page">
  //         <ContactsPage />
  //         </Route>
  //         <Route path="/" exact>
  //           <Log_in />
  //         </Route>

  //         </div>
  //     </Router>
  //   </div>
  // );
}

export default App;
