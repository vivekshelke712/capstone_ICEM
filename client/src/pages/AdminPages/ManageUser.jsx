// src/pages/ManageUsers.js

import React from 'react';
import { useReactToPrint } from 'react-to-print';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useGetAllUserQuery } from '../../redux/api/adminApi';

const ManageUsers = () => {
  // Fetch users dynamically using RTK Query
  const { data:users, isLoading, isError } = useGetAllUserQuery();
console.log(users);
  // Function to download data as Excel file
  const downloadExcel = () => {
    if (!users || users.length === 0) {
      alert('No user data available to download.');
      return;
    }
    const ws = XLSX.utils.json_to_sheet(users);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Users');
    const excelFile = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([excelFile]), 'users.xlsx');
  };

  // Function to download data as PDF
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Users Report',
    onAfterPrint: () => alert('Report downloaded as PDF'),
  });

  // Handle loading and error states
  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (isError || !users) {
    return <p>Error fetching users. Please try again later.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-gray-800">Manage Users</h1>

      <div className="mt-4">
        <button
          onClick={downloadExcel}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Download Excel
        </button>
        {/* <button
          onClick={handlePrint}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-4 hover:bg-blue-600"
        >
          Download PDF
        </button> */}
      </div>

      <div ref={componentRef} className="mt-6 bg-white p-6 rounded shadow-md">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
