// Get the mongoose object
import mongoose from 'mongoose';

// Prepare to the database jobs_db in the MongoDB server running locally on port 27017
mongoose.connect(
    "mongodb://localhost:27017/jobs_db",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

// // Tell mongoose to create indexes, which help with faster querying
// mongoose.set('useCreateIndex', true);

/**
 * Define the schema
 */
const jobSchema = mongoose.Schema({
    company: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: String, required: true },
    skill: { type: String, required: true },
    contact: { type: String, required: true },
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Job = mongoose.model("Job", jobSchema);

/**
 * Create a job
 * @param {String} company
 * @param {String} title
 * @param {String} date 
 * @param {String} status 
 * @param {String} skill 
 * @param {String} contact
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */
 const createJob = async (company, title, date, status, skill, contact) => {
    // Call the constructor to create an instance of the model class Job
    const job = new Job({ company: company, title: title, date: date, status: status, skill: skill, contact: contact });
    // Call save to persist this object as a document in MongoDB
    return job.save();
}

/**
 * Retrive jobs based on the filter, projection and limit parameters
 * @param {Object} filter 
 * @param {String} projection 
 * @param {Number} limit 
 * @returns 
 */
const findJobs = async (filter, projection, limit) => {
    const query = Job.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

/**
 * Find the job with the given ID value
 * @param {String} _id 
 * @returns 
 */
const findJobById = async (_id) => {
    const query = Job.findById(_id);
    return query.exec();
}


/**
 * Replace the name, reps, unit properties of the job with the id value provided
 * @param {String} _id 
 * @param {String} company 
 * @param {String} title 
 * @param {String} date 
 * @param {String} status
 * @param {String} skill
 * @param {String} contact
 * @returns A promise. Resolves to the number of documents modified
 */
const replaceJob = async (_id, company, title, date, status, skill, contact) => {
    const result = await Job.replaceOne({ _id: _id },
        { company: company, title: title, date: date, status: status, skill: skill, contact: contact });
    return result.modifiedCount;
}


/**
 * Delete the job with provided id value
 * @param {String} _id 
 * @returns A promise. Resolves to the count of deleted documents
 */
const deleteById = async (_id) => {
    const result = await Job.deleteOne({ _id: _id });
    // Return the count of deleted document. Since we called deleteOne, this will be either 0 or 1.
    return result.deletedCount;
}

export { createJob, findJobs, findJobById, replaceJob, deleteById };
