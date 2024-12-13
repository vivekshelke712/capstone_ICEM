import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import hooks
import partner from '../../assets/partnerab.jpg'; // Placeholder image
import { useSelector } from 'react-redux';

const OrganizationDetails = () => {
  const { state } = useLocation(); // Access the state passed through React Router
  const navigate = useNavigate(); // Hook to navigate programmatically
  const org = state?.org; // Extract the organization data
const {user} = useSelector((state) => state.user)
console.log(user);
  if (!org) {
    return <div className="text-center py-6">No organization selected</div>;
  }

  const handleSupportClick = () => {
    navigate("/organization-payment", { state: { org } }); // Navigate and pass data
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full lg:w-3/4 xl:w-2/3">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-blue-700 leading-tight">
            {org.orgName}
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Discover more about this amazing organization working toward making a difference.
          </p>
        </header>

        {/* Organization Image */}
        <div className="overflow-hidden rounded-xl mb-8">
          <img
            src={partner}
            alt={org.orgName}
            className="w-full h-96 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Organization Details Section */}
        <div className="space-y-6 text-gray-700">
          <div className="space-y-4">
            <p className="text-xl">{org.description}</p>
            <div className="space-y-2">
              <p className="text-lg"><strong>Email:</strong> {org.orgEmail}</p>
              <p className="text-lg"><strong>City:</strong> {org.city}</p>
              <p className="text-lg"><strong>Registration No:</strong> {org.registrationNumber}</p>
              <p className="text-lg"><strong>Type:</strong> {org.orgType}</p>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        {  user  && user.role =='user' ?
          
        <div className="mt-8 flex justify-center">
        <button
          onClick={handleSupportClick}
          className="px-8 py-4 bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105"
        >
          Support This Organization
        </button>
      </div>
      :<div className="mt-8 flex justify-center">
      <Link to='/userLogin'
        
        className="px-8 py-4 bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105"
      >
        Please Login To Support this Organization
      </Link>
    </div> 
        }
      </div>
    </div>
  );
};

export default OrganizationDetails;
