import React from 'react';
import * as XLSX from 'xlsx';

const Reports = () => {
  const reportsData = [
    { id: 1, name: 'User Engagement Report', date: '2024-12-01', status: 'Completed' },
    { id: 2, name: 'Monthly Activity Report', date: '2024-11-30', status: 'Pending' },
    { id: 3, name: 'Volunteer Performance Report', date: '2024-11-25', status: 'Completed' },
    // Additional rows here
  ];

  // Function to handle Excel download
  const downloadExcel = () => {
    // Prepare data for Excel
    const worksheet = XLSX.utils.json_to_sheet(reportsData); // Convert JSON data to Excel sheet
    const workbook = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Reports'); // Append the worksheet to the workbook

    // Write and trigger the download
    XLSX.writeFile(workbook, 'reports.xlsx'); // This will trigger the download
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Page Header */}
      <header className="bg-indigo-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Reports</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Download Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={downloadExcel}
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded shadow"
          >
            Download as Excel
          </button>
        </div>

        {/* Reports Table */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Detailed Reports</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Report Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {reportsData.map((report) => (
                  <tr key={report.id}>
                    <td className="border border-gray-300 px-4 py-2">{report.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{report.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{report.date}</td>
                    <td className="border border-gray-300 px-4 py-2">{report.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;
