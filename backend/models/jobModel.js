// Imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schema
const jobSchema = new Schema({
    title: { type: String, required: true },
    companyName: { type: String, required: false },
    jobType: { type: String, required: false },
    location: { type: String, required: false },
    locationType: { type: String, required: false },
    dateApplied: { type: String, required: false },
    status: { type: String, required: false },
    skills: { type: Array, required: false },
    contacts: { type: Array, required: false }
});

// Create Model
const Job = mongoose.model("Job", jobSchema);

// Define Create Function
const createJob = async (title, 
                        companyName, 
                        jobType, 
                        location, 
                        locationType, 
                        dateApplied, 
                        status, 
                        skills, 
                        contacts) => {
    
    const job = new Job({ title: title, 
                        companyName: companyName, 
                        jobType: jobType, 
                        location: location, 
                        locationType: locationType, 
                        dateApplied: dateApplied, 
                        status: status, 
                        skills: skills, 
                        contacts: contacts  });
    return job.save();
}

// Define Read Function 
const readJob = async (filter, projection, limit) => {
    const query = Job.find(filter).select(projection).limit(limit);
    return query.exec();
}

// Define Update Function
const updateJob = async (_id, 
                        title, 
                        companyName, 
                        jobType, 
                        location, 
                        locationType, 
                        dateApplied, 
                        status, 
                        skills, 
                        contacts) => {
    
    const result = await Job.updateOne(
                        { _id: _id },
                        { title: title, 
                            companyName: companyName, 
                            jobType: jobType, 
                            location: location, 
                            locationType: locationType, 
                            dateApplied: dateApplied, 
                            status: status, 
                            skills: skills, 
                            contacts: contacts });
                            
    return result.modifiedCount;
}

// Define Delete Function
const deleteJob = async (_id) => {
    const result = await Job.deleteOne({ _id: _id });
    return result.deletedCount;
}

// Export Functions
module.exports = { createJob, readJob, updateJob, deleteJob };
