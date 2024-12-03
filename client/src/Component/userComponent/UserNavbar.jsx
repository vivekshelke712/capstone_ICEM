import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { useLogoutMutation } from '../../redux/api/authApi'
import {toast} from 'react-hot-toast'
const UserNavbar = () => {
  const { user } = useSelector(state => state.user)
  const [logout, { isSuccess }] = useLogoutMutation()
  
  const navigate = useNavigate()
  useEffect(() => {
    if (isSuccess) {
      navigate("/")
      toast.success("Logged Out Successfully")
    }
  }, [isSuccess,user]) 
  const handleLogout = () => {
        logout();
    };
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        
        <li><a>Item 3</a></li>
      </ul>
    </div>
           <Link to='/' className="ml-6"><img src="public\assets\logo2.png" alt=""height='75px' width='150px' /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home </Link></li>
      <li><a>Dashboard</a></li>        
      {/* <li><a>All Jobs</a></li> */}
    </ul>
  </div>
  <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" m-1 p-4 rounded-md bg-black text-white">{ `Welcome ${user.name}` }</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button onClick={handleLogout}>Logout</button>
    </li>
    {/* <li><a>Item 2</a></li> */}
  </ul>
</div>
  </div>
</div>
    </div>
  )
}

export default UserNavbar
