const expressAsyncHandler = require('express-async-handler');
const HelpRequest = require('../models/HelpRequest');
const Organization = require('../models/Organization');
const User = require('../models/user');

// Controller to fetch help requests by email
module.exports.getHelpRequestByEmail = expressAsyncHandler(async (req, res) => {
  const { email } = req.params;

  const requests = await HelpRequest.find({ email });
  if (!requests.length) {
      res.status(404).json({ message: 'No help requests found for this email' });
  } else {
      res.status(200).json({ data: requests });
  }
});

// Controller to create and store a new help request
module.exports.createHelpRequest = expressAsyncHandler(async (req, res) => {
  const { name, age, needType, contact, description, city, area, organization, latitude, longitude, userId, orgId, email } = req.body;

  // Check if required fields are missing
  if (!name || !age || !needType || !contact || !description || !city || !area || !organization || !latitude || !longitude || !userId || !orgId || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Validate userId and orgId to be valid ObjectId strings
  // if (!User.isValidObjectId(userId)) {
  //   return res.status(400).json({ message: 'Invalid user ID format' });
  // }

  // if (!Organization.isValidObjectId(orgId)) {
  //   return res.status(400).json({ message: 'Invalid organization ID format' });
  // }

  // Check if the user exists
  const user = await User.findById(userId);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Check if the organization exists
  const org = await Organization.findById(orgId);
  if (!org) {
    return res.status(400).json({ message: 'Organization not found' });
  }

  // Create a new help request
  const newHelpRequest = new HelpRequest({
    name,
    age,
    email,
    needType,
    contact,
    description,
    city,
    area,
    organization,
    latitude,
    longitude,
    userId,
    orgId,
  });

  // Save the new help request to the database
  await newHelpRequest.save();

  // Return success response
  return res.status(201).json({
    message: 'Help request created successfully',
    data: newHelpRequest,
  });
});
