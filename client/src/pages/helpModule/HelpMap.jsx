// HelpMap.js
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const HelpMap = ({ location }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!location || !location.lat || !location.lng) return;

    if (map) {
      map.remove();
    }

    const newMap = L.map('map').setView([location.lat, location.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(newMap);
    L.marker([location.lat, location.lng])
      .addTo(newMap)
      .bindPopup('Help Needed Here!')
      .openPopup();

    setMap(newMap);
  }, [location, map]);

  return (
    <div>
      <h2>Help Location on Map</h2>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default HelpMap;
