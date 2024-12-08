import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';
import { useSelector } from 'react-redux';  // Import useSelector
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
  const [city, setCity] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_MAPS_API}`, // Replace with your Google Maps API key
  });

  // Access user role from the Redux store
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, currentLocation);
    alert('Details of the needy individual have been submitted!');
    setFormData({
      name: '',
      age: '',
      needType: '',
      contact: '',
      description: '',
    });
  };

  useEffect(() => {
    // Get current location
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
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    fetchCurrentLocation();
  }, []);

  useEffect(() => {
    // Fetch city name using Google Geocoding API
    const fetchCity = async () => {
      if (currentLocation.latitude && currentLocation.longitude) {
        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json`,
            {
              params: {
                latlng: `${currentLocation.latitude},${currentLocation.longitude}`,
                key: `${import.meta.env.VITE_GOOGLE_MAPS_API}`, // Replace with your Google Maps API key
              },
            }
          );
          const results = response.data.results;
          if (results.length > 0) {
            const cityResult = results[0].address_components.find((comp) =>
              comp.types.includes('locality')
            );
            setCity(cityResult ? cityResult.long_name : 'City not found');
          }
        } catch (error) {
          console.error('Error fetching city name:', error);
        }
      }
    };

    fetchCity();
  }, [currentLocation]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        {/* Header Section */}
        <section className="text-center py-16 bg-purple-600 text-white">
          <h1 className="text-4xl font-bold">Help the Needy</h1>
          <p className="text-lg mt-4">Please provide details of the needy individual to offer assistance.</p>
        </section>

        {/* Conditional rendering based on user role */}
        {user?.role === 'user' ? (
          // If user is logged in and has role 'user', show the form
          <section className="max-w-4xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-semibold text-center">Submit Needy Individual's Details</h2>
            <p className="text-lg mt-4 text-center text-gray-700">
              Fill in the form below to help us connect with organizations or volunteers who can assist.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Form fields for submitting needy details */}
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
        ) : (
          // If user is not logged in or doesn't have the required role
          <section className="max-w-4xl mx-auto py-16 px-4 text-center">
            <h2 className="text-3xl font-semibold text-center text-gray-700">Log in  to Help the Needy</h2>
            <p className="text-lg mt-4">Please Log in to provide assistance to needy individuals. Your help is much appreciated!</p>
            <button
              onClick={() => window.location.href = '/userLogin'}  // Redirect to signup page
              className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Log In
            </button>
          </section>
        )}

        {/* Google Map Section */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-semibold text-center">Location</h2>
          {isLoaded ? (
            <GoogleMap
              center={{
                lat: currentLocation.latitude || 0,
                lng: currentLocation.longitude || 0,
              }}
              zoom={13}
              mapContainerStyle={{ height: '400px', width: '100%' }}
            >
              {currentLocation.latitude && currentLocation.longitude && (
                <Marker
                  position={{
                    lat: currentLocation.latitude,
                    lng: currentLocation.longitude,
                  }}
                />
              )}
            </GoogleMap>
          ) : (
            <p>Loading Map...</p>
          )}
          {city && <p className="text-center mt-4">City: {city}</p>}
        </section>

        {/* Footer Section */}
        <footer className="bg-purple-600 py-6 text-white text-center">
          <p>&copy; 2024 AidBridge. All rights reserved.</p>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default Help;
