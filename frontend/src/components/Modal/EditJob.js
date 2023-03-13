import React from "react";
import { useHistory } from "react-router-dom";
import JobForm from "./JobForm";

export const EditJob = ({ jobToEdit, setIsOpen }) => {
  const history = useHistory();

  const editJob = async (editedJob) => {
    const response = await fetch(`/jobs/${jobToEdit._id}`, {
      method: "PUT",
      body: JSON.stringify(editedJob),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      alert("Successfully edited the job");
    } else {
      alert(`Failed to edit job, status code = ${response.status}`);
    }
    history.push("/view-page");
  };

  return (
    <>
      <JobForm
        setIsOpen={setIsOpen}
        jobObject={jobToEdit}
        formAction={editJob}
        header="Edit Job"
      />
    </>
  );
};

export default EditJob;
