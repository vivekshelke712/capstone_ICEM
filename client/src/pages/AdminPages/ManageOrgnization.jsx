import React from 'react';
import { useReactToPrint } from 'react-to-print';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useGetAllUserQuery } from '../../redux/api/adminApi';

const ManageOrganization = () => {
  const { data: users, isLoading, isError } = useGetAllUserQuery();

  // Filter users with the role "organization"
  const filteredUsers = users ? users.filter(user => user.role === 'organization') : [];

  // Function to download data as Excel file
  const downloadExcel = () => {
    if (!filteredUsers || filteredUsers.length === 0) {
      alert('No organization data available to download.');
      return;
    }
    const ws = XLSX.utils.json_to_sheet(filteredUsers);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Organizations');
    const excelFile = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([excelFile]), 'organizations.xlsx');
  };

  // Function to download data as PDF
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Organizations Report',
    onAfterPrint: () => alert('Report downloaded as PDF'),
  });

  // Handle loading and error states
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin border-t-4 border-blue-500 w-16 h-16 border-4 rounded-full"></div>
      </div>
    );
  }

  if (isError || !filteredUsers) {
    return <p className="text-red-500 text-center">Error fetching organizations. Please try again later.</p>;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Manage Organizations</h1>

      <div className="flex justify-between items-center mb-4">
        <button
          onClick={downloadExcel}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 shadow-lg transform hover:scale-105"
        >
          Download Excel
        </button>
        {/* Uncomment if PDF download functionality is needed */}
        {/* <button
          onClick={handlePrint}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg ml-4 hover:bg-blue-600 transition duration-300 shadow-lg transform hover:scale-105"
        >
          Download PDF
        </button> */}
      </div>

      <div ref={componentRef} className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-black text-white">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Number</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100 transition duration-300">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.number}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">Organization</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrganization;
