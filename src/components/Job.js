import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md'

function Job({ job, onDelete, onEdit }) {
    return (
        <tr>
            <td>{job.company}</td>
            <td>{job.title}</td>
            <td>{job.date}</td>
            <td>{job.status}</td>
            <td>{job.skills}</td>
            <td>{job.contact}</td>
            <td>< MdEdit onClick={() => onEdit(job)}/></td>
            <td>< MdDeleteForever onClick={() => onDelete(job._id)}/></td>
        </tr>
    );
}

export default Job;
