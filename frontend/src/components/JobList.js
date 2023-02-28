import React from "react";
import Job from "./Job";

function JobList({ jobs, onDelete, onEdit }) {
  return (
    <table id="jobs">
      <thead>
        <tr>
          <th>Title</th>
          <th>Company</th>
          <th>Job Type</th>
          <th>Location</th>
          <th>Location Type</th>
          <th>Application Date (MM/DD/YY)</th>
          <th>Status</th>
          <th>Skills Required</th>
          <th>Related Contacts</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, i) => (
          <Job job={job} onDelete={onDelete} onEdit={onEdit} key={i} />
        ))}
      </tbody>
    </table>
  );
}

export default JobList;
