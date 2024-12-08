import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useLoginMutation } from '../../redux/api/authApi';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import { IoMdEye, IoIosEyeOff } from 'react-icons/io';


const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, { isSuccess, isError, error }] = useLoginMutation();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData);
  };

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      switch (user.role) {
        case 'user':
          navigate('/user');
          break;
        case 'organization':
          navigate('/org-dash');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          break;
      }
    }
  }, [user, navigate]);

  useEffect(() => {
    if (isSuccess) {
      toast.success('You are logged in successfully');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Something went wrong. Try again.');
    }
  }, [isError]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Not a member?{' '}
              <Link
                to="/userRegister"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={loginData.email}
                  onChange={handleChange}
                  className="relative block w-full rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={loginData.password}
                  onChange={handleChange}
                  className="relative block w-full rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoMdEye className="h-5 w-5 text-gray-500" />
                  ) : (
                    <IoIosEyeOff className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>
            </div>

          

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserLogin;
