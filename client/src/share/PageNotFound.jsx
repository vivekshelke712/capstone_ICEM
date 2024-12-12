// Import necessary modules
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        {/* Animated 404 text */}
        <h1 className="text-9xl font-bold animate-bounce">404</h1>
        <p className="text-2xl mt-4">Oops! Page Not Found</p>
        <p className="text-gray-400 mt-2">The page you are looking for does not exist or has been moved.</p>

        {/* Animated button */}
        <Link
          to="/"
          className="mt-8 inline-block px-6 py-3 bg-indigo-600 text-white font-medium text-lg rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>

      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 top-1/4 left-1/3"></div>
        <div className="absolute w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000 top-1/3 left-2/3"></div>
      </div>
    </div>
  );
};

export default PageNotFound;

