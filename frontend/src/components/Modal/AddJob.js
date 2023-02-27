import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./AddJob.module.css";

export const AddJob = ({ setIsOpen }) => {
  const [title, setTitle] = useState("");
  const [companyName, setCompany] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [locationType, setLocationType] = useState("");
  const [dateApplied, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [skills, setSkill] = useState("");
  const [contacts, setContact] = useState("");

  const history = useHistory();

  const addJob = async () => {
    const newJob = {
      title,
      companyName,
      jobType,
      location,
      locationType,
      dateApplied,
      status,
      skills,
      contacts,
    };
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
    history.push("/view-page");

    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />

      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h1>Add Job</h1>
          </div>

          <div className={styles.modalContent}>
            <label className={styles.label} for="title">
              Title
            </label>
            <input
              className={styles.input}
              type="text"
              name="title"
              id="title"
              value={title}
              placeholder="Enter title here"
              onChange={(e) => setTitle(e.target.value)}
            />

            <label className={styles.label} for="title">
              Company Name
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter company here"
              value={companyName}
              onChange={(e) => setCompany(e.target.value)}
            />

            <label className={styles.label} for="title">
              Job Type
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter job type here"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            />

            <label className={styles.label} for="title">
              Job Location
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter location here"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <label className={styles.label} for="title">
              Location Type
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter location type here"
              value={locationType}
              onChange={(e) => setLocationType(e.target.value)}
            />

            <label className={styles.label} for="title">
              Date Applied
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter date here"
              value={dateApplied}
              onChange={(e) => setDate(e.target.value)}
            />

            <label className={styles.label} for="title">
              Job Status
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter status here"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />

            <label className={styles.label} for="title">
              Skills
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter skill here"
              value={skills}
              onChange={(e) => setSkill(e.target.value)}
            />

            <label className={styles.label} for="title">
              Contacts
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter contact here"
              value={contacts}
              onChange={(e) => setContact(e.target.value)}
            />
            <button className={styles.addButton} onClick={addJob}>Add</button>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddJob;
