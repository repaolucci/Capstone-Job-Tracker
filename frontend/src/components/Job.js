import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md'

function Job({ job, onDelete, onEdit }) {
    return (
        <tr>
            <td>{job.title}</td>
            <td>{job.companyName}</td>
            <td>{job.jobType}</td>
            <td>{job.location}</td>
            <td>{job.locationType}</td>
            <td>{job.dateApplied}</td>
            <td>{job.status}</td>
            <td>{job.skills}</td>
            <td>{job.contacts}</td>
            <td>< MdEdit onClick={() => onEdit(job)}/></td>
            <td>< MdDeleteForever onClick={() => onDelete(job._id)}/></td>
        </tr>
    );
}

export default Job;
