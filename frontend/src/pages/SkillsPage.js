import React from 'react';
import { Link } from 'react-router-dom';
import SkillList from '../components/SkillList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function SkillsPage() {
    const [jobs, setJobs] = useState([]);
    const history = useHistory();

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
            <h2>Skills</h2>
            <SkillList jobs={jobs} ></SkillList>
        </>
    );
}

export default SkillsPage;
