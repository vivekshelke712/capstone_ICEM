import React from "react";
import Whatwedo from '../../assets/Whatwedo.webp'
function AidBridgeWhatWeDo() {
  return (
    <div className=" max-w-7xl mx-auto p-8 ">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="text-content md:w-1/2">
          <p className="text-sm text-gray-500 uppercase">What We Do</p>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            We connect those in need with those who can help
          </h2>
          <p className="text-gray-600 mb-6">
            AidBridge is here to bridge the gap between individuals in need and
            organizations willing to provide support. From local NGOs to community
            groups, we are focused on facilitating impactful assistance where it's
            needed the most.
          </p>
          
          {/* Service List */}
          <div className="service-list space-y-4">
            <div className="flex items-start gap-4">
              <span className="bg-green-100 text-green-600 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold">Immediate Assistance</h3>
                <p className="text-gray-600">
                  Connecting those in urgent need with organizations that can
                  provide immediate help.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-green-100 text-green-600 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold">Resource Allocation</h3>
                <p className="text-gray-600">
                  Facilitating efficient allocation of resources to ensure support
                  reaches the right individuals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-green-100 text-green-600 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold">Community Building</h3>
                <p className="text-gray-600">
                  Strengthening communities by connecting individuals and groups for
                  mutual support and collaboration.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-green-100 text-green-600 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold">Volunteer Network</h3>
                <p className="text-gray-600">
                  Building a network of volunteers to provide assistance, mentorship,
                  and resources.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-content md:w-1/2">
          <img
            src={Whatwedo} // Replace with a relevant AidBridge image
            alt="AidBridge support"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AidBridgeWhatWeDo;