import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetUserRequestsQuery } from '../../redux/api/userApi';

const ViewUserRequest = () => {
  const { user } = useSelector((state) => state.user); // Access user from Redux store

  // Ensure user exists and has an id
  if (!user || !user.id) {
    return <div>Loading user data...</div>;
  }

  const userId = String(user.id); // Ensure userId is a string
  const { data, isLoading, isError, error } = useGetUserRequestsQuery(userId); // API call to get user requests

  useEffect(() => {
    if (data) {
      console.log("Fetched user requests:", data);
    }
  }, [data]);

  // Handle loading state
  if (isLoading) return <div className="text-center p-4">Loading your requests...</div>;

  // Handle error state
  if (isError) {
    return (
      <div className="text-center p-4 text-red-500">
        Error: {error?.data?.message || error?.message || "Something went wrong"}
      </div>
    );
  }

  // Render the table if data is available
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Requests</h1>
      {data && data.data.length > 0 ? (
        <table className="min-w-full border-collapse table-auto my-6 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Age</th>
              <th className="px-4 py-2 text-left">Need Type</th>
              <th className="px-4 py-2 text-left">Contact</th>
              <th className="px-4 py-2 text-left">City</th>
              <th className="px-4 py-2 text-left">Area</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((request, index) => (
              <tr key={request._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{request.name}</td>
                <td className="px-4 py-2">{request.age}</td>
                <td className="px-4 py-2">{request.needType}</td>
                <td className="px-4 py-2">{request.contact}</td>
                <td className="px-4 py-2">{request.city}</td>
                <td className="px-4 py-2">{request.area}</td>
                <td className="px-4 py-2">{request.isApproved ? 'Approved' : 'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center p-4 text-gray-500">No requests found.</div> // If no requests data
      )}
    </div>
  );
};

export default ViewUserRequest;
