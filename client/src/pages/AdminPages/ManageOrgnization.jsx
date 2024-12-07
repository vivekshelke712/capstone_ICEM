// src/components/OrganizationManagement.js

import React, { useState } from 'react';

const OrganizationManagement = () => {
  // Dummy data for organizations
  const [organizations, setOrganizations] = useState([
    { id: 1, name: 'Helping Hands', location: 'Pune', members: 120 },
    { id: 2, name: 'Hope Foundation', location: 'Mumbai', members: 80 },
    { id: 3, name: 'Green Earth', location: 'Delhi', members: 150 },
  ]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-gray-800">Organization Management</h1>

      {/* Organization List */}
      <div className="mt-8 bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Manage Organizations</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Location</th>
              <th className="border px-4 py-2 text-left">Members</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((org) => (
              <tr key={org.id}>
                <td className="border px-4 py-2">{org.id}</td>
                <td className="border px-4 py-2">{org.name}</td>
                <td className="border px-4 py-2">{org.location}</td>
                <td className="border px-4 py-2">{org.members}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrganizationManagement;
