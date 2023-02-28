import React from "react";
import JobForm from "./JobForm";

export const AddJob = ({ setIsOpen }) => {
  const jobObject = {
    title: "",
    companyName: "",
    jobType: "",
    location: "",
    locationType: "",
    dateApplied: "",
    status: "",
    skills: "",
    contacts: "",
  };

  const addJobFunc = async (newJob) => {
    const response = await fetch("/jobs", {
      method: "POST",
      body: JSON.stringify(newJob),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the job");
    } else {
      alert(`Failed to add job, status code = ${response.status}`);
    }

    setIsOpen(false);
  };

  return (
    <>
      <JobForm
        setIsOpen={setIsOpen}
        jobObject={jobObject}
        formAction={addJobFunc}
      />
    </>
  );
};

export default AddJob;
