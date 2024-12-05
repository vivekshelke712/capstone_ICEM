import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const user = {
    name: "John Doe", // Replace with actual user data from your state/store
    email: "johndoe@example.com",
    role: "user",
  };

  const registeredCases = [
    {
      id: 1,
      title: "Food Assistance",
      status: "Pending",
    },
    {
      id: 2,
      title: "Medical Help",
      status: "Approved",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Welcome, {user.name}!</h1>
          <p className="text-gray-500">Email: {user.email}</p>
          <p className="text-gray-500">Role: {user.role}</p>
        </div>

        {/* Dashboard Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Link
            to="/submit-case"
            className="bg-blue-500 text-white text-center py-4 rounded-lg shadow hover:bg-blue-600"
          >
            Submit a New Case
          </Link>
          <Link
            to="/view-requests"
            className="bg-green-500 text-white text-center py-4 rounded-lg shadow hover:bg-green-600"
          >
            View All Requests
          </Link>
          <Link
            to="/contact-support"
            className="bg-purple-500 text-white text-center py-4 rounded-lg shadow hover:bg-purple-600"
          >
            Contact Support
          </Link>
        </div>

        {/* Registered Cases */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Registered Cases</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Case ID</th>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {registeredCases.length > 0 ? (
                registeredCases.map((caseItem) => (
                  <tr key={caseItem.id}>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {caseItem.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{caseItem.title}</td>
                    <td
                      className={`border border-gray-300 px-4 py-2 text-center ${
                        caseItem.status === "Approved"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {caseItem.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                  >
                    No cases registered yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
