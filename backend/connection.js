// Import required packages
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

// Establish variables
const URL = process.env.ATLAS_URL

// Establish connection string to MondoDB server
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to to the database
const db = mongoose.connection;

// The open event is called when the database connection successfully opens
db.once('open', () => {
     console.log('Successfully connected to MongoDB using Mongoose!');
 });

module.exports = { db }; 