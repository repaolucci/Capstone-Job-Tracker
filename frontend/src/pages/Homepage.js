import React from "react";
import { Link } from "react-router-dom";
import JobList from "../components/JobList";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AddJob from "../components/Modal/AddJob";

function HomePage({ setJobToEdit }) {
  const [jobs, setJobs] = useState([]);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const onDelete = async (_id) => {
    const response = await fetch(`/jobs/${_id}`, { method: "DELETE" });
    if (response.status === 204) {
      const newJobs = jobs.filter((m) => m._id !== _id);
      setJobs(newJobs);
    } else {
      console.error(
        `Failed to delete job with _id = ${_id}, status code = ${response.status}`
      );
    }
  };

  const onEdit = (job) => {
    setJobToEdit(job);
    history.push("/edit-job");
  };

  const loadJobs = async () => {
    const response = await fetch("/jobs");
    const data = await response.json();
    setJobs(data);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <>
      <JobList jobs={jobs} onDelete={onDelete} onEdit={onEdit}></JobList>
      <button className="addJobButton" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <AddJob setIsOpen={setIsOpen} />}
    </>
  );
}

export default HomePage;
