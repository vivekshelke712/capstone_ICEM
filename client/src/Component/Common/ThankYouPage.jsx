import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold text-center">
        Thank You for Your Contribution!
      </h1>
      <p className="text-gray-600 text-center max-w-md">
        Your payment has been successfully processed. Your support helps us continue
        our mission. We truly appreciate your generosity.
      </p>
      <button
        onClick={() => navigate("/organizations")}
        className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Go to Organization Page
      </button>
    </div>
  );
};

export default ThankYouPage;
