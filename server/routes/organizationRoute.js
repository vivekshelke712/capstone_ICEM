const { organizationRegister } = require('../controllers/organizationController');

const router = require('express').Router();

// Register route for organizations
router.post("/orgRegister", organizationRegister);

module.exports = router;
