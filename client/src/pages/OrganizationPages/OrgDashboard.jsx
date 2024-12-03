import React from 'react';
// import Navbar from '../Navbar';
// import Footer from '../Footer';
import DashboardWidgets from './DashboardWidgets';
import RequestTable from './RequestTable';
// import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import OrganizationNavbar from '../../Component/organizationComponent/OrganizationNavbar';

const OrgaDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <OrganizationNavbar /> */}
      <div className="flex flex-col items-center p-6 bg-gray-100 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Organization Dashboard</h1>
        <DashboardWidgets />
        <div className="mt-6 w-full max-w-6xl">
          <RequestTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrgaDashboard;
