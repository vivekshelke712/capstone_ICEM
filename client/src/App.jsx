import React from 'react'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route ,Outlet} from 'react-router-dom'
import Test from './pages/Test'
import UserRegistration from './pages/userPages/UserRegistration'
import About from './pages/Shared/About'
import UserNavbar from './Component/userComponent/UserNavbar'
import Protected from './pages/Shared/Protected'
import AdminDashboard from './pages/AdminPages/AdminDashboard'


import {Toaster} from 'react-hot-toast'
import AdminProtected from './share/AdminProtected'
import AdminNavbar from './Component/adminComponent/AdminNavbar'
import Footer from './Component/Footer'
import UserProtected from './share/UserProtected'
import ContactUs from './pages/Shared/ContactUs'
import PublicProtected from './share/PublicProtected'
import Navbar from './Component/Navbar'
// import ApplicationDetails from './pages/AdminPages/ApplicationDetails'
// import Users from './pages/AdminPages/Users'
import Help from './pages/Shared/Help'
import Orgnizations from './pages/Shared/Orgnizations'
import UserLogin from './pages/userPages/UserLogin'
import OrganizationProtected from './share/OrganizationProtected'
import OrganizationNavbar from './Component/organizationComponent/OrganizationNavbar'
import OrganizationDashboard from './pages/OrganizationPages/OrgDashboard'

import UserDashboard from './pages/userPages/UserDashboard'
import { ToastContainer } from 'react-toastify'
import OrgProjects from './pages/OrganizationPages/OrgProjects'
import ManageService from './pages/OrganizationPages/Histrory'
import Reports from './pages/OrganizationPages/Reports'
import ManageUsers from './pages/AdminPages/ManageUser'
import AdminManageReports from './pages/AdminPages/AdminManageReports'
import OrganizationManagement from './pages/AdminPages/ManageOrgnization'
import PageNotFound from './share/PageNotFound'
import OrganizationDetails from './pages/OrganizationPages/OrganizationDetails'
import OrganizationPayment from './Component/Common/OrganizationPayment'
import ThankYouPage from './Component/Common/ThankYouPage'
import ProjectsWeHaveDone from './Component/Common/ProjectsWeHaveDone'
import ViewUserProfile from './pages/OrganizationPages/ViewUserProfile'
import Histrory from './pages/OrganizationPages/Histrory'
// import GetDetails from './pages/OrganizationPages/GetDetails'
import ViewUserRequests from './pages/userPages/ViewUserRequest'

const App = () => {
  return <>
    <div><Toaster
  position="top-right"
      reverseOrder={true}
      
/></div>
{/* <ToastContainer />   */}
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route>
        
            <Route path='/' element={<Home />} />
            <Route path='/test' element={<Test />} />
            <Route path='/userLogin' element={<UserLogin />} />
          <Route path='/userRegister' element={<UserRegistration />} />
          
          
             {/* <Route path='/jobDetails/:jobId' element={<JobDetails />} /> */}
            <Route path='/help' element={<Help/>} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path="/organization-details" element={<OrganizationDetails />} />
            <Route path="/organization-payment" element={<OrganizationPayment />} />
        <Route path='/about' element={<About />} />
          <Route path='/organizations' element={<Orgnizations />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          {/* <Route path="/projects/:id" element={<Pro />} /> */}

            </Route>
              
          
          
        <Route path='/user' element={<> <UserProtected compo={<> <Outlet /> </>} /></>}>
          <Route index element={<UserDashboard />} />
          <Route path="/user/view-requests" element={<ViewUserRequests />} />
          <Route path="/user/view-requests" element={<ViewUserRequests />} />
        </Route>

        {/* Organization Routes */}
           <Route path='/org-Dash' element={<> <OrganizationProtected compo={<> <Outlet /> </>} /></>}>
          <Route index element={< OrganizationDashboard/>} />
          <Route path='/org-Dash/projects' element={< OrgProjects/>} />
          <Route path='/org-Dash/History' element={< Histrory/>} />
          <Route path='/org-Dash/reports' element={< Reports/>} />
          <Route path='/org-Dash/reports' element={< Reports/>} />
          {/* <Route path='/org-Dash/getDetails' element={< GetDetails/>} /> */}
          <Route path='/org-Dash/viewUserProfile' element={< ViewUserProfile/>} />
        </Route>

        {/* Admin Routes */}
<Route path="/admin" element={<AdminProtected compo={<><Outlet /></>} />}>
  <Route index element={<AdminDashboard />} />
  <Route path='/admin/manage-users' element={<ManageUsers />} />
  <Route path='/admin/manage-reports' element={<AdminManageReports />} />
  <Route path='/admin/ManageOrganizations' element={<OrganizationManagement />} />
  

  
</Route>
        
            <Route path='*' element={ <PageNotFound /> } />
      </Routes>
      <Footer />
        </BrowserRouter>
  </>
}

export default App
