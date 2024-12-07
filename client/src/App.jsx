import React from 'react'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route ,Outlet} from 'react-router-dom'
import Test from './pages/Test'
import UserRegistration from './pages/userPages/UserRegistration'
import About from './pages/Shared/About'
import UserNavbar from './Component/userComponent/UserNavbar'
import Protected from './pages/Shared/Protected'
import AdminDashboard from './pages/AdminPages/AdminDashboard'
// import AdminJobPost from './pages/AdminPages/AdminJobPost'
// import AdminJobReview from './pages/AdminPages/AdminJobReview'
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
import OrganizationRegistration from './pages/OrganizationPages/OrganizationRegistration'
import UserDashboard from './pages/userPages/UserDashboard'
import { ToastContainer } from 'react-toastify'
import OrgProjects from './pages/OrganizationPages/OrgProjects'
import ManageService from './pages/OrganizationPages/ManageService'
import Reports from './pages/OrganizationPages/Reports'
import ManageUsers from './pages/AdminPages/ManageUser'
import AdminManageReports from './pages/AdminPages/AdminManageReports'
import OrganizationManagement from './pages/AdminPages/ManageOrgnization'
const App = () => {
  return <>
    <div><Toaster
  position="top-right"
      reverseOrder={true}
      
/></div>
{/* <ToastContainer />   */}
    <BrowserRouter>
     
      <Routes>
        <Route>
        
            <Route path='/' element={<Home />} />
            <Route path='/test' element={<Test />} />
            <Route path='/userLogin' element={<UserLogin />} />
          <Route path='/userRegister' element={<UserRegistration />} />
          <Route path='/orgRegister' element={<OrganizationRegistration />} />
             {/* <Route path='/jobDetails/:jobId' element={<JobDetails />} /> */}
            <Route path='/help' element={<Help/>} />
            <Route path='/contactus' element={<ContactUs />} />
            
        <Route path='/about' element={<About />} />
          <Route path='/organizations' element={<Orgnizations />} />
          
            </Route>
              
          
          
        <Route path='/user' element={<> <UserProtected compo={<><Navbar /> <Outlet /> <Footer /></>} /></>}>
          <Route index element={<UserDashboard />} />
        </Route>

        {/* Teacher Routes */}
           <Route path='/org-Dash' element={<> <OrganizationProtected compo={<><Navbar /> <Outlet /> <Footer /></>} /></>}>
          <Route index element={< OrganizationDashboard/>} />
          <Route path='/org-Dash/projects' element={< OrgProjects/>} />
          <Route path='/org-Dash/ManageService' element={< ManageService/>} />
          <Route path='/org-Dash/reports' element={< Reports/>} />
        </Route>

        {/* Admin Routes */}
<Route path="/admin" element={<AdminProtected compo={<><Navbar /><Outlet /><Footer /></>} />}>
  <Route index element={<AdminDashboard />} />
  <Route path='/admin/manage-users' element={<ManageUsers />} />
  <Route path='/admin/manage-reports' element={<AdminManageReports />} />
  <Route path='/admin/ManageOrganizations' element={<OrganizationManagement />} />
  
  {/* Add the route for application detailing here */}
  {/* <Route path="/admin/application-details" element={<ApplicationDetails />} /> */}
</Route>
        
            <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      
        </BrowserRouter>
  </>
}

export default App
