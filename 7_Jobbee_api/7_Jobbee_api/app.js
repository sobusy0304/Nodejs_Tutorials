const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/database');

// Setting up config.env file variables.
dotenv.config({path : './config/config.env'});

// Connect to database
connectDB();

const jobs = require('./routes/jobs');
const connectDatabase = require('./config/database');

app.use('/api/v1', jobs);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});  