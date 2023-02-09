import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import { useState} from 'react';

function App() {
  const [jobToEdit, setJobToEdit] = useState();


  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setJobToEdit={setJobToEdit} />
          </Route>
          <Route path="/add-job">
            <AddJobPage />
          </Route>
          <Route path="/edit-job">
            <EditJobPage jobToEdit={jobToEdit} />
          </Route>
          </div>
      </Router>
    </div>
  );
}

export default App;