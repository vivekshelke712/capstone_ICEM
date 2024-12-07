import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/api/authApi';
import { FaBars } from 'react-icons/fa';
import { toast } from 'react-toastify';
import theme from '../theme';

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const [logout, { isSuccess, isError, error }] = useLogoutMutation();
  const navigate = useNavigate();

  // Handle logout success or error
  useEffect(() => {
    if (isSuccess) {
      toast.success('Logout Successful');
      navigate('/');
    }
    if (isError) {
      toast.error(error?.data?.message || 'Logout failed. Try again.');
    }
  }, [isSuccess, isError, error, navigate]);

  // Generate role-based navigation links
  const getRoleBasedLinks = () => {
    switch (user?.role) {
      case 'admin':
        return (
          <>
            <li>
              <Link to="/admin">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/manage-users">Manage Users</Link>
            </li>
          </>
        );
      case 'organization':
        return (
          <>
            <li>
              <Link to="/org-Dash">Organization Dashboard</Link>
            </li>
            <li>
              <Link to="/org-Dash">Organization Dashboard</Link>
            </li>
            <li>
              <Link to="/org-Dash">Organization Dashboard</Link>
            </li>
            <li>
              <Link to="/projects">Manage Projects</Link>
            </li>
          </>
        );
      case 'user':
        return (
          <>
            <li>
              <Link to="/" className="text-lg font-serif">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-lg font-serif">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/help" className="text-lg font-serif">
                Help
              </Link>
            </li>
            <li>
              <Link to="/organizations" className="text-lg font-serif">
                Organization
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="text-lg font-serif">
                Contact Us
              </Link>
            </li>
          </>
        );
      default:
        return (
          <>
             <li>
              <Link to="/" className="text-lg font-serif">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-lg font-serif">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/help" className="text-lg font-serif">
                Help
              </Link>
            </li>
            <li>
              <Link to="/organizations" className="text-lg font-serif">
                Organization
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="text-lg font-serif">
                Contact Us
              </Link>
            </li>
          </>
        );
    }
  };

  return (
    <div className="navbar bg-base-100">
      {/* Navbar Start */}
      <div className="navbar-start">
        <Link to="/" className="ml-6">
          <img src="public/assets/logo2.png" alt="Logo" height="75px" width="150px" />
        </Link>
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {getRoleBasedLinks()}
          </ul>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{getRoleBasedLinks()}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="text-2xl">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <span>{user.name}</span>
              </li>
              {user.role === 'admin' ? (
                <li>
                  <Link to="/admin">View Profile</Link>
                </li>
              ) : user.role === 'organization' ? (
                <li>
                  <Link to="/org-dash">View Profile</Link>
                </li>
              ) : (
                <li>
                  <Link to="/user">View Profile</Link>
                </li>
              )}
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/userLogin">
            <button className={`btn btn-${theme.btn}`}>Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
