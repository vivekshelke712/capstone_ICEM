import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';

const OrganizationRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    role: 'organization', // Pre-set role
    orgName: '',
    orgType: '',
    registrationNumber: '',
    contactPerson: '',
    contactInfo: '',
    address: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API call logic
    alert('Organization details have been submitted successfully!');
    setFormData({
      name: '',
      email: '',
      number: '',
      password: '',
      role: 'organization',
      orgName: '',
      orgType: '',
      orgService:'',
      registrationNumber: '',
      contactPerson: '',
      contactInfo: '',
      address: '',
      city:'',
      description: '',
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        <section className="text-center py-16 bg-blue-600 text-white">
          <h1 className="text-4xl font-bold">Organization Registration</h1>
          <p className="text-lg mt-4">Help us connect your organization to those in need.</p>
        </section>

        <section className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-semibold text-center">Register Your Organization</h2>
          <p className="text-lg mt-4 text-center text-gray-700">
            Fill in the form below to become a part of AidBridge.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col mt-4">
              <label htmlFor="email" className="text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Number Field */}
            <div className="flex flex-col mt-4">
              <label htmlFor="number" className="text-lg font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col mt-4">
              <label htmlFor="password" className="text-lg font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Create a password"
                required
              />
            </div>

            {/* Role Field (Hidden/Pre-set) */}
            <input type="hidden" name="role" value={formData.role} />

            {/* Organization Name */}
            <div className="flex flex-col mt-4">
              <label htmlFor="orgName" className="text-lg font-medium text-gray-700">
                Organization Name
              </label>
              <input
                type="text"
                id="orgName"
                name="orgName"
                value={formData.orgName}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your organization name"
                required
              />
            </div>

            {/* Organization Type */}
            <div className="flex flex-col mt-4">
              <label htmlFor="orgType" className="text-lg font-medium text-gray-700">
                Organization Type
              </label>
              <select
                id="orgType"
                name="orgType"
                value={formData.orgType}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Type</option>
                <option value="NGO">NGO</option>
                <option value="Corporate">Corporate</option>
                <option value="Government">Government</option>
                <option value="Individual">Individual</option>
              </select>
            </div>

            {/* Additional Fields (Registration Number, Contact Person, etc.) */}
            {/* Keep existing fields here... */}
            <div className="flex flex-col mt-4">
              <label htmlFor="orgType" className="text-lg font-medium text-gray-700">
                Please Select What you can provide 
              </label>
              <select
                id="orgType"
                name="orgType"
                value={formData.orgService}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Type</option>
                {/* <option value="NGO">NGO</option> */}
                <option value="animalShelter">Animal Shelter</option>
                <option value="oldAgeHome">oldAgeHome</option>
                <option value="Shelter">Shelter</option>
              </select>
            </div>
            

            <div className="flex flex-col mt-4">
              <label htmlFor="registrationNumber" className="text-lg font-medium text-gray-700">
                Registration Number
              </label>
              <input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter registration number"
                required
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="contactPerson" className="text-lg font-medium text-gray-700">
                Contact Person
              </label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter the name of the contact person"
                required
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="contactInfo" className="text-lg font-medium text-gray-700">
                Contact Information
              </label>
              <input
                type="text"
                id="contactInfo"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter phone number or email"
                required
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="address" className="text-lg font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
                rows="3"
                placeholder="Enter the organization's address"
                required
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="city" className="text-lg font-medium text-gray-700">
                Enter City
              </label>
              <input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
                rows="3"
                placeholder="Enter the organization's City, use First letter Capital"
                required
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="description" className="text-lg font-medium text-gray-700">
                Brief Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Provide a short description of your organization"
              />
            </div>


            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Register Organization
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default OrganizationRegistration;
