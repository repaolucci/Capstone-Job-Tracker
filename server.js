// Imports
const db = require ('./backend/connection.js')
const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const jobRoutes = require('./backend/routes/jobRoute');


// Constants
const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Running');
});

app.use(jobRoutes);

// Confirm sever is running
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

