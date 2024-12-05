import React from 'react'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route ,Outlet} from 'react-router-dom'
import Test from './pages/Test'
import UserRegistration from './pages/userPages/UserRegistration'
import About from './pages/Shared/About'
import UserNavbar from './Component/userComponent/UserNavbar'
import Protected from './pages/Shared/Protected'
import AdminDashboard from './pages/AdminPages/AdminDashboard'
import AdminJobPost from './pages/AdminPages/AdminJobPost'
import AdminJobReview from './pages/AdminPages/AdminJobReview'
import {Toaster} from 'react-hot-toast'
import AdminProtected from './share/AdminProtected'
import AdminNavbar from './Component/adminComponent/AdminNavbar'
import Footer from './Component/Footer'
import UserProtected from './share/UserProtected'
import ContactUs from './pages/Shared/ContactUs'
import PublicProtected from './share/PublicProtected'
import Navbar from './Component/Navbar'
import ApplicationDetails from './pages/AdminPages/ApplicationDetails'
import Users from './pages/AdminPages/Users'
import Help from './pages/Shared/Help'
import Orgnizations from './pages/Shared/Orgnizations'
import UserLogin from './pages/userPages/UserLogin'
import OrganizationProtected from './share/OrganizationProtected'
import OrganizationNavbar from './Component/organizationComponent/OrganizationNavbar'
import OrganizationDashboard from './pages/OrganizationPages/OrgDashboard'
import OrganizationRegistration from './pages/OrganizationPages/OrganizationRegistration'
import UserDashboard from './pages/userPages/UserDashboard'
import { ToastContainer } from 'react-toastify'
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
        </Route>

        {/* Admin Routes */}
<Route path="/admin" element={<AdminProtected compo={<><Navbar /><Outlet /><Footer /></>} />}>
  <Route index element={<AdminDashboard />} />
  
  {/* Add the route for application detailing here */}
  <Route path="/admin/application-details" element={<ApplicationDetails />} />
</Route>
        
            <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      
        </BrowserRouter>
  </>
}

export default App
