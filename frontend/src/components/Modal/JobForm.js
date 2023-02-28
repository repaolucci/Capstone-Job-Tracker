import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import styles from "./JobForm.module.css";

export const JobForm = ({ setIsOpen, jobObject, formAction }) => {
  const [title, setTitle] = useState(jobObject.title);
  const [companyName, setCompany] = useState(jobObject.companyName);
  const [jobType, setJobType] = useState(jobObject.jobType);
  const [location, setLocation] = useState(jobObject.location);
  const [locationType, setLocationType] = useState(jobObject.locationType);
  const [dateApplied, setDate] = useState(jobObject.dateApplied);
  const [status, setStatus] = useState(jobObject.status);
  const [skills, setSkill] = useState(jobObject.skill);
  const [contacts, setContact] = useState(jobObject.contact);

  const submitAction = () => {
    const Job = {
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
    formAction(Job);
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}></div>
          <h1>Header</h1>
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
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value=""></option>
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
                  <option value=""></option>
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
                  <option value=""></option>
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

              <button className={styles.addButton} onClick={submitAction}>
                Save
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

export default JobForm;
