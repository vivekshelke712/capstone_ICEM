import React from 'react';
import { useGetAllOrgnizationQuery } from '../../redux/api/orgAPI';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import partner from '../../assets/partnerab.jpg'; // Image for all cards

const Organizations = () => {
  const navigate = useNavigate(); // Initialize navigate
  const { data: organizations, isLoading, isError } = useGetAllOrgnizationQuery();

  if (isLoading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center py-6 text-red-500">Error fetching organizations.</div>;
  }

  const handleReadMore = (org) => {
    navigate('/organization-details', { state: { org } }); // Pass data using state
  };

  const truncateDescription = (description, length = 100) => {
    if (description.length > length) {
      return description.substring(0, length) + '...'; // Truncate text and add ellipsis
    }
    return description;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-black">Our Partner Organizations</h1>
        <p className="text-lg mt-2 text-gray-600">
          Here are some of the NGOs and organizations working with us to make a difference.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {organizations.map((org) => (
          <div
            key={org._id}
            className="bg-white border p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            <img
              src={partner}
              alt={org.orgName}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black">{org.orgName}</h3>
            <p className="text-gray-600 mt-2">{truncateDescription(org.description)}</p>
            <p className="text-gray-500 mt-2">City: {org.city}</p>

            <button
              onClick={() => handleReadMore(org)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organizations;
