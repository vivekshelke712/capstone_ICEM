const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
  },
  number: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, 'Phone number must be 10 digits.'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    default: 'organization',
    enum: ['organization', 'admin', 'volunteer'],
  },
  orgName: {
    type: String,
    required: true,
    trim: true,
  },
  orgType: {
    type: String,
    required: true,
    enum: ['NGO', 'Corporate', 'Government', 'Individual'],
  },
  orgService: {
    type: String,
    required: true,
    enum: ['Animal Shelter', 'Old Age Home', 'Shelter'],
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  contactPerson: {
    type: String,
    required: true,
    trim: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;
