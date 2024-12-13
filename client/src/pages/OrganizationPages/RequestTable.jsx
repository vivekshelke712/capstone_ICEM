import React from 'react';
import { useSelector } from 'react-redux';
import { useGetAllRequesByEmailQuery } from '../../redux/api/helpApi';

const RequestTable = () => {
  const { user } = useSelector(state => state.user);
  console.log('User:', user);

  if (!user || !user.email) {
    console.log("User not logged in or email not available.");
    return null; // Do not render anything if user is not logged in
  }

  // Trigger query to fetch data
  const { data, error, isLoading } = useGetAllRequesByEmailQuery(user.email);

  // Log the query states
  if (isLoading) {
    console.log("Loading user-specific requests...");
  }

  if (error) {
    console.error("Error loading requests:", error.message);
  }

  // Print the fetched data to the console
  console.log("Fetched data:", data);

  // Ensure the data is valid and extract the array if necessary
  const requests = data?.data || []; // Safely access `data.data` and default to an empty array if not available

  if (isLoading) {
    return <p>Loading user-specific requests...</p>;
  }

  if (error) {
    return <p>Error loading requests: {error.message}</p>;
  }

  if (requests.length === 0) {
    return <p>No requests found for this user.</p>;
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
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              <td className="border border-gray-300 px-4 py-2">{request._id}</td>
              <td className="border border-gray-300 px-4 py-2">{request.description}</td>
              <td className="border border-gray-300 px-4 py-2">
                {request.isApproved ? 'Approved' : 'Pending'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
