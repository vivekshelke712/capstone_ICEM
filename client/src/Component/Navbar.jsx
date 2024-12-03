import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom' 
import { useLogoutMutation } from '../redux/api/authApi'
import { FaBars } from "react-icons/fa";
import {toast }from 'react-toastify'
import theme from '../theme'

const Navbar = () => {
  const { user } = useSelector(state => state.user)
  const [logout, { isSuccess, error, isError }] = useLogoutMutation()
  const navigate = useNavigate()
  useEffect(() => {
    if (isSuccess) {
      toast.success("Logout Successful")
    }
  }, [isSuccess])
  
  useEffect(() => {
    if (isSuccess) {
      navigate('/')
    }
  }, [isSuccess])

  
    return <>
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
        <a >Item 2</a>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to='/' className="ml-6"><img src="public\assets\logo2.png" alt=""height='75px' width='150px' /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/' className='text-lg text- font-serif'>Home</Link></li>
      <li><Link to='/about' className='text-lg text- font-serif'>About US</Link></li>
      <li><Link to='/help' className='text-lg text- font-serif'>help</Link></li>
      <li><Link to='/organizations' className='text-lg text- font-serif'>Organization</Link></li>
   
      <li><Link to='/contactus' className='text-lg text- font-serif'>Contact US</Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
  {/* Register */}
{/* <Link to='/userRegister'> <button className='btn btn-warning' >Register </button> </Link> */}

            {/* Login */}
            {
              user && user ? <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="text-2xl"> <FaBars /></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>{user.name }</a></li>
                      {/* Render different paths based on user's role */}
        {user.role === 'admin' ? (
          <li><Link to='/admin'>View Profile</Link></li>
        ) : user.role === 'organization' ? (
          <li><Link to='/org-Dash'>View Profile</Link></li>
        ) : (
          <li><Link to='/user'>View Profile</Link></li>
        )}
    <li><button onClick={logout}>Logout</button></li>
  </ul>
</div>
                : <Link to='/userLogin'> <button className={`btn btn-${theme.btn}`} >SignIn</button></Link>
     }       


  </div>
        </div>
        
      </div>
     
    
     
    </>
  
}

export default Navbar
