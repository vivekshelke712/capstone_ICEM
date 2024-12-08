const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "organization"], // Can be either "user" or "organization"
      required: true,
    },
    orgName: {
      type: String,
      required: function () {
        return this.role === "organization"; // Only required for organizations
      },
    },
    orgType: {
      type: String,
      required: function () {
        return this.role === "organization"; // Only required for organizations
      },
    },
    orgService: {
      type: String,
      required: function () {
        return this.role === "organization"; // Only required for organizations
      },
    },
    registrationNumber: {
      type: String,
      required: function () {
        return this.role === "organization"; // Only required for organizations
      },
    },
    contactPerson: {
      type: String,
      required: function () {
        return this.role === "organization"; // Only required for organizations
      },
    },
    contactInfo: {
      type: String,
      required: function () {
        return this.role === "organization"; // Only required for organizations
      },
    },
    address: {
      type: String,
      required: function () {
        return this.role === "organization"; // Only required for organizations
      },
    },
    city: {
      type: String,
      required: function () {
        return this.role === "organization"; // Only required for organizations
      },
    },
    description: {
      type: String,
      required: function () {
        return this.role === "organization"; // Only required for organizations
      },
    },
    Active: {
      type: Boolean,
      default: true,
    },
    profileStatus: {
      type: Boolean,
      default: true, // Default to true for users
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
