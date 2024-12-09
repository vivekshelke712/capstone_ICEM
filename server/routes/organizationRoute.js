const express = require("express")
const {getAllOrganizations, getOrganizationsByCity, getAllCities} = require('../controllers/organizationController')
const router = express.Router()

router.get('/getAllOrganizations',getAllOrganizations)
router.get('/getOrganizationbyCity/:city', getOrganizationsByCity);
router.get('/getAllCities', getAllCities);


module.exports = router
