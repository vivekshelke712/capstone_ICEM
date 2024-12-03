import React, { useState } from 'react';

const ApplicationDetails = ({ application }) => {
  const [reviewStatus, setReviewStatus] = useState('pending');

  const handleReview = (status) => {
    setReviewStatus(status);
    // Perform actions like API calls to update the review status
  };

  if (!application) {
    return <div>No application data available.</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Application Details</h1>
      <div className="bg-white p-6 rounded-md shadow">
        <h2 className="text-xl font-bold mb-2">{application.applicantName}</h2>
        <p className="text-gray-600 mb-2">{application.position}</p>
        <p>Status: {application.status}</p>
        
        {/* Review Buttons */}
        {reviewStatus === 'pending' && (
          <div className="flex justify-between mt-4">
            <button onClick={() => handleReview('accepted')} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Accept
            </button>
            <button onClick={() => handleReview('rejected')} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Reject
            </button>
          </div>
        )}

        {reviewStatus === 'accepted' && <p className="text-green-500 mt-4">Application Accepted</p>}
        {reviewStatus === 'rejected' && <p className="text-red-500 mt-4">Application Rejected</p>}
      </div>
    </div>
  );
};

export default ApplicationDetails;
