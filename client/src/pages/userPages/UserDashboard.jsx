import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import banner from '../../assets/banner.jpg'

const UserDashboard = () => {
  const { user } = useSelector(state => state.user);

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
            to="/help"
            className="bg-blue-500 text-white text-center py-4 rounded-lg shadow hover:bg-blue-600"
          >
            Submit a New Case
          </Link>
          <Link
            to="/user/view-requests"
            className="bg-green-500 text-white text-center py-4 rounded-lg shadow hover:bg-green-600"
          >
            View All Requests
          </Link>
          <Link
            to="/contactus"
            className="bg-purple-500 text-white text-center py-4 rounded-lg shadow hover:bg-purple-600"
          >
            Contact Support
          </Link>
        </div>

        {/* Useful Information for the User */}
         <section className="relative">
               <img src={banner} alt="AidBridge Team" className="w-full rounded-lg shadow-lg"/>
               <button className="absolute inset-0 flex items-center justify-center">
                 
               </button>
             </section>
      </div>
    </div>
  );
};

export default UserDashboard;
