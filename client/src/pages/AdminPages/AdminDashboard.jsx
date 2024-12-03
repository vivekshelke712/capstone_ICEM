import React from "react";

const  AdminDashboard = () => {
  // Sample data for the dashboard
  const statistics = {
    users: 150,
    organizations: 20,
    requests: 45,
    pendingRequests: 10,
  };

  const pendingRequests = [
    {
      id: 201,
      title: "School Supplies for Rural Area",
      submittedBy: "John Doe",
      date: "2024-11-30",
    },
    {
      id: 202,
      title: "Medical Assistance for Old Age Home",
      submittedBy: "Jane Smith",
      date: "2024-11-28",
    },
  ];

  const users = [
    { id: 1, name: "John Doe", role: "Volunteer", email: "john@example.com" },
    { id: 2, name: "Jane Smith", role: "Admin", email: "jane@example.com" },
  ];

  const notifications = [
    "5 new requests have been submitted for review.",
    "A new organization has registered: Helping Hands.",
    "Scheduled maintenance on December 5th at 2 AM.",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="bg-white shadow p-4 mb-6 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Manage the AidBridge Platform</p>
      </header>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {Object.entries(statistics).map(([key, value], index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
            <h2 className="text-xl font-semibold text-gray-800 capitalize">{key}</h2>
            <p className="text-3xl font-bold text-blue-500">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Requests */}
        <div className="bg-white p-4 rounded-lg shadow lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Pending Requests</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">#</th>
                <th className="p-2">Title</th>
                <th className="p-2">Submitted By</th>
                <th className="p-2">Date</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingRequests.map((request, index) => (
                <tr key={request.id} className="border-b">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{request.title}</td>
                  <td className="p-2">{request.submittedBy}</td>
                  <td className="p-2">{request.date}</td>
                  <td className="p-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2">
                      Approve
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notifications */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <ul className="text-gray-700 space-y-2">
            {notifications.map((note, index) => (
              <li
                key={index}
                className="p-3 bg-gray-50 rounded shadow-sm hover:bg-gray-100"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Manage Users Section */}
      <div className="bg-white p-4 rounded-lg shadow mt-6">
        <h2 className="text-lg font-semibold mb-4">Manage Users</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">#</th>
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
              <th className="p-2">Email</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-b">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">
                    View
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default  AdminDashboard;
