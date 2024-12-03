import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import { ToastContainer, toast } from 'react-toastify';
import 'leaflet/dist/leaflet.css';
import 'react-toastify/dist/ReactToastify.css';

const Help = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [locationFetched, setLocationFetched] = useState(false);
  const [map, setMap] = useState(null);

  // Fetch user's current location using geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          setLocationFetched(true);
        },
        (error) => {
          console.error(error);
          toast.error('Unable to fetch your location!');
        }
      );
    } else {
      toast.error('Geolocation is not supported by your browser!');
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !lat || !lng) {
      toast.error('Please provide all the details including location!');
      return;
    }

    const helpRequest = {
      name,
      description,
      location: { lat, lng },
    };

    // Initialize or update the map
    if (map) {
      map.remove();
    }

    const newMap = L.map('map').setView([lat, lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(newMap);
    L.marker([lat, lng])
      .addTo(newMap)
      .bindPopup('Help Needed Here!')
      .openPopup();

    setMap(newMap);
    setName('');
    setDescription('');
    toast.success('Help request submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Help the Needy</h1>

      {/* Help Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold text-gray-700 mb-2">Name of Needy Person</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-semibold text-gray-700 mb-2">Description of Help Needed</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>

        {/* Location Section */}
        <div className="flex flex-col">
          <label htmlFor="location" className="text-lg font-semibold text-gray-700 mb-2">Location</label>
          {locationFetched ? (
            <p className="text-gray-600">Latitude: {lat}, Longitude: {lng}</p>
          ) : (
            <p className="text-gray-600">Fetching your location...</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Help Request
        </button>
      </form>

      {/* Displaying the Map */}
      {lat && lng && (
        <div className="mt-8 w-full max-w-lg bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Help Location on Map</h2>
          <div id="map" style={{ height: '400px', width: '100%' }}></div>
        </div>
      )}

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Help;
