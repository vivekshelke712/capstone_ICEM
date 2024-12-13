const asyncHandler = require("express-async-handler");
const HelpRequest = require("../models/HelpRequest");

// Controller to get all requests for a specific user
const getUserRequests = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  // Fetch requests from the database based on the userId
  const data = await HelpRequest.find({ userId });

  if (!data) {
    res.status(404).json({ message: "No requests found for this user." });
  } else {
    // Return the data in the response
    res.status(200).json({ data });
  }
});

module.exports = { getUserRequests };
