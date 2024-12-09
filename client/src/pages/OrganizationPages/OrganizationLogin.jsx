import React, { useState } from "react";
import { useOrgLoginMutation } from "../../redux/api/orgAuthApi";
import { Link } from "react-router-dom";

const OrganizationLogin = () => {
  const [formData, setFormData] = useState({
    orgEmail: "",
    password: "",
  });
  const[OrgLogin,{isError,isSuccess,error}] = useOrgLoginMutation()

  // Update state on input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (empty for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    OrgLogin(formData)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Organization Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="orgEmail"
            value={formData.orgEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
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
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-center text-gray-600">
            Are you a New Organization?{' '}
            <Link
              to="/orgregister"
              className="text-indigo-600 hover:underline font-medium"
            >
              Log in here
            </Link>

          </p>
      </form>
    </div>
  );
};

export default OrganizationLogin;
