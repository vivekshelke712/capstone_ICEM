const express = require("express");
const HelpRequest = require("../models/HelpRequest");

const router = express.Router()

router.post('/request',HelpRequest)

module.exports = router
