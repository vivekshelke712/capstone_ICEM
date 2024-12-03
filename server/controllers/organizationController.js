const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const Organization = require("../models/Organization");

exports.organizationRegister = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    role,
    number,
    orgName,
    orgType,
    orgService,
    registrationNumber,
    contactPerson,
    contactInfo,
    address,
    city,
    description,
  } = req.body;

  // Input validation
  if (!name || !email || !password || !number || !orgName || !orgType || !orgService || !registrationNumber || !contactPerson || !contactInfo || !address || !city) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Please provide a valid email" });
  }
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({ message: "Please enter a strong password (at least 6 characters, one uppercase letter, one symbol)" });
  }
  if (!validator.isMobilePhone(number, "en-IN")) {
    return res.status(400).json({ message: "Please enter a valid 10-digit phone number" });
  }
  if (role && !["organization", "admin", "volunteer"].includes(role)) {
    return res.status(400).json({ message: "Role must be one of: 'organization', 'admin', or 'volunteer'" });
  }

  // Check if the email is already registered
  const existingOrganization = await Organization.findOne({ email });
  if (existingOrganization) {
    return res.status(400).json({ message: "Organization already exists with this email" });
  }

  // Hash the password
  const hashPass = await bcrypt.hash(password, 10);

  // Create a new organization
  const organization = await Organization.create({
    name,
    email,
    password: hashPass,
    role: role || "organization", // Default to 'organization' if not provided
    number,
    orgName,
    orgType,
    orgService,
    registrationNumber,
    contactPerson,
    contactInfo,
    address,
    city,
    description,
  });

  // Respond with success message
  res.status(201).json({ message: "Organization registered successfully", data: organization });
});
