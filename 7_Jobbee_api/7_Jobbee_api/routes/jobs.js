const express = require('express');
const router = express.Router();

//Importing jobs controller methods
const {getJobs} = require('../controller/jobsController');

router.route('/jobs').get(getJobs);
//router.get('/jobs', (req, res) => {
    
//});

module.exports = router;