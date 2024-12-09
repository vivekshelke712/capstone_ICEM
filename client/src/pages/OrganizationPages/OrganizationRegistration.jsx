import React, { useState } from "react";
import { useOrgRegisterMutation } from "../../redux/api/orgAuthApi";
import { Link } from "react-router-dom";

const OrganizationRegistration = () => {
  const [formData, setFormData] = useState({
    orgName: "",
    orgEmail: "",
    password: "",
    role: "organization",
    number: "",
    registrationNumber: "",
    address: "",
    city: "",
    description: "",
  });

  // Update state on input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [OrgRegister,{isSuccess,isError,error}] = useOrgRegisterMutation()
  // Handle form submission (empty for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    OrgRegister(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Organization Registration
        </h2>

        {/* Organization Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Organization Name
          </label>
          <input
            type="text"
            name="orgName"
            value={formData.orgName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter organization name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="orgEmail"
            value={formData.orgEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter organization email"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter a strong password"
          />
        </div>

        {/* Role */}
      

        {/* Contact Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Contact Number
          </label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter contact number"
          />
        </div>

        {/* Registration Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Registration Number
          </label>
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter registration number"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter address"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter city"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter a short description"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Register
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link
              to="/orgLogin"
              className="text-indigo-600 hover:underline font-medium"
            >
              Log in here
            </Link>

          </p>
      </form>
    </div>
  );
};

export default OrganizationRegistration;
