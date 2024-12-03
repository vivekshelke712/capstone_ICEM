import React, { useState } from 'react';

const OrganizationDashboard = () => {
  
  const [studentRequests, setStudentRequests] = useState([
    { id: 1, name: 'John Doe', rollNo: '101', collegePRN: 'A123456', universityPRN: 'U789456', studentOf: 'BCA' },
    { id: 2, name: 'Jane Smith', rollNo: '102', collegePRN: 'A654321', universityPRN: 'U123789', studentOf: 'BscIT' },
    
    { id: 19, name: 'Mia Martin', rollNo: '119', collegePRN: 'A789123', universityPRN: 'U456123', studentOf: 'MCA' },
    { id: 20, name: 'Alexander Thompson', rollNo: '120', collegePRN: 'A987654', universityPRN: 'U987654', studentOf: 'MSC' },
  ]);

  const handleAccept = (id) => {
    
    console.log(`Accepted student with id ${id}`);
  };

  const handleReject = (id) => {
    // Logic to reject student registration
    console.log(`Rejected student with id ${id}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        {studentRequests.map((student) => (
          <div key={student.id} className="bg-gray-100 p-4 rounded shadow-md">
            <p className="font-semibold">{student.name}</p>
            <p className="text-sm text-gray-600">Roll No: {student.rollNo}</p>
            <p className="text-sm text-gray-600">College PRN: {student.collegePRN}</p>
            <p className="text-sm text-gray-600">University PRN: {student.universityPRN}</p>
            <p className="text-sm text-gray-600">Student of: {student.studentOf}</p>
            <div className="flex mt-2">
              <button
                onClick={() => handleAccept(student.id)}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Accept
              </button>
              <button
                onClick={() => handleReject(student.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationDashboard;
