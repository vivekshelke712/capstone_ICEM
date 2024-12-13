const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/adminController'); // Adjust the path

router.get('/getAllUsers', getAllUsers);

module.exports = router;
