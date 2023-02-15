import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditJobPage = ({ jobToEdit }) => {

    const [title, setTitle] = useState(jobToEdit.title);
    const [companyName, setCompany] = useState(jobToEdit.companyName);
    const [jobType, setJobType] = useState(jobToEdit.jobType);
    const [location, setLocation] = useState(jobToEdit.location);
    const [locationType, setLocationType] = useState(jobToEdit.locationType);
    const [dateApplied, setDate] = useState(jobToEdit.dateApplied);
    const [status, setStatus] = useState(jobToEdit.status);
    const [skills, setSkill] = useState(jobToEdit.skill);
    const [contacts, setContact] = useState(jobToEdit.contact);

    const history = useHistory();

    const editJob = async () => {
        const editedJob = { title, companyName, jobType, location, locationType, dateApplied, status, skills, contacts };
        const response = await fetch(`/jobs/${jobToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedJob),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully edited the job");
        } else{
            alert(`Failed to edit job, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h1>Edit Job</h1>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <input
                type="text"
                value={companyName}
                onChange={e => setCompany(e.target.value)} />
            <input
                type="text"
                value={jobType}
                onChange={e => setJobType(e.target.value)} />
            <input
                type="text"
                value={location}
                onChange={e => setLocation(e.target.value)} />
            <input
                type="text"
                value={locationType}
                onChange={e => setLocationType(e.target.value)} />
            <input
                type="text"
                placeholder="Enter date here"
                value={dateApplied}
                onChange={e => setDate(e.target.value)} />
            <input
                type="text"
                placeholder="Enter status here"
                value={status}
                onChange={e => setStatus(e.target.value)} />
            <input
                type="text"
                placeholder="Enter skill here"
                value={skills}
                onChange={e => setSkill(e.target.value)} />
            <input
                type="text"
                placeholder="Enter contact here"
                value={contacts}
                onChange={e => setContact(e.target.value)} />
            <button
                onClick={editJob}
            >Save</button>
        </div>
    );
}

export default EditJobPage;
