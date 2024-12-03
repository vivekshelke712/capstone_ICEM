import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';

const Help = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    needType: '',
    contact: '',
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
  
    console.log(formData);
    alert('Details of the needy individual have been submitted!');
    setFormData({
      name: '',
      age: '',
      needType: '',
      contact: '',
      description: '',
    });
  };

  return <>
    <Navbar />
    <div className="bg-gray-50">
      {/* Header Section */}
      <section className="text-center py-16 bg-purple-600 text-white">
        <h1 className="text-4xl font-bold">Help the Needy</h1>
        <p className="text-lg mt-4">Please provide details of the needy individual to offer assistance.</p>
      </section>

      {/* Help Form Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-center">Submit Needy Individual's Details</h2>
        <p className="text-lg mt-4 text-center text-gray-700">
          Fill in the form below to help us connect with organizations or volunteers who can assist.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">Needy Individual's Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter the name"
              required
            />
          </div>

          {/* Age Field */}
          <div className="flex flex-col mt-4">
            <label htmlFor="age" className="text-lg font-medium text-gray-700">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter age"
              required
            />
          </div>

          {/* Need Type Field */}
          <div className="flex flex-col mt-4">
            <label htmlFor="needType" className="text-lg font-medium text-gray-700">Type of Need</label>
            <select
              id="needType"
              name="needType"
              value={formData.needType}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Need Type</option>
              <option value="food">Food</option>
              <option value="shelter">Shelter</option>
              <option value="medical">Medical Assistance</option>
              <option value="clothing">Clothing</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Contact Field */}
          <div className="flex flex-col mt-4">
            <label htmlFor="contact" className="text-lg font-medium text-gray-700">Contact Information</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter contact number or email"
              required
            />
          </div>

          {/* Description Field */}
          <div className="flex flex-col mt-4">
            <label htmlFor="description" className="text-lg font-medium text-gray-700">Brief Description of the Need</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Provide more details about the need"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Submit Details
            </button>
          </div>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-purple-600 py-6 text-white text-center">
        <p>&copy; 2024 AidBridge. All rights reserved.</p>
      </footer>
    </div>
    <Footer />
    </>
};

export default Help;