const asyncHandler = require("express-async-handler");
const User = require("../models/user");

// Controller to get a specific organization by email
exports.getOrganizationByEmail = asyncHandler(async (req, res) => {
  const { email } = req.params; // Get email from route parameters
  
  try {
    // Fetch the user with role 'organization' and the specified email
    const organization = await User.findOne({ email, role: "organization" });

    if (!organization) {
      return res.status(404).json({ message: "Organization not found" });
    }

    res.status(200).json({
      message: "Organization fetched successfully",
      data: organization,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
