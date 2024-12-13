import React from "react";
import { useGetAllOrgnizationQuery } from "../../redux/api/orgAPI";
import { useGetAllUserQuery } from "../../redux/api/adminApi";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  // Static data for the dashboard
  const statistics = {
    requests: 45,
    pendingRequests: 10,
    Donations:'100000000 INR'
  };

  // Fetch users and organizations dynamically
  const { data: usersData, isLoading: isLoadingUsers, isError: isErrorUsers } = useGetAllUserQuery();
  const { data: organizationsData, isLoading: isLoadingOrgs, isError: isErrorOrgs } = useGetAllOrgnizationQuery();

  // Extract dynamic data
  const userCount = usersData?.length || 0;
  const organizationCount = organizationsData?.length || 0;
  const recentUsers = usersData?.slice(0, 2) || [];

  // Static pending requests and notifications
  const pendingRequests = [
    {
      id: 201,
      title: "School Supplies for Rural Area",
      submittedBy: "John Doe",
      date: "2024-11-30",
    },
    {
      id: 202,
      title: "Medical Assistance for Old Age Home",
      submittedBy: "Jane Smith",
      date: "2024-11-28",
    },
  ];

  const notifications = [
    "5 new requests have been submitted for review.",
    "A new organization has registered: Helping Hands.",
    "Scheduled maintenance on December 5th at 2 AM.",
  ];

  // Pie chart data for user roles
  const userRoleData = {
    labels: ['Organization', 'User'],
    datasets: [
      {
        data: [
          usersData?.filter(user => user.role === 'organization').length || 0,
          usersData?.filter(user => user.role === 'user').length || 0
        ],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384']
      }
    ]
  };

  // Pie chart data for organization types
  const orgTypeData = {
    labels: ['Animal Shelter', 'Educational Help', 'Old Age Home'],
    datasets: [
      {
        data: [
          organizationsData?.filter(org => org.orgType === 'AnimalShelter').length || 0,
          organizationsData?.filter(org => org.orgType === 'EducationalHelp').length || 0,
          organizationsData?.filter(org => org.orgType === 'OldAgeHome').length || 0
        ],
        backgroundColor: ['#FFCD56', '#4BC0C0', '#FF9F40'],
        hoverBackgroundColor: ['#FFCD56', '#4BC0C0', '#FF9F40']
      }
    ]
  };

  // Static Pie chart data for Donations
  const donationData = {
    labels: ['Received', 'Pending'],
    datasets: [
      {
        data: [200, 50], // Static data for donations
        backgroundColor: ['#FF5733', '#D3D3D3'],
        hoverBackgroundColor: ['#FF5733', '#D3D3D3']
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      {/* Header */}
      <header className="bg-white shadow p-4 mb-6 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Manage the AidBridge Platform</p>
      </header>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold text-gray-800">Users</h2>
          <p className="text-3xl font-bold text-blue-500">{userCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold text-gray-800">Organizations</h2>
          <p className="text-3xl font-bold text-blue-500">{organizationCount}</p>
        </div>
        {Object.entries(statistics).map(([key, value], index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
            <h2 className="text-xl font-semibold text-gray-800 capitalize">{key}</h2>
            <p className="text-3xl font-bold text-blue-500">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Pending Requests */}
        

        {/* Notifications */}
        
      </div>

      {/* Pie Charts Section */}
      <div className="bg-white p-4 rounded-lg shadow mt-6 flex gap-6 justify-center">
        {/* User Roles Distribution Pie Chart */}
        <div className="w-full max-w-xs p-4 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">User Roles</h2>
          <Pie 
            data={userRoleData} 
            options={{
              responsive: true,
              plugins: { 
                legend: { 
                  position: 'top', 
                  labels: {
                    boxWidth: 10, 
                    font: { size: 10 }
                  }
                }
              }
            }} 
          />
        </div>

        {/* Organization Types Pie Chart */}
        <div className="w-full max-w-xs p-4 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">Organization Types</h2>
          <Pie 
            data={orgTypeData} 
            options={{
              responsive: true,
              plugins: { 
                legend: { 
                  position: 'top',
                  labels: {
                    boxWidth: 10, 
                    font: { size: 10 }
                  }
                }
              }
            }} 
          />
        </div>

        {/* Donation Pie Chart */}
        <div className="w-full max-w-xs p-4 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">Donation</h2>
          <Pie 
            data={donationData} 
            options={{
              responsive: true,
              plugins: { 
                legend: { 
                  position: 'top',
                  labels: {
                    boxWidth: 10, 
                    font: { size: 10 }
                  }
                }
              }
            }} 
          />
        </div>
      </div>

      {/* Manage Users Section */}
      <div className="m-24">

      </div>
    </div>
  );
};

export default AdminDashboard;
