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

          <form>
            <div className={styles.modalContent}>

              <div className={styles.jobFormInputGroup}>
                <label className={styles.jobFormLabel} for="title">
                  Title
                </label>
                <input
                  className={styles.jobFormInput}
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  placeholder="Enter title here"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className={styles.jobFormInputGroup}>
                <label className={styles.jobFormLabel} for="companyName">
                  Company Name
                </label>
                <input
                  className={styles.jobFormInput}
                  type="text"
                  placeholder="Enter company here"
                  value={companyName}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className={styles.jobFormInputGroup}>
                <label className={styles.jobFormLabel} for="jobType">
                  Job Type
                </label>
                <select
                  className={styles.jobFormSelect}
                  id="jobType"
                  name="jobType"
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className={styles.jobFormInputGroup}>
                <label className={styles.jobFormLabel} for="location">
                  Job Location
                </label>
                <input
                  className={styles.jobFormInput}
                  type="text"
                  placeholder="Enter location here"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className={styles.jobFormInputGroup}>
                <label className={styles.jobFormLabel} for="locationType">
                  Location Type
                </label>
                <select
                  className={styles.jobFormSelect}
                  id="locationType"
                  name="locationType"
                  onChange={(e) => setLocationType(e.target.value)}
                >
                  <option value="On-Site">On-Site</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              <div className={styles.jobFormInputGroup}>
                <label className={styles.jobFormLabel} for="dateApplied">
                  Date Applied
                </label>
                <input
                  className={styles.jobFormInput}
                  type="text"
                  placeholder="Enter date here"
                  value={dateApplied}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className={styles.jobFormInputGroup}>
                <label className={styles.jobFormLabel} for="status">
                  Job Status
                </label>
                <select
                  className={styles.jobFormSelect}
                  id="locationType"
                  name="locationType"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Interested">Interested</option>
                  <option value="Applied">Applied</option>
                  <option value="Interviewed">Interviewed</option>
                  <option value="Offer">Offer</option>
                </select>
              </div>

              <div className={styles.jobFormInputGroup}>
                <label className={styles.jobFormLabel} for="skills">
                  Skills
                </label>
                <input
                  className={styles.jobFormInput}
                  type="text"
                  placeholder="Enter skill here"
                  value={skills}
                  onChange={(e) => setSkill(e.target.value)}
                />
              </div>

              <div className={styles.jobFormInputGroup}>
                <label className={styles.jobFormLabel} for="contacts">
                  Contacts
                </label>
                <input
                  className={styles.jobFormInput}
                  type="text"
                  placeholder="Enter contact here"
                  value={contacts}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              <button className={styles.addButton} onClick={addJob}>
                Add
              </button>
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddJob;
