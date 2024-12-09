import React from 'react';
import { useGetAllOrgnizationQuery } from '../../redux/api/orgAPI';
// import Footer from '../../Component/Footer';
// import Navbar from '../../Component/Navbar';

// import { useGetAllOrganizationQuery } from '../../api/organizationApi'; // Adjust the import based on your file structure

const Organizations = () => {
  // Fetch organization data using the query
  const { data: organizations, isLoading, isError } = useGetAllOrgnizationQuery()

  if (isLoading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center py-6 text-red-500">Error fetching organizations.</div>;
  }

  return (
    <>
      
      <div className="bg-gray-50 min-h-screen py-8">
        <header className="text-center py-6">
          <h1 className="text-4xl font-bold text-black">Our Partner Organizations</h1>
          <p className="text-lg mt-2 text-gray-600">Here are some of the NGOs and organizations working with us to make a difference.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 border lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
          {organizations.map((org) => (
            <div key={org._id} className="bg-white border p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="https://via.placeholder.com/150x150?text=Organization" alt={org.orgName} className="w-full h-32 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">{org.orgName}</h3>
              <p className="text-gray-600 mt-2">{org.description}</p>
              <p className="text-gray-500 mt-1">Email: {org.orgEmail}</p>
              <p className="text-gray-500 mt-1">City: {org.city}</p>
              <p className="text-gray-500 mt-1">Registration No: {org.registrationNumber}</p>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Organizations;