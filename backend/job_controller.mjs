import * as jobs from './job_model.mjs';
import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());

// app.use(express.urlencoded({
//     extended: true
// }));

/**
 * Create a new job with parameters provided in the body
 */
 app.post('/jobs', (req, res) => {
    jobs.createJob(req.body.company, req.body.title, req.body.date, req.body.status, req.body.skill, req.body.contact)
        .then(job => {
            res.status(201).json(job);
        })
        .catch(error => {
            console.error(error);
            // In case of an error, send back status code 400 in case of an error.
            // A better approach will be to examine the error and send an
            // error status code corresponding to the error.
            res.status(500).json({ Error: 'Request failed' });
        });
});


/**
 * Retrive the job corresponding to the ID provided in the URL.
 */
 app.get('/jobs/:_id', (req, res) => {
    const jobId = req.params._id;
    jobs.findJobById(jobId)
        .then(job => { 
            if (job !== null) {
                res.json(job);
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }         
         })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });

});

/**
 * Retrieve jobs. 
 * If the query parameters include a year, then only the jobs for that year are returned.
 * Otherwise, all jobs are returned.
 */
 app.get('/jobs', (req, res) => {
    let filter = {};
    // Is there a query parameter named year? If so add a filter based on its value.
    if(req.query.year !== undefined){
        filter = { year: req.query.year };
    }
    jobs.findJobs(filter, '', 0)
        .then(jobs => {
            res.json(jobs);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });

});

/**
 * Update the job whose id is provided in the path parameter and set
 * its info to the values provided in the body.
 */
 app.put('/jobs/:_id', (req, res) => {
    jobs.replaceJob(req.params._id, req.body.company, req.body.title, req.body.date, req.body.status, req.body.skill, req.body.contact,)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, company: req.body.company, title: req.body.title, date: req.body.date, status: req.body.status, skill: req.body.skill, contact: req.body.contact })
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

/**
 * Delete the job whose id is provided in the query parameters
 */
 app.delete('/jobs/:_id', (req, res) => {
    jobs.deleteById(req.params._id)
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
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});