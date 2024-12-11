import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useRegisterMutation } from "../../redux/api/authApi";
import { useOrgRegisterMutation } from "../../redux/api/orgAuthApi";

const UserRegistration = () => {
  const [role, setRole] = useState("user"); // Role selection state
  const navigate = useNavigate();

  // User Registration State
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    role: "user",
  });

  // Organization Registration State
  const [orgData, setOrgData] = useState({
    orgName: "",
    orgEmail: "",
    password: "",
    role: "organization",
    number: "",
    registrationNumber: "",
    address: "",
    city: "",
    description: "",
    orgType: "",
  });

  const [register, { isSuccess: userSuccess, isError: userError, error: userErrorData }] =
    useRegisterMutation();
  const [OrgRegister, { isSuccess: orgSuccess, isError: orgError, error: orgErrorData }] =
    useOrgRegisterMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (role === "user") {
      setUserData({ ...userData, [name]: value });
    } else {
      setOrgData({ ...orgData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "user") {
      register(userData);
    } else {
      OrgRegister(orgData);
    }
  };

  useEffect(() => {
    if (userSuccess) {
      toast.success("User registered successfully!");
      navigate("/userLogin");
    }
    if (userError) {
      toast.error(userErrorData?.message || "User registration failed!");
    }

    if (orgSuccess) {
      toast.success("Organization registered successfully!");
      navigate("/orgLogin");
    }
    if (orgError) {
      toast.error(orgErrorData?.message || "Organization registration failed!");
    }
  }, [userSuccess, userError, userErrorData, orgSuccess, orgError, orgErrorData, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>

        {/* Role Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Register as:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="user">User</option>
            <option value="organization">Organization</option>
          </select>
        </div>

        {/* Dynamic Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {role === "user" ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  name="number"
                  value={userData.number}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your password"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Organization Name</label>
                <input
                  type="text"
                  name="orgName"
                  value={orgData.orgName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter organization name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="orgEmail"
                  value={orgData.orgEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter organization email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={orgData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter a strong password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  type="text"
                  name="number"
                  value={orgData.number}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter contact number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Registration Number</label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={orgData.registrationNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter registration number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={orgData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={orgData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={orgData.description}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter organization description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Organization Type</label>
                <select
                  name="orgType"
                  value={orgData.orgType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="" disabled>
                    Select organization type
                  </option>
                  <option value="AnimalShelter">AnimalShelter</option>
                  <option value="OldAgeHome">OldAgeHome</option>
                  <option value="EducationalHelp">EducationalHelp</option>
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
