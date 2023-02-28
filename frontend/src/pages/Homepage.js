import React from "react";
import JobList from "../components/JobList";
import { useState, useEffect } from "react";
import AddJob from "../components/Modal/AddJob";
import EditJob from "../components/Modal/EditJob";

function HomePage({ jobToEdit, setJobToEdit }) {
  const [jobs, setJobs] = useState([]);
  const [isAddJobOpen, setIsAddJobOpen] = useState(false);
  const [isEditJobOpen, setIsEditJobOpen] = useState(false);

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
    setIsEditJobOpen(true);
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
      <button className="addJobButton" onClick={() => setIsAddJobOpen(true)}>
        Add Job
      </button>
      {isAddJobOpen && <AddJob setIsOpen={setIsAddJobOpen} />}
      {isEditJobOpen && <EditJob jobToEdit={jobToEdit} setIsOpen={setIsEditJobOpen} />}
    </>
  );
}

export default HomePage;
