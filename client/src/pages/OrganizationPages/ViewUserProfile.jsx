import React from 'react';
import { useLocation } from 'react-router-dom'; // To access the state passed via navigate
import { useGetAllUserQuery } from '../../redux/api/adminApi';

const ViewUserProfile = () => {
  const { state } = useLocation(); // Get the id passed via state
  const { id } = state || {}; // Destructure the id

  // Fetch all users
  const { data: users, isLoading: usersLoading, isError: usersError } = useGetAllUserQuery();

  // Find the particular user based on the ID
  const userData = users?.find((user) => user._id === id);

  if (usersLoading) {
    return <p>Loading user data...</p>;
  }

  if (usersError || !userData) {
    return <p>Error loading user profile or user not found.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Volunteer Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">{userData.name}'s Profile</h2>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Contact:</strong> {userData.number}</p>
        <p className="mt-4">
          Thank you for being an essential part of Aidbridge. As a volunteer, your efforts are invaluable in bridging the gap 
          between those in need and the resources that can transform lives. Your dedication to our mission empowers communities, 
          uplifts individuals, and spreads hope where it's most needed.
        </p>
        <p className="mt-4">
          Aidbridge is committed to creating a sustainable impact through collaborative efforts. Together, we aim to address 
          critical issues such as education, healthcare, and disaster relief. Volunteers like you are the heart of our organization, 
          making every initiative possible with your passion and commitment.
        </p>
        <p className="mt-4">
          Remember, every small act of kindness you perform contributes to a larger movement of change. Let’s continue to work together 
          to make a difference, one step at a time. 
        </p>
      </div>
    </div>
  );
};

export default ViewUserProfile;
