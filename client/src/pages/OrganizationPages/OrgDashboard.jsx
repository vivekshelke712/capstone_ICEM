import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllRequesByEmailQuery } from '../../redux/api/helpApi';
import { useUpdateHelpMutation } from '../../redux/api/helpApi';
import { useNavigate } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';  // Importing the location icon from react-icons

const OrgaDashboard = () => {
  const { user } = useSelector(state => state.user);
  const [location, setLocation] = useState(null);  // State to store the user's location
  const [getLocationError, setGetLocationError] = useState(null);

  // Trigger query to fetch requests
  const { data, error, isLoading, refetch } = useGetAllRequesByEmailQuery(user?.email);

  // Mutation hook for updating request status
  const [updateRequest, { isSuccess, isError }] = useUpdateHelpMutation();

  const navigate = useNavigate();

  // Ensure the data is valid and extract the array if necessary
  const requests = data?.data || []; // Safely access `data.data` and default to an empty array if not available

  // Calculate counts for widgets
  const pendingApprovals = requests.filter(request => !request.isApproved).length;
  const completedActions = requests.filter(request => request.isApproved).length;

  // Dashboard Widgets data
  const stats = [
    { title: "Pending Approvals", count: pendingApprovals, bgColor: "bg-yellow-500" },
    { title: "Completed Actions", count: completedActions, bgColor: "bg-green-500" },
  ];

  // Handle Accept and Reject actions
  const handleStatusChange = (requestId, action) => {
    const status = action === 'accept' ? true : false;

    // Update the request status first
    updateRequest({ id: requestId, isApproved: status })
      .unwrap()  // Use unwrap to handle the response and errors
      .then(() => {
        // After the request is successfully updated, handle the location redirection
        // if (status) {
        //   handleLocationRedirect(requestId);
        // }
      })
      .catch((error) => {
        // Handle any errors during the update request
        console.error("Error updating the request:", error);
      });
  };

  // Function to generate Google Maps URL with user's location
  const handleLocationRedirect = (requestId) => {
    // Assuming the user's latitude and longitude are part of the request or user object
    const userLatitude = 28.7041;  // Example Latitude
    const userLongitude = 77.1025; // Example Longitude

    // Google Maps URL format
    const googleMapsURL = `https://www.google.com/maps?q=${userLatitude},${userLongitude}`;

    // Redirect the user to Google Maps
    window.open(googleMapsURL, '_blank');  // Opens the location in a new tab
    updateRequest({ id: requestId, isApproved: true, latitude: userLatitude, longitude: userLongitude });
  };

  // Handle navigation to profile
  const handleViewProfile = (id) => {
    navigate('/org-Dash/viewUserProfile', {
      state: { id }  // Pass only id in state
    });
  };

  const sortedRequests = [...requests].sort((a, b) => {
    if (!a.isApproved && b.isApproved) return -1; // Move unapproved requests up
    if (a.isApproved && !b.isApproved) return 1;  // Move approved requests down
    return 0; // Maintain order otherwise
  });

  // useEffect to handle success and refetch
  useEffect(() => {
    if (isSuccess) {
      refetch();  // Trigger a re-fetch to get updated data
    }
  }, [isSuccess, refetch]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Organization name or loading state */}
      <div className="flex flex-col items-center p-6 bg-gray-100 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Organization Dashboard</h1>
        {user ? (
          <h2 className="text-xl mb-4">Welcome, {user.name}</h2>
        ) : (
          <h1>Loading...</h1>
        )}

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} p-4 text-white text-center rounded-lg shadow-md`}
            >
              <h2 className="text-xl font-semibold">{stat.title}</h2>
              <p className="text-4xl font-bold">{stat.count}</p>
            </div>
          ))}
        </div>

        {/* Request Table */}
        <div className="mt-6 w-full">
          {user && user.email ? (
            <>
              {isLoading ? (
                <p>Loading user-specific requests...</p>
              ) : error ? (
                <p>Error loading requests: {error.message}</p>
              ) : requests.length === 0 ? (
                <p>No requests found for this user.</p>
              ) : (
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Requests</h2>
                  <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Age</th>
                        <th className="border border-gray-300 px-4 py-2">Need Type</th>
                        <th className="border border-gray-300 px-4 py-2">Contact</th>
                        <th className="border border-gray-300 px-4 py-2">City</th>
                        <th className="border border-gray-300 px-4 py-2">Area</th>
                        <th className="border border-gray-300 px-4 py-2">Request Detail</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                        <th className="border border-gray-300 px-4 py-2">getLocation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedRequests.map((request) => (
                        <tr key={request._id} className="border-b">
                          <td className="border border-gray-300 px-4 py-2">{request.name}</td>
                          <td className="border border-gray-300 px-4 py-2">{request.age}</td>
                          <td className="border border-gray-300 px-4 py-2">{request.needType}</td>
                          <td className="border border-gray-300 px-4 py-2">{request.contact}</td>
                          <td className="border border-gray-300 px-4 py-2">{request.city}</td>
                          <td className="border border-gray-300 px-4 py-2">{request.area}</td>
                          <td className="bg-black-500 text-white px-4 py-2 rounded text-center">
                            <button
                              className="bg-black text-white px-4 py-2 rounded"
                              onClick={() => navigate('/org-Dash/getDetails', { state: { requestId: request._id } })} // Send requestId to the GetDetails page
                            >
                              Get Details
                            </button>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 mx-3 text-center">
                            <button
                              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                              onClick={() => handleViewProfile(request.userId)} // Pass only the id (request.userId)
                            >
                              View Profile
                            </button>
                            {request.isApproved ? (
                              <>
                               
                                <button
                                  className="bg-green-500 text-white px-4 py-2 rounded cursor-not-allowed"
                                  disabled
                                >
                                  Accepted
                                </button>
                                {/* Display location icon when the request is accepted */}
                               
                              </>
                            ) : (
                              <>
                                <button
                                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                                  onClick={() => handleStatusChange(request._id, 'accept')}
                                >
                                  Accept
                                </button>
                              </>
                            )}
                          </td>
                          <td><a
                                  href={`https://www.google.com/maps?q=${request.latitude},${request.longitude}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-black-500 p-4"
                                >
                                  <MdLocationOn className="inline mr-2" /> Location
                                </a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          ) : (
            <p>Please log in to see your requests.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrgaDashboard;
