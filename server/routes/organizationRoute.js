const express = require("express");
const { getOrganizationByEmail } = require("../controllers/organizationController");
const router = express.Router();

// Route to get an organization by email
router.get("/organization/:email", getOrganizationByEmail);

module.exports = router;
