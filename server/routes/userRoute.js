// const { register, login, logout } = require('../controllers/authController')

const { getAllJobs, createResume, getJobDetails, createJobApplication } = require('../controllers/userController')

const router = require('express').Router()

router 
    .get("/getJobs", getAllJobs)
    .post('/add-resume', createResume)
    .get('/getJobDetails/:jobId', getJobDetails)
    .post('/applyforjob', createJobApplication);
 
    
module.exports = router    