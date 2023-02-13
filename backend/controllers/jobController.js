const jobs = require('../models/jobModel.js');

// Create Job
const createJobs = (req, res) => {
    jobs.createJob(req.body.title, 
                    req.body.companyName, 
                    req.body.jobType, 
                    req.body.location, 
                    req.body.locationType, 
                    req.body.dateApplied,
                    req.body.status,
                    req.body.skills,
                    req.body.contacts)
        .then(job => {
            res.status(201).json(job);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
};

// Retrieve Job
const readJobs = (req, res) => {
    let filter = {}
    jobs.readJob(filter, '', 0)
    .then(job => {
        res.status(200).send(job);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: 'Request Failed'});
    })
};

// Update Job
//app.put('/jobs/:_id', (req, res) => {
const updateJobs  = (req, res) => {
    jobs.updateJob(req.params._id, 
                    req.body.title, 
                    req.body.companyName, 
                    req.body.jobType, 
                    req.body.location, 
                    req.body.locationType, 
                    req.body.dateApplied,
                    req.body.status,
                    req.body.skills,
                    req.body.contacts)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, 
                            title: req.body.title, 
                            companyName: req.body.companyName, 
                            jobType: req.body.jobType, 
                            location: req.body.location, 
                            locationType: req.body.locationType, 
                            dateApplied: req.body.dateApplied,
                            status: req.body.status,
                            skills: req.body.skills,
                            contacts: req.body.contacts })
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
};

// Delete Job
//app.delete('/jobs/:_id', (req, res) => {
const deleteJobs = (req, res) => {
    jobs.deleteJob(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
};

module.exports = { createJobs, readJobs, updateJobs, deleteJobs };