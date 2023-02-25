import React from 'react';
import Skill from './Skill';

function SkillList({ jobs }) {
    return (
        <table id="skills">
            <thead>
                <tr>
                    <th>Skills Required</th>
                    <th>Skill Frequency</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map((job, i) => <Skill job={job}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default SkillList;
