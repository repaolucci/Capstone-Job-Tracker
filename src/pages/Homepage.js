import React from 'react';
import { Link } from 'react-router-dom';
import JobList from '../components/JobList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setJobToEdit }) {
    const [jobs, setJobs] = useState([]);
    const history = useHistory();

    const onDelete = async _id => {
        const response = await fetch(`/jobs/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const newJobs = jobs.filter(m => m._id !== _id);
            setJobs(newJobs);
        } else {
        console.error(`Failed to delete job with _id = ${_id}, status code = ${response.status}`)
        }
    };
    
    const onEdit = job => {
        setJobToEdit(job);
        history.push("/edit-job");
    }

    const loadJobs = async () => {
        const response = await fetch('/jobs');
        const data = await response.json();
        setJobs(data);
    };
        
    useEffect(() => {
        loadJobs();
    }, []);

    return (
        <>
            <h2>List of Jobs</h2>
            <JobList jobs={jobs} onDelete={onDelete} onEdit={onEdit}></JobList>
            <Link to="/add-job">Add a job</Link>
        </>
    );
}

export default HomePage;