import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLogoutMutation } from '../../redux/api/authApi'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const AdminNavbar = () => {
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
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
     <Link to='/' className="ml-6"><img src="public\assets\logo2.png" alt=""height='75px' width='150px' /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home </Link></li>
      <li><Link to='/admin'>Dashboard</Link></li>
      <li>
        <Link to='/admin/jobPost'>Post a Job</Link>
      </li>
      <li><Link to='/admin/review'>Review Applications</Link></li>
      <li><Link to='/admin/users'>Users</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Logout</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello Admin</h3>
    <p className="py-4">Are you sure you want to Logout</p>
    <div className="modal-action">
      <form method="dialog">
                  
        <button onClick={handleLogout} className="btn btn-error mx-4">Yes</button>
        <button className="btn btn-success">No</button>
      </form>
    </div>
  </div>
</dialog>
  </div>
</div>
    </div>
  )
}

export default AdminNavbar
