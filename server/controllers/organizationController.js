const AsyncHandler = require("express-async-handler")
const Organization = require("../models/Organization")

exports.getAllOrganizations = AsyncHandler(async(req,res)=> {
    const result = await Organization.find()
    res.status(200).json({message:"organizations Fetch SuccessFully",result})
} )
exports.getOrganizationsByCity = AsyncHandler(async (req, res) => {
    const { city } = req.params; // Extract city from request parameters

    // Query organizations by city
    const organizations = await Organization.find({ city });

    if (organizations.length === 0) {
        return res.status(404).json({ message: "No organizations found in this city." });
    }

    res.status(200).json({ message: "Organizations fetched successfully", organizations });
});

exports.getAllCities = AsyncHandler(async (req, res) => {
    const cities = await Organization.distinct('city'); // Get unique cities

    if (cities.length === 0) {
        return res.status(404).json({ message: "No cities found." });
    }

    res.status(200).json({ message: "Cities fetched successfully", cities });
});