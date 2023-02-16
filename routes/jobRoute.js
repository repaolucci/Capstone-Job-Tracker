const { createJobs, readJobs, updateJobs, deleteJobs } = require('../controllers/jobController.js');
const express = require('express');

const router = express.Router();

router.post('/jobs',createJobs )
router.get('/jobs', readJobs);
router.put('/jobs/:_id', updateJobs);
router.delete('/jobs/:_id', deleteJobs);

module.exports = router;