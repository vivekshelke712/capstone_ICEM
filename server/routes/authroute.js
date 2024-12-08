const { register, login, logout } = require('../controllers/authController')

const router = require('express').Router()

router 
    .post("/register", register)
    // .post("/register/organization", organizationRegister)
    .post("/login", login)
    .post("/logout", logout)
    
module.exports = router    