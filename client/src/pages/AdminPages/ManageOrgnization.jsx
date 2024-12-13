// src/pages/ManageOrganizations.js

import React from 'react';
import { useReactToPrint } from 'react-to-print';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useGetAllOrgnizationQuery } from '../../redux/api/orgAPI';
// import { useGetAllOrganizationsQuery } from '../../redux/api/adminApi';

const ManageOrganizations = () => {
  // Fetch organizations dynamically using RTK Query
  const { data: organizations, isLoading, isError } = useGetAllOrgnizationQuery()
console.log(organizations);
  // Function to download data as Excel file
  const downloadExcel = () => {
    if (!organizations || organizations.length === 0) {
      alert('No organization data available to download.');
      return;
    }
    const ws = XLSX.utils.json_to_sheet(organizations);
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
    return <p>Loading organizations...</p>;
  }

  if (isError || !organizations) {
    return <p>Error fetching organizations. Please try again later.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-gray-800">Manage Organizations</h1>

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
              <th className="border px-4 py-2 text-left">Contact</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((org) => (
              <tr key={org.id}>
                <td className="border px-4 py-2">{1}</td>
                
                <td className="border px-4 py-2">{org.orgName}</td>
                <td className="border px-4 py-2">{org.orgEmail}</td>
                <td className="border px-4 py-2">{org.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrganizations;
