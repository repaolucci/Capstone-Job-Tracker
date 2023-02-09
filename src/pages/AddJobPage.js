import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddJobPage = () => {

    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [skill, setSkill] = useState('');
    const [contact, setContact] = useState('');

    const history = useHistory();

    const addJob = async () => {
        const newJob = { company, title, date, status, skill, contact };
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
        history.push("/");
    };

    return (
        <div>
            <h1>Add Job</h1>
            <input
                type="text"
                placeholder="Enter company here"
                value={company}
                onChange={e => setCompany(e.target.value)} />
            <input
                type="number"
                value={title}
                placeholder="Enter title here"
                onChange={e => setTitle(e.target.value)} />
            <input
                type="text"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <input
                type="text"
                placeholder="Enter status here"
                value={status}
                onChange={e => setStatus(e.target.value)} />
            <input
                type="text"
                placeholder="Enter skill here"
                value={skill}
                onChange={e => setSkill(e.target.value)} />
            <input
                type="text"
                placeholder="Enter contact here"
                value={contact}
                onChange={e => setContact(e.target.value)} />
            <button
                onClick={addJob}
            >Add</button>
        </div>
    );
}

export default AddJobPage;
