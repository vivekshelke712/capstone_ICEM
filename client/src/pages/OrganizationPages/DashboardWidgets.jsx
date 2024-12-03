import React from 'react';

const DashboardWidgets = () => {
  const stats = [
    { title: "Active Requests", count: 45, bgColor: "bg-blue-500" },
    { title: "Pending Approvals", count: 12, bgColor: "bg-yellow-500" },
    { title: "Completed Actions", count: 120, bgColor: "bg-green-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} p-4 text-white rounded-lg shadow-md`}
        >
          <h2 className="text-xl font-semibold">{stat.title}</h2>
          <p className="text-4xl font-bold">{stat.count}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardWidgets;
