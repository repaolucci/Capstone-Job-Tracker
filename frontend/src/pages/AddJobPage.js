import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddJobPage = ({ setIsOpen }) => {
    


    const [title, setTitle] = useState('');
    const [companyName, setCompany] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [locationType, setLocationType] = useState('');
    const [dateApplied, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [skills, setSkill] = useState('');
    const [contacts, setContact] = useState('');

    const history = useHistory();

    const addJob = async () => {
        const newJob = { title, companyName, jobType, location, locationType, dateApplied, status, skills, contacts };
        const response = await fetch('/jobs', {
            method: 'POST',
            body: JSON.stringify(newJob),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the job");
        } else{
            alert(`Failed to add job, status code = ${response.status}`);
        }
        history.push("/view-page");
    };

    return (
        
        <div>
            <div onClick={() => setIsOpen(false)} />
            <h1>Add Job</h1>
            <input
                type="text"
                value={title}
                placeholder="Enter title here"
                onChange={e => setTitle(e.target.value)} />
            <input
                type="text"
                placeholder="Enter company here"
                value={companyName}
                onChange={e => setCompany(e.target.value)} />
            <input
                type="text"
                placeholder="Enter job type here"
                value={jobType}
                onChange={e => setJobType(e.target.value)} />
            <input
                type="text"
                placeholder="Enter location here"
                value={location}
                onChange={e => setLocation(e.target.value)} />
            <input
                type="text"
                placeholder="Enter location type here"
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
                onClick={addJob}
            >Add</button>
        </div>
    );
}

export default AddJobPage;
