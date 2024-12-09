import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import { useRegisterMutation } from '../../redux/api/authApi';
import { toast } from 'react-hot-toast';

const UserRegistration = () => {
  const [register, { isSuccess, isError, error }] = useRegisterMutation();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    role: 'user',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(userData);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Registered Successfully');
      navigate('/userLogin');
    }
    if (isError) {
      toast.error(error?.message || 'Registration failed. Try again.');
    }
  }, [isSuccess, isError, error, navigate]);

  return (
    <>
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="phone"
                name="number"
                value={userData.number}
                onChange={handleChange}
                required
                className="mt-2 w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                placeholder="Enter your mobile number"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
                className="mt-2 w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                placeholder="Enter your password"
              />
            </div>

            

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Create an Account
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link
              to="/userLogin"
              className="text-indigo-600 hover:underline font-medium"
            >
              Log in here
            </Link>

          </p>
        
        </div>
      </div>
      
    </>
  );
};

export default UserRegistration;
