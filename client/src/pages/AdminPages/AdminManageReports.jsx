// src/pages/AdminManageReports.js

import React from 'react';
import { useReactToPrint } from 'react-to-print';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const AdminManageReports = () => {
  // Dummy data for reports
  const reports = [
    { id: 1, title: 'Monthly User Growth', date: '2024-11-01', status: 'Completed' },
    { id: 2, title: 'Donations Report', date: '2024-10-15', status: 'Pending' },
    { id: 3, title: 'Volunteer Engagement', date: '2024-09-30', status: 'Completed' },
    { id: 4, title: 'Financial Overview', date: '2024-12-05', status: 'In Progress' },
  ];

  // Function to download report data as Excel file
  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(reports);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Reports');
    const excelFile = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([excelFile]), 'admin-reports.xlsx');
  };

  // Function to download report data as PDF
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Admin Reports',
    onAfterPrint: () => alert('Admin report downloaded as PDF'),
  });

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-gray-800">Admin Manage Reports</h1>

      <div className="mt-4">
        <button
          onClick={downloadExcel}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Download Excel
        </button>
        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-4 hover:bg-blue-600"
        >
          Download PDF
        </button>
      </div>

      <div ref={componentRef} className="mt-6 bg-white p-6 rounded shadow-md">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td className="border px-4 py-2">{report.id}</td>
                <td className="border px-4 py-2">{report.title}</td>
                <td className="border px-4 py-2">{report.date}</td>
                <td className="border px-4 py-2">{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageReports;
