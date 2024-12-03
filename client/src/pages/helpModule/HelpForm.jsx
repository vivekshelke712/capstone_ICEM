// HelpForm.js
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const HelpForm = ({ onLocationSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [locationFetched, setLocationFetched] = useState(false);

  // Fetch user's current location
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

    onLocationSubmit(helpRequest);
    setName('');
    setDescription('');
    toast.success('Help request submitted!');
  };

  return (
    <div>
      <h2>Help Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name of Needy Person</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description of Help Needed</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          {locationFetched ? (
            <p>
              Latitude: {lat}, Longitude: {lng}
            </p>
          ) : (
            <p>Fetching your location...</p>
          )}
        </div>

        <button type="submit">Submit Help Request</button>
      </form>
    </div>
  );
};

export default HelpForm;
