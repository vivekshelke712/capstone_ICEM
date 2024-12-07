import React from 'react';

const OrgProjects = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Page Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Manage Projects</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Add Project Section */}
        <div className="bg-white p-6 rounded shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="projectName" className="block text-gray-700 font-medium">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label htmlFor="projectDescription" className="block text-gray-700 font-medium">
                Description
              </label>
              <textarea
                id="projectDescription"
                rows="3"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Enter project description"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Add Project
              </button>
            </div>
          </form>
        </div>

        {/* Project List Section */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Project List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Project Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2">Education Support</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Providing education resources to underprivileged children.
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center space-x-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
                {/* Add more rows here */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrgProjects;
