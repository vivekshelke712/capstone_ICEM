const AsyncHandler = require('express-async-handler');
const HelpRequest = require('../models/HelpRequest');
const Organization = require('../models/Organization');
const User = require('../models/user'); // Import the User model

// Controller to create a new help request
exports.createHelpRequest = AsyncHandler(async (req, res) => {
    const {
        name,
        age,
        needType,
        contact,
        description,
        city,
        organization, // This should be the organization ID
        user, // This should be the user ID
        email,
        isApproved,
    } = req.body;

    // Check if the organization exists
    const orgExists = await Organization.findById(organization);
    if (!orgExists) {
        return res.status(400).json({ message: 'Organization not found' });
    }

    // Check if the user exists
    const userExists = await User.findById(user);
    if (!userExists) {
        return res.status(400).json({ message: 'User  not found' });
    }

    const helpRequest = await HelpRequest.create({
        name,
        age,
        needType,
        contact,
        description,
        city,
        organization, // Store the organization ID
        user, // Store the user ID
        email,
        isApproved,
    });

    res.status(201).json({
        message: 'Help request created successfully',
        helpRequest,
    });
});