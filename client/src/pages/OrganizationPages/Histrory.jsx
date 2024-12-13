import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllRequesByEmailQuery } from '../../redux/api/helpApi';
import { FaRegUser, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const History = () => {
  const { user } = useSelector(state => state.user);

  const { data, isLoading, error } = useGetAllRequesByEmailQuery(user?.email);

  const acceptedRequests = useMemo(() => {
    return data?.data.filter(request => request.isApproved) || [];
  }, [data]);

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-screen animate-pulse">
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-solid border-gray-200 border-t-blue-600 rounded-full" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  const ErrorMessage = ({ message }) => (
    <div className="bg-red-500 text-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold">Error</h2>
      <p>{message}</p>
    </div>
  );

  const RequestTable = ({ requests }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Accepted Requests</h2>
      <table className="table-auto w-full border-collapse border border-gray-200 shadow-md">
        <thead>
          <tr className="bg-blue-100 text-gray-700">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Need Type</th>
            <th className="border border-gray-300 px-4 py-2">Contact</th>
            <th className="border border-gray-300 px-4 py-2">City</th>
            <th className="border border-gray-300 px-4 py-2">Area</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id} className="hover:bg-blue-50 transition-all duration-300 ease-in-out">
              <td className="border border-gray-300 px-4 py-2">{request.name}</td>
              <td className="border border-gray-300 px-4 py-2">{request.age}</td>
              <td className="border border-gray-300 px-4 py-2">{request.needType}</td>
              <td className="border border-gray-300 px-4 py-2">
                <FaPhoneAlt className="inline-block mr-2 text-blue-500" /> {request.contact}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <FaMapMarkerAlt className="inline-block mr-2 text-blue-500" /> {request.city}
              </td>
              <td className="border border-gray-300 px-4 py-2">{request.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <div className="min-h-screen flex flex-col p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">Accepted Requests History</h1>

      {acceptedRequests.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center mt-6">
          <h2 className="text-xl font-bold text-gray-700">No Accepted Requests Found</h2>
          <p className="text-gray-500 mt-2">Looks like you haven't received any accepted requests yet. Please check back later.</p>
          <div className="mt-4 text-gray-400">
            <FaRegUser size={50} />
          </div>
        </div>
      ) : (
        <RequestTable requests={acceptedRequests} />
      )}
    </div>
  );
};

export default History;
