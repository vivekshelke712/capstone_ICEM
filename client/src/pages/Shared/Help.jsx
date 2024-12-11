import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useGetAllOrgnizationQuery } from '../../redux/api/orgAPI';

const Help = () => {
  const [availableOrganizations, setAvailableOrganizations] = useState([]);
  const [city, setCity] = useState('');
  
  // Fetching all organizations using RTK Query
  const { data: allOrganizations } = useGetAllOrgnizationQuery();
  const {user} = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      needType: '',
      contact: '',
      description: '',
      city: '',
      organization: '',
      email: user.email,
      isApproved: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      age: Yup.number()
        .required('Age is required')
        .min(1, 'Age must be at least 1')
        .max(100, 'Age must be below 100'),
      needType: Yup.string().required('Need Type is required'),
      contact: Yup.string().required('Contact number is required'),
      description: Yup.string().required('Description is required'),
      city: Yup.string().required('City is required'),
      organization: Yup.string().required('Organization is required'),
    }),
    onSubmit: async (values) => {
      console.log('Form Values:', values);
      // You can add your API call logic here
    },
  });

  // Handle change of selected city and filter organizations
  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);

    // Filter organizations based on the selected city
    const filteredOrganizations = allOrganizations?.filter(
      (org) => org.city === selectedCity
    );
    setAvailableOrganizations(filteredOrganizations || []);
    formik.setFieldValue('city', selectedCity); // Update city in Formik
    formik.setFieldValue('organization', ''); // Reset organization field when city changes
  };

  return<>
  {
    <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Help Request Form</h2>
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      {/* Name and Age Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>

        <div>
          <label htmlFor="needType" className="block text-sm font-semibold">Need Type:</label>
          <select
            id="needType"
            name="needType"
            value={formik.values.needType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Need Type</option>
            <option value="AnimalShelter">Animal Shelter</option>
            <option value="EducationalHelp">Educational Help</option>
            <option value="OldAgeHome">Old Age Home</option>
          </select>
          {formik.touched.needType && formik.errors.needType && (
            <div className="text-red-500 text-sm">{formik.errors.needType}</div>
          )}
        </div>
      </div>

      {/* Contact and Description Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact" className="block text-sm font-semibold">Contact Number:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {formik.touched.contact && formik.errors.contact && (
            <div className="text-red-500 text-sm">{formik.errors.contact}</div>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-semibold">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          />
          {formik.touched.description && formik.errors.description && (
            <div className="text-red-500 text-sm">{formik.errors.description}</div>
          )}
        </div>
      </div>

      {/* City and Organization Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-semibold">City:</label>
          <select
            id="city"
            name="city"
            value={formik.values.city}
            onChange={handleCityChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select City</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
          </select>
          {formik.touched.city && formik.errors.city && (
            <div className="text-red-500 text-sm">{formik.errors.city}</div>
          )}
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-semibold">Select Organization:</label>
          <select
            id="organization"
            name="organization"
            value={formik.values.organization}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Organization</option>
            {availableOrganizations.length > 0 ? (
              availableOrganizations.map((org) => (
                <option key={org.id} value={org.name}>
                  {org.orgName}
                </option>
              ))
            ) : (
              <option disabled>No organizations available</option>
            )}
          </select>
          {formik.touched.organization && formik.errors.organization && (
            <div className="text-red-500 text-sm">{formik.errors.organization}</div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Submit Request
        </button>
      </div>
    </form>
  </div>
  }
  
  </>;
};

export default Help;
