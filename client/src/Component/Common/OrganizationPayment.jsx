import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import { toast } from "react-hot-toast";

const OrganizationPayment = () => {
  const { state } = useLocation(); // Access the state from navigation
  const org = state?.org; // Extract organization details
  const [amount, setAmount] = useState("");
  const navigate = useNavigate(); // Initialize navigate hook

  const loadRazorpayScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => console.log("Razorpay SDK loaded.");
    document.body.appendChild(script);
  };

  React.useEffect(() => {
    loadRazorpayScript();
  }, []);

  const handlePayment = () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }

    const amountInPaise = Number(amount) * 100; // Convert amount to paise

    const options = {
      key: import.meta.env.VITE_RAZORPAY_API, // Replace with your Razorpay key_id
      amount: amountInPaise,
      currency: "INR",
      name: org?.orgName || "Organization", // Use organization's name
      description: `Support ${org?.orgName}`, // Use dynamic description
      image: "https://your-organization-logo-url.com/logo.png", // Your organization's logo
      handler: function (response) {
        console.log("Payment successful!", response);
        toast.success("Payment successful! Thank you for your support.");
        navigate("/thank-you"); // Redirect to the Thank You page
      },
      prefill: {
        name: "Donor / Customer Name", // Optional, can customize
        email: "example@organization.com", // Default email for prefill
        contact: "1234567890", // Default contact for prefill
      },
      notes: {
        purpose: `Payment to support ${org?.orgName}`, // Add purpose dynamically
      },
      theme: {
        color: "#0275d8", // Organization's theme color
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response) {
      console.error("Payment failed!", response.error);
      toast.error("Payment failed! Please try again.");
    });

    rzp.open();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold text-center">
        Support <span className="text-indigo-600">{org?.orgName || "Our Organization"}</span>
      </h1>
      <p className="text-gray-600 text-center max-w-md">
        Your contribution helps {org?.orgName || "us"} continue to provide excellent services and
        support our mission. Enter an amount to proceed.
      </p>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={handlePayment}
        className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Pay ₹{amount || "0"}
      </button>
    </div>
  );
};

export default OrganizationPayment;
