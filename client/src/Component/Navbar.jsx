import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/api/authApi';
import { FaBars } from 'react-icons/fa';
import { toast } from 'react-toastify';
import theme from '../theme';
import { useOrgLogoutMutation } from '../redux/api/orgAuthApi';

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const { org } = useSelector((state) => state.org);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [logout, { isSuccess: isUserLogoutSuccess, isError: isUserLogoutError, error: userLogoutError }] =
    useLogoutMutation();
  const [orgLogout, { isSuccess: isOrgLogoutSuccess, isError: isOrgLogoutError, error: orgLogoutError }] =
    useOrgLogoutMutation();
  const navigate = useNavigate();

  // Handle logout success or error
  useEffect(() => {
    if (isUserLogoutSuccess || isOrgLogoutSuccess) {
      toast.success('Logout Successful');
      navigate('/');
    }
    if (isUserLogoutError) {
      toast.error(userLogoutError?.data?.message || 'User Logout failed. Try again.');
    }
    if (isOrgLogoutError) {
      toast.error(orgLogoutError?.data?.message || 'Organization Logout failed. Try again.');
    }
  }, [isUserLogoutSuccess, isOrgLogoutSuccess, isUserLogoutError, isOrgLogoutError, userLogoutError, orgLogoutError, navigate]);

  // Generate role-based navigation links
  const getRoleBasedLinks = () => {
    if (org) {
      return (
        <>
          <li>
            <Link to="/org-Dash" className="hover:text-gray-200">
              Organization Dashboard
            </Link>
          </li>
          <li>
            <Link to="projects" className="hover:text-gray-200">
              Manage Projects
            </Link>
          </li>
          <li>
            <Link to="ManageService" className="hover:text-gray-200">
              Manage Services
            </Link>
          </li>
          <li>
            <Link to="reports" className="hover:text-gray-200">
              Reports & Analytics
            </Link>
          </li>
        </>
      );
    } else if (user) {
      switch (user.role) {
        case 'admin':
          return (
            <>
              <li>
                <Link to="/admin" className="hover:text-indigo-300">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/manage-users" className="hover:text-indigo-300">
                  Manage Users
                </Link>
              </li>
              <li>
                <Link to="/admin/Queries" className="hover:text-indigo-300">
                  Manage Queries
                </Link>
              </li>
              <li>
                <Link to="/admin/ManageOrganizations" className="hover:text-indigo-300">
                  Manage Organizations
                </Link>
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
          return null;
      }
    } else {
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

  // Handle logout
  const handleLogout = () => {
    if (org) {
      orgLogout();
    } else if (user) {
      logout();
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
        {user || org ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="text-2xl">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <span>{user?.name || org?.name}</span>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
      {/* Button */}
      <button
        tabIndex={0}
        onClick={toggleDropdown}
        className="btn btn-ghost bg-slate-200"
      >
        Login
      </button>

      {/* Dropdown Options */}
      {isDropdownOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button >
              <Link to='/userLogin' >Login as User</Link>
            </button>
          </li>
          <li>
            <button >
            <Link to='/orgLogin' >Login as Organization</Link>
            </button>
          </li>
        </ul>
      )}
    </div>

        )}
      </div>
    </div>
  );
};

export default Navbar;
