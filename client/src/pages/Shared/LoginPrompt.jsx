import React from "react";
import { Link } from "react-router-dom";

const LoginPrompt = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl w-full sm:w-96 transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 tracking-wide">
          Please Login to See this Page
        </h1>
        <p className="text-lg text-gray-500 mb-6">Access This Page After Login</p>
        <Link
          to="/userLogin"
          className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default LoginPrompt;
