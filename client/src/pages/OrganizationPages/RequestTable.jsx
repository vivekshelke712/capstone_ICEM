import React, { useEffect, useState } from 'react';

const RequestTable = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy data for testing
  const dummyData = [
    { id: 1, description: "Food delivery for shelter home", status: "Pending" },
    { id: 2, description: "Clothing drive request", status: "Pending" },
    { id: 3, description: "Medical supplies for orphanage", status: "Approved" },
  ];

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setRequests(dummyData);
      setLoading(false);
    }, 1000); // 1-second delay to simulate loading
  }, []);

  const handleApprove = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: "Approved" } : request
      )
    );
  };

  const handleReject = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: "Rejected" } : request
      )
    );
  };

  if (loading) {
    return <p>Loading requests...</p>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Requests</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td className="border border-gray-300 px-4 py-2">{request.id}</td>
              <td className="border border-gray-300 px-4 py-2">{request.description}</td>
              <td className="border border-gray-300 px-4 py-2">{request.status}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleApprove(request.id)}
                  disabled={request.status !== "Pending"}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleReject(request.id)}
                  disabled={request.status !== "Pending"}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
