const mongoose = require("mongoose");

const orgSchema = new mongoose.Schema(
  {
    orgName: {
      type: String,
      required: true,
    },
    orgEmail: {
      type: String,
      required: true,
      unique: true,
    },
    number: {
      type: Number,
      required: true,
    },
    registrationNumber: {
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
    },
    description: {
      type: String,
      required: true,
    },
    orgType: {
      type: String,
      required: true,
      enum: ["AnimalShelter", "OldAgeHome", "EducationalHelp"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user", // Reference to the User model
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("organization", orgSchema);
