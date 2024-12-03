// const router = require('./authroute')

const { adminJobPost, getAllUsers } = require('../controllers/adminController')

const router = require('express').Router()

router
    .post("/jobPost", adminJobPost)
    .get('/getAlluser',getAllUsers)
    
module.exports = router    
