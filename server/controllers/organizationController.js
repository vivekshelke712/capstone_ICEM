const expressAsyncHandler = require('express-async-handler');
const Organization = require('../models/Organization');
const user = require('../models/user');


// Create Organization without referencing the user table
exports.createOrganization = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { name, address, website, contactPerson, phone, description } = req.body;

  // Check if the user exists and if their role is 'organization'
  const user = await user.findById(userId);
  if (!user || user.role !== 'organization') {
    res.status(400);
    throw new Error('User not found or not authorized');
  }

  // Create a new organization without referencing the user
  const newOrganization = new Organization({
    name,
    address,
    website,
    contactPerson,
    phone,
    description,
    isActive:true
  });

  await newOrganization.save();

  res.status(201).json({ message: 'Organization created successfully' });
});
