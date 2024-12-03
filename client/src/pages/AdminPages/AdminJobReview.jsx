import React, { useState } from 'react';
import ApplicationDetails from './ApplicationDetails';

const AdminJobReview = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);

  // Assuming you have job applications data
  const jobApplications = [
    { 
      id: 1, 
      applicantName: 'Swapnil Ravate', 
      position: 'Software Engineer',
      email: 'swapnil@gmail.com',
      experience: '5 years',
      education: 'Bachelor of Engineering',
      skills: ['JavaScript', 'React', 'Node.js']
    },
    { 
      id: 2, 
      applicantName: 'Madhuri Sonawane', 
      position: 'UI/UX Designer',
      email: 'madhuri@gmail.com',
      experience: '3 years',
      education: 'Master of Design',
      skills: ['UI/UX Design', 'Adobe XD', 'Figma']
    },
    { 
      id: 3, 
      applicantName: 'Anurag Tupkar', 
      position: 'Frontend Developer',
      email: 'anurag@gmail.com',
      experience: '4 years',
      education: 'Bachelor of Computer Science',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    // Add more application data as needed
  ];

  const handleViewApplication = (application) => {
    console.log(application); // Debugging: Check if the correct application is selected
    setSelectedApplication(application);
  };

  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Job Applications</h1>

        {jobApplications.map((application) => (
          <div key={application.id} className="bg-white p-6 rounded-md shadow mb-4">
            <h2 className="text-xl font-bold mb-2">{application.applicantName}</h2>
            <p className="text-gray-600 mb-2">{application.position}</p>
            {/* <p className={`text-sm font-semibold ${application.status === 'Pending' ? 'text-orange-500' : 'text-green-500'}`}>
              Status: {application.status}
            </p> */}
            <button onClick={() => handleViewApplication(application)} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
              View Application
            </button>
          </div>
        ))}
      </div>

      {/* Debugging: Check selectedApplication */}
      {selectedApplication && (
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-8">Selected Application</h1>
          <div className="bg-white p-6 rounded-md shadow">
            <h2 className="text-xl font-bold mb-2">{selectedApplication.applicantName}</h2>
            <p className="text-gray-600 mb-2">{selectedApplication.position}</p>
            <p>Email: {selectedApplication.email}</p>
            <p>Experience: {selectedApplication.experience}</p>
            <p>Education: {selectedApplication.education}</p>
            {/* <p>Skills: {selectedApplication.skills.join(', ')}</p> */}
          </div>
        </div>
      )}

      {/* Render ApplicationDetails component when selectedApplication is not null */}
      {selectedApplication && <ApplicationDetails application={selectedApplication} />}
    </>
  );
};

export default AdminJobReview;
