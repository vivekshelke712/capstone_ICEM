// models/Organization.js
const mongoose = require("mongoose");

const organizationSchema = mongoose.Schema({
  orgName: { type: String, required: true },
  orgType: { type: String, required: true },
  orgService: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  contactPerson: { type: String, required: true },
  contactInfo: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Organization", organizationSchema);
