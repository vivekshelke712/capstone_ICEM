import React, { useState, useEffect } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import axios from 'axios'; // Assuming you will use axios for API calls
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Help = () => {
  const [availableOrganizations, setAvailableOrganizations] = useState([]);
  const [city, setCity] = useState('');
  const [currentLocation, setCurrentLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_MAPS_API}`,
  });

  const user = useSelector((state) => state.user);

  const staticCityData = {
    Pune: [
      'Food Bank Pune',
      'Shelter Home Pune',
      'Medical Aid Pune',
      'Education for All Pune',
      'Women Empowerment Pune',
    ],
    Mumbai: [
      'Mumbai Food Aid',
      'Mumbai Shelter',
      'Medical Aid Mumbai',
      'Children’s Education Mumbai',
      'Youth Empowerment Mumbai',
    ],
    Delhi: [
      'Delhi Food Assistance',
      'Shelter Homes Delhi',
      'Medical Support Delhi',
      'Women’s Empowerment Delhi',
      'Education for All Delhi',
    ],
    Bangalore: [
      'Bangalore Aid Foundation',
      'Bangalore Shelter Network',
      'Health for Bangalore',
      'Education Bangalore',
      'Empower Bangalore Women',
    ],
    Chennai: [
      'Chennai Food Bank',
      'Chennai Shelter Home',
      'Medical Help Chennai',
      'Chennai Women Empowerment',
      'Chennai Educational Support',
    ],
  };

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
      isApproved: false
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      age: Yup.number()
        .required('Age is required --- if you Dont add a Guess Value')
        .min(1, 'Age must be at least 1')
        .max(100, 'Age must be below 100'),
      needType: Yup.string().required('Need Type is required'),
      contact: Yup.string().required('Contact number is required'),
      description: Yup.string().required('Description is required'),
      city: Yup.string().required('City is required'),
      organization: Yup.string().required('Organization is required'),
      // email: Yup.string().email('Invalid email format').required('Email is required'),
    }),
    onSubmit: async (values) => {
      // Validate age based on needType
      if (values.needType === 'AnimalShelter' && values.age >= 14) {
        formik.setFieldError('age', 'For Animal Shelter, age must be less than 14.');
        return;
      }
      if (values.needType === 'OldAgeHome' && (values.age <= 0 || values.age > 100)) {
        formik.setFieldError('age', 'For Old Age Home, age must be between 1 and 100.');
        return;
      }

      // Assuming you'll use axios to make an API call
      try {
        const response = await axios.post('YOUR_API_ENDPOINT', values);
        console.log(response.data);
        // Reset the form
        formik.resetForm();
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
    },
  });

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    setAvailableOrganizations(staticCityData[selectedCity] || []);
    formik.setFieldValue('city', selectedCity); // Update city in Formik
  };

  // Get current location
  useEffect(() => {
    const fetchCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCurrentLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error fetching current location:', error);
          }
        );
      }
    };

    fetchCurrentLocation();
  }, []);

  return (
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
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>

          {/* Need Type Field (Before Age) */}
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
            {formik.touched.needType && formik.errors.needType ? (
              <div className="text-red-500 text-sm">{formik.errors.needType}</div>
            ) : null}
          </div>

          {/* Age Field */}
          <div>
            <label htmlFor="age" className="block text-sm font-semibold">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {formik.touched.age && formik.errors.age ? (
              <div className="text-red-500 text-sm">{formik.errors.age}</div>
            ) : null}
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
            {formik.touched.contact && formik.errors.contact ? (
              <div className="text-red-500 text-sm">{formik.errors.contact}</div>
            ) : null}
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
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-500 text-sm">{formik.errors.description}</div>
            ) : null}
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
              onChange={(e) => {
                handleCityChange(e);
                formik.handleChange(e);
              }}
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
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-500 text-sm">{formik.errors.city}</div>
            ) : null}
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
              {availableOrganizations.map((organization, index) => (
                <option key={index} value={organization}>{organization}</option>
              ))}
            </select>
            {formik.touched.organization && formik.errors.organization ? (
              <div className="text-red-500 text-sm">{formik.errors.organization}</div>
            ) : null}
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

      {/* Show current location */}
      {currentLocation.latitude && currentLocation.longitude && (
        <div className="mt-4">
          <p>Your Current Location:</p>
          <p>Latitude: {currentLocation.latitude}</p>
          <p>Longitude: {currentLocation.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default Help;
