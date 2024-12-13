import React, { useState, useRef } from 'react';

const Test = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const mapRef = useRef(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          setErrorMessage('Unable to retrieve your location');
        }
      );
    } else {
      setErrorMessage('Geolocation is not supported by this browser.');
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'latitude') {
      setLatitude(e.target.value);
    } else if (e.target.name === 'longitude') {
      setLongitude(e.target.value);
    }
  };

  const redirectToGoogleMaps = () => {
    if (latitude && longitude) {
      const origin = userLocation
        ? `${userLocation.lat},${userLocation.lng}`
        : '';
      const destination = `${latitude},${longitude}`;
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
      window.open(googleMapsUrl, '_blank');
    } else {
      setErrorMessage('Please provide both latitude and longitude.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Get Directions</h1>
      {userLocation && (
        <p>Your location: {userLocation.lat}, {userLocation.lng}</p>
      )}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <div className="mb-4">
        <label className="block text-sm font-medium">Latitude:</label>
        <input
          type="text"
          name="latitude"
          value={latitude}
          onChange={handleChange}
          className="mt-1 p-2 border rounded"
          placeholder="Enter latitude"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Longitude:</label>
        <input
          type="text"
          name="longitude"
          value={longitude}
          onChange={handleChange}
          className="mt-1 p-2 border rounded"
          placeholder="Enter longitude"
        />
      </div>

      <button
        onClick={getUserLocation}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
      >
        Get My Location
      </button>

      <button
        onClick={redirectToGoogleMaps}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Open in Google Maps
      </button>

      <div ref={mapRef} className="mt-6" style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
};

export default Test;
    