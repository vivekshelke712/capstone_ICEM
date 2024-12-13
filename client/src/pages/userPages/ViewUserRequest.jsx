import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ViewUserRequest = () => {
  const { user } = useSelector(state => state.user); // Access user from Redux store

  if (!user || !user.id) {
    return <div>Loading user data...</div>; // Handle case where user.id is missing
  }

  console.log('User ID:', user.id); // Log the user ID to ensure it's available

  // Static data for demonstration with 5 Indian user requests
  const data = [
    {
      _id: '1',
      name: 'Rajesh Kumar',
      age: 35,
      needType: 'Medical Assistance',
      contact: '9876543210',
      city: 'Delhi',
      area: 'Connaught Place',
      isApproved: true,
    },
    {
      _id: '2',
      name: 'Priya Sharma',
      age: 28,
      needType: 'Food Supplies',
      contact: '9988776655',
      city: 'Mumbai',
      area: 'Andheri',
      isApproved: false,
    },
    {
      _id: '3',
      name: 'Amit Verma',
      age: 40,
      needType: 'Shelter Assistance',
      contact: '9123456789',
      city: 'Bengaluru',
      area: 'Koramangala',
      isApproved: true,
    },
    {
      _id: '4',
      name: 'Sita Rani',
      age: 32,
      needType: 'Clothing',
      contact: '9801234567',
      city: 'Kolkata',
      area: 'Howrah',
      isApproved: false,
    },
    {
      _id: '5',
      name: 'Ravi Patel',
      age: 45,
      needType: 'Educational Assistance',
      contact: '9432167890',
      city: 'Chennai',
      area: 'T Nagar',
      isApproved: true,
    },
  ];

  useEffect(() => {
    if (data) {
      console.log('User Requests Data:', data); // Log the response data
    }
  }, [data]);

  // Simulating loading state
  const isLoading = false;

  // Simulating error state
  const isError = false;
  const error = { message: 'Failed to fetch data' };

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  if (isError) {
    return <div>Error: {error.message}</div>; // Show error message if there's an issue
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Requests</h1>
      {data && data.length > 0 ? (
        <table className="min-w-full border-collapse table-auto my-24">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
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
            {data.map((request, index) => (
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
        <div>No requests found.</div> // If no requests data
      )}
    </div>
  );
};

export default ViewUserRequest;
