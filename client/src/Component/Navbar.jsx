import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/api/authApi";
import { FaBars } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // Hooks for logout mutation
  const [logout, { isSuccess: userLogoutSuccess, isError: userLogoutError, error: userError }] =
    useLogoutMutation();

  useEffect(() => {
    if (userLogoutSuccess) {
      toast.success("Logged out successfully.");
      navigate(0); // Reload the page to reset the state
    }

    if (userLogoutError) {
      toast.error(userError?.data?.message || "User logout failed. Please try again.");
    }
  }, [userLogoutSuccess, userLogoutError, userError, navigate]);

  const handleLogout = () => {
    logout(); // Call user logout mutation
  };

  const getRoleBasedLinks = () => {
    if (user) {
      switch (user.role) {
        case "admin":
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
        case "user":
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
        case "organization":
          return (
            <>
              <li>
                <Link to="/org-Dash" className="hover:text-indigo-300">
                  Organization Dashboard
                </Link>
              </li>
              <li>
                <Link to="/org-Dash/projects" className="hover:text-indigo-300">
                  Manage Tasks
                </Link>
              </li>
              <li>
                <Link to="/org-Dash/ManageService" className="hover:text-indigo-300">
                  Manage Members
                </Link>
              </li>
              <li>
                <Link to="/org-Dash/reports" className="hover:text-indigo-300">
                  View Queries
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

  return (
    <div className="navbar bg-base-100">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
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

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{getRoleBasedLinks()}</ul>
      </div>

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
                <span>{user?.name}</span>
              </li>
              <li>
  {user && user.role === 'user' && (
    <Link to="/user">View Profile</Link>
  )}
  {user && user.role === 'admin' && (
    <Link to="/admin">Go to Dashboard</Link>
  )}
  {user && user.role === 'organization' && (
    <Link to="/org-Dash">Go to Dashboard</Link>
  )}
</li>

              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Login
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <Link to="/userLogin">
                <li>
                  <a>Login as User</a>
                </li>
              </Link>
              <Link to="/orglogin">
                <li>
                  <a>Login as Organization</a>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
