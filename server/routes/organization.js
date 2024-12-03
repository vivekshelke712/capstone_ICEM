const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');

// Route to create an organization
router.post('/create-organization/:userId', organizationController.createOrganization);

module.exports = router;
