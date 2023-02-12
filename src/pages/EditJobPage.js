import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditJobPage = ({ jobToEdit }) => {

    const [company, setCompany] = useState(jobToEdit.company);
    const [title, setTitle] = useState(jobToEdit.title);
    const [date, setDate] = useState(jobToEdit.date);
    const [status, setStatus] = useState(jobToEdit.status);
    const [skill, setSkill] = useState(jobToEdit.skill);
    const [contact, setContact] = useState(jobToEdit.contact);

    const history = useHistory();

    const editJob = async () => {
        const editedJob = { company, title, date, status, skill, contact };
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
                value={company}
                onChange={e => setCompany(e.target.value)} />
            <input
                type="text"
                value={title}
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
                onClick={editJob}
            >Save</button>
        </div>
    );
}

export default EditJobPage;
