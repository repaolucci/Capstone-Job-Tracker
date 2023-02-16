// Imports
const db = require ('./connection.js')
const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const jobRoutes = require('./routes/jobRoute');
const path = require('path');


// Constants
const PORT = process.env.PORT;
const app = express();

app.use(express.json());

//app.get('/', (req, res) => {
//    res.send('API Running');
//});


app.use(jobRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "build", "index.html"))
    })
}
else {
    app.get("/", (req, res) => {
        res.send("API Running");
    })
}

// Confirm sever is running
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

